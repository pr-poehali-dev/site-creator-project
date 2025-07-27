import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const services = [
    {
      icon: 'Code',
      title: 'Разработка сайтов',
      description: 'Создаем современные сайты с нуля за 2-3 дня. От лендингов до сложных веб-приложений.',
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная адаптация',
      description: 'Ваш сайт будет идеально выглядеть на всех устройствах и экранах.',
    },
    {
      icon: 'Zap',
      title: 'Молниеносная скорость',
      description: 'Оптимизируем производительность до последнего пикселя.',
    },
    {
      icon: 'Palette',
      title: 'Дизайн и UX',
      description: 'Создаем красивые интерфейсы, которые конвертируют посетителей в клиентов.',
    },
  ];

  const portfolio = [
    { title: 'E-commerce платформа', tech: ['React', 'Node.js', 'MongoDB'], image: '/img/ff5675cf-d968-4f64-8c1b-b34bab5c84c1.jpg' },
    { title: 'Корпоративный сайт', tech: ['Vue.js', 'TypeScript'], image: '/img/ff5675cf-d968-4f64-8c1b-b34bab5c84c1.jpg' },
    { title: 'SaaS приложение', tech: ['React', 'Python', 'PostgreSQL'], image: '/img/ff5675cf-d968-4f64-8c1b-b34bab5c84c1.jpg' },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      company: 'ООО "ТехноПро"',
      text: 'Невероятная скорость работы! За 2 дня получили полноценный сайт, который превзошел все ожидания.',
      rating: 5,
    },
    {
      name: 'Мария Сидорова',
      company: 'Интернет-магазин "Стиль"',
      text: 'Профессиональный подход и доступные цены. Рекомендую всем, кто хочет качественный сайт.',
      rating: 5,
    },
    {
      name: 'Дмитрий Козлов',
      company: 'Стартап "Инновации"',
      text: 'Команда превратила нашу идею в реальность за рекордное время. Отличная работа!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/09ee422b-461f-49a5-b830-8c7e6bba5db3.png" 
              alt="Логотип" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-heading font-bold">Студия Ибрагимова Юсуфа</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О студии</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2"
            >
              <Icon name={darkMode ? "Sun" : "Moon"} size={16} />
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://t.me/IbragimovYusuf', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-2xl opacity-40"></div>
        </div>
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight">
              <span className="text-primary block mb-2">ОПЫТ 6 ЛЕТ,</span>
              <span className="block">А РЕЗУЛЬТАТ</span>
              <span className="text-primary block">КАК У БОГОВ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Пока другие годами топчутся на месте, мы за пару дней создаем сайты, 
              которые взрывают интернет. Профессионально. Быстро. Дешево.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://t.me/IbragimovYusuf', '_blank')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать сайт
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/IbragimovYusuf', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Телеграм
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 relative overflow-hidden">
        {/* Background blur elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Посмотрите примеры наших проектов и убедитесь в качестве нашей работы
          </p>
          
          <div className="relative">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-12">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Eye" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Смотрите наши работы</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Переходите в наш Telegram-канал и изучайте реальные кейсы наших клиентов
                  </p>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 group-hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://t.me/IbragimovYusuf/10', '_blank')}
                  >
                    <Icon name="ExternalLink" size={20} className="mr-2" />
                    Посмотреть работы
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-secondary/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/5 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                О <span className="text-primary">студии</span>
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Мы работаем в сфере веб-разработки уже 6 лет, но в отличие от многих "коллег", 
                мы не стоим на месте. Каждый проект — это новый вызов, который мы принимаем 
                с энтузиазмом космонавта, летящего к новой планете.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">2-3</div>
                  <div className="text-sm text-muted-foreground">Дня на проект</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/ff5675cf-d968-4f64-8c1b-b34bab5c84c1.jpg" 
                alt="Наша команда" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Rocket" size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-card/90 hover:bg-card hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-secondary/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Готовы к <span className="text-primary">взлету</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Не теряйте время на поиски. Мы уже здесь и готовы создать сайт вашей мечты. 
            Быстро, качественно, за разумные деньги.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://t.me/IbragimovYusuf', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('tel:+79785302780', '_self')}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 978 530-27-80
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Code" size={24} className="text-primary" />
            <span className="text-xl font-heading font-bold">Студия Ибрагимова Юсуфа</span>
          </div>
          <div className="text-muted-foreground mb-4 space-y-3">
            <p>Профессиональная веб-разработка с 2018 года</p>
            <div className="text-sm space-y-2 bg-card/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto border border-border/50">
              <p className="flex items-center justify-center space-x-2">
                <Icon name="Phone" size={14} className="text-primary" />
                <span>Звонки: 9:00 - 19:00 (ежедневно)</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={14} className="text-primary" />
                <span>Сообщения в Telegram: 24/7</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://t.me/IbragimovYusuf', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('mailto:studio.ibragimovyusuf@gmail.com', '_self')}
            >
              <Icon name="Mail" size={16} className="mr-2" />
              studio.ibragimovyusuf@gmail.com
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('tel:+79785302780', '_self')}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 978 530-27-80
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}