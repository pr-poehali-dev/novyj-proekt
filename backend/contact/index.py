import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form messages via SMTP to email
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_req = ContactRequest(**body_data)
    
    smtp_email = os.environ.get('SMTP_EMAIL')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = 'ruslan399885@gmail.com'
    
    if not smtp_email or not smtp_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP not configured'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новое сообщение от {contact_req.name}'
    msg['From'] = smtp_email
    msg['To'] = recipient_email
    msg['Reply-To'] = contact_req.email
    
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #9b87f5; border-bottom: 2px solid #9b87f5; padding-bottom: 10px;">
            Новое сообщение с сайта Numeris
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Имя:</strong> {contact_req.name}</p>
            <p><strong>Email:</strong> <a href="mailto:{contact_req.email}">{contact_req.email}</a></p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #9b87f5; margin: 20px 0;">
            <h3 style="margin-top: 0;">Сообщение:</h3>
            <p style="white-space: pre-wrap;">{contact_req.message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            Это письмо отправлено автоматически с формы обратной связи сайта Numeris
          </p>
        </div>
      </body>
    </html>
    '''
    
    text_content = f'''
    Новое сообщение с сайта Numeris
    
    Имя: {contact_req.name}
    Email: {contact_req.email}
    
    Сообщение:
    {contact_req.message}
    '''
    
    part_text = MIMEText(text_content, 'plain', 'utf-8')
    part_html = MIMEText(html_content, 'html', 'utf-8')
    
    msg.attach(part_text)
    msg.attach(part_html)
    
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(smtp_email, smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Сообщение успешно отправлено'
        })
    }
