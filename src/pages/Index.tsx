import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState<number | null>(null);

  const calculateLifePath = () => {
    if (!birthDate) return;
    
    const digits = birthDate.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);
    
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    
    setLifePathNumber(sum);
  };

  const numbers = [
    {
      number: 1,
      title: 'Лидер',
      description: 'Независимость, инициатива, новаторство',
      color: 'from-red-500 to-orange-500'
    },
    {
      number: 2,
      title: 'Дипломат',
      description: 'Сотрудничество, гармония, чувствительность',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      number: 3,
      title: 'Творец',
      description: 'Самовыражение, оптимизм, креативность',
      color: 'from-yellow-500 to-green-500'
    },
    {
      number: 4,
      title: 'Строитель',
      description: 'Стабильность, практичность, надёжность',
      color: 'from-green-500 to-teal-500'
    },
    {
      number: 5,
      title: 'Искатель',
      description: 'Свобода, приключения, адаптивность',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      number: 6,
      title: 'Наставник',
      description: 'Ответственность, забота, служение',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      number: 7,
      title: 'Мыслитель',
      description: 'Духовность, анализ, мудрость',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      number: 8,
      title: 'Магнат',
      description: 'Власть, изобилие, материальный успех',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: 9,
      title: 'Гуманист',
      description: 'Сострадание, универсальность, завершение',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Базовая консультация',
      price: '3 000 ₽',
      features: ['Расчёт числа жизненного пути', 'Анализ личности', 'Краткие рекомендации'],
      icon: 'Star'
    },
    {
      title: 'Полный анализ',
      price: '7 500 ₽',
      features: ['Все базовые расчёты', 'Матрица судьбы', 'Совместимость', 'Рекомендации на год'],
      icon: 'Sparkles',
      popular: true
    },
    {
      title: 'Премиум сопровождение',
      price: '15 000 ₽',
      features: ['Персональная сессия 90 мин', 'Детальный отчёт', 'Поддержка 30 дней', 'Коррекция энергий'],
      icon: 'Crown'
    }
  ];

  const blogPosts = [
    {
      title: 'Что такое число судьбы и как его рассчитать',
      excerpt: 'Узнайте, как ваша дата рождения влияет на вашу жизнь и предназначение',
      date: '15 ноября 2024',
      category: 'Основы'
    },
    {
      title: 'Мастер-числа: 11, 22, 33',
      excerpt: 'Особые вибрации и их значение в нумерологической карте',
      date: '10 ноября 2024',
      category: 'Продвинутый уровень'
    },
    {
      title: 'Персональный год: прогноз на 2025',
      excerpt: 'Как узнать, какие энергии будут сопровождать вас в новом году',
      date: '5 ноября 2024',
      category: 'Прогнозы'
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-gradient">Numeris</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#calculator" className="text-foreground/80 hover:text-foreground transition">Калькулятор</a>
            <a href="#numbers" className="text-foreground/80 hover:text-foreground transition">Числа</a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition">Услуги</a>
            <a href="#blog" className="text-foreground/80 hover:text-foreground transition">Блог</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition">Контакты</a>
          </div>
          <Button className="mystical-glow">Консультация</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              ✨ Раскройте тайны чисел
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Нумерология нового<br />поколения
            </h1>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Откройте своё предназначение через древнюю науку чисел. 
              Персональные расчёты, глубокий анализ и точные прогнозы.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="mystical-glow animate-pulse-glow">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать бесплатно
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-foreground/60">Консультаций</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-foreground/60">Точность</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-foreground/60">Лет опыта</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-foreground/60">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Калькулятор числа жизни
            </h2>
            <p className="text-foreground/70 text-lg">
              Узнайте своё главное число и раскройте потенциал
            </p>
          </div>

          <Card className="mystical-glow bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" className="text-primary" />
                Расчёт числа жизненного пути
              </CardTitle>
              <CardDescription>
                Введите дату рождения для расчёта вашего главного нумерологического числа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="birthdate">Дата рождения</Label>
                  <div className="flex gap-4 mt-2">
                    <Input
                      id="birthdate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={calculateLifePath} className="mystical-glow">
                      Рассчитать
                    </Button>
                  </div>
                </div>

                {lifePathNumber !== null && (
                  <div className="mt-8 p-8 bg-primary/10 rounded-lg border border-primary/30 animate-fade-in">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-4 animate-float">
                        {lifePathNumber}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {numbers.find(n => n.number === lifePathNumber)?.title}
                      </h3>
                      <p className="text-foreground/70">
                        {numbers.find(n => n.number === lifePathNumber)?.description}
                      </p>
                      <Button className="mt-6" variant="outline">
                        <Icon name="Download" className="mr-2" size={18} />
                        Получить полный отчёт
                      </Button>
                    </div>
                  </div>
                )}

                <Tabs defaultValue="meaning" className="mt-8">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="meaning">Значение</TabsTrigger>
                    <TabsTrigger value="career">Карьера</TabsTrigger>
                    <TabsTrigger value="love">Любовь</TabsTrigger>
                  </TabsList>
                  <TabsContent value="meaning" className="mt-4 text-foreground/70">
                    <p>Число жизненного пути показывает ваше предназначение и основные качества личности. 
                    Это главное число в нумерологии, которое влияет на все сферы жизни.</p>
                  </TabsContent>
                  <TabsContent value="career" className="mt-4 text-foreground/70">
                    <p>Ваше число указывает на профессиональные склонности и оптимальные направления 
                    для карьерного развития. Используйте эту информацию для выбора пути.</p>
                  </TabsContent>
                  <TabsContent value="love" className="mt-4 text-foreground/70">
                    <p>В отношениях ваше число определяет стиль взаимодействия с партнёром и 
                    показывает совместимость с другими числами.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="numbers" className="py-20 px-4 bg-background/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Значения чисел
            </h2>
            <p className="text-foreground/70 text-lg">
              Каждое число несёт уникальную энергию и послание
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {numbers.map((num, index) => (
              <Card 
                key={num.number} 
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${num.color} flex items-center justify-center text-3xl font-bold text-white mb-4 group-hover:animate-float`}>
                    {num.number}
                  </div>
                  <CardTitle>{num.title}</CardTitle>
                  <CardDescription>{num.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Услуги и консультации
            </h2>
            <p className="text-foreground/70 text-lg">
              Выберите формат работы, который подходит именно вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative bg-card/50 backdrop-blur-sm border-primary/20 ${service.popular ? 'mystical-glow scale-105' : ''}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <Icon name={service.icon as any} className="text-primary mb-4" size={40} />
                  <CardTitle>{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={service.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-background/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Блог о нумерологии
            </h2>
            <p className="text-foreground/70 text-lg">
              Статьи, исследования и практические советы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{post.category}</Badge>
                  <CardTitle className="group-hover:text-primary transition">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-foreground/50">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Все статьи
              <Icon name="BookOpen" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Свяжитесь с нами
            </h2>
            <p className="text-foreground/70 text-lg">
              Остались вопросы? Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Напишите нам, и мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите, чем мы можем помочь..." rows={4} />
                  </div>
                  <Button className="w-full mystical-glow">
                    Отправить
                    <Icon name="Send" className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-foreground/70">info@numeris.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-sm text-foreground/70">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Социальные сети</h3>
                      <div className="flex gap-3 mt-2">
                        <Button size="sm" variant="outline">Telegram</Button>
                        <Button size="sm" variant="outline">WhatsApp</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <span className="text-xl font-bold text-gradient">Numeris</span>
              </div>
              <p className="text-sm text-foreground/60">
                Современная нумерология для осознанной жизни
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#calculator" className="hover:text-primary transition">Калькулятор</a></li>
                <li><a href="#numbers" className="hover:text-primary transition">Числа</a></li>
                <li><a href="#services" className="hover:text-primary transition">Услуги</a></li>
                <li><a href="#blog" className="hover:text-primary transition">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition">Команда</a></li>
                <li><a href="#" className="hover:text-primary transition">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition">Политика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>info@numeris.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            © 2024 Numeris. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
