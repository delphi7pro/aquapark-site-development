import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const slides = [
    {
      name: "Tornado Fury",
      description: "Экстремальная воронкообразная горка с ускорением до 60 км/ч. Четырехместный плот несется по спиральному туннелю, создавая невероятные ощущения невесомости.",
      height: "25 метров",
      speed: "60 км/ч",
      thrill: "Экстрим",
      image: "img/09fff898-7352-4d4a-8380-f1a4727e9eb7.jpg",
      features: ["Спиральный туннель", "Четырехместный плот", "LED подсветка", "Звуковые эффекты"]
    },
    {
      name: "Blue Thunder",
      description: "Самая высокая скоростная горка с элементами свободного падения. Крутые виражи и неожиданные повороты заставят ваше сердце биться быстрее.",
      height: "30 метров",
      speed: "70 км/ч", 
      thrill: "Экстрим+",
      image: "img/c012d1b9-2502-445f-b4ef-f0171c4bbd29.jpg",
      features: ["Свободное падение", "Прозрачные участки", "Система безопасности", "Фото на финише"]
    },
    {
      name: "Aqua Storm",
      description: "Многоуровневая система горок с водными каскадами. Идеальное сочетание скорости и водных эффектов для незабываемых эмоций.",
      height: "20 метров",
      speed: "45 км/ч",
      thrill: "Высокий",
      image: "img/1d474f9e-675b-49cb-8ecb-8a5b6f878827.jpg",
      features: ["Водные каскады", "Многоуровневая система", "Цветная подсветка", "Музыкальное сопровождение"]
    }
  ];

  const attractions = [
    { name: "Детская зона", description: "Безопасные горки и игровые комплексы", icon: "Baby" },
    { name: "Волновой бассейн", description: "Искусственные волны до 2 метров", icon: "Waves" },
    { name: "Ленивая река", description: "Спокойное течение по периметру парка", icon: "Navigation" },
    { name: "SPA-зона", description: "Джакузи и релакс-бассейны", icon: "Heart" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-blue via-aqua-blue to-deep-blue">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            AQUA<span className="text-orange-accent">STORM</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Самые экстремальные водные аттракционы в мире
          </p>
          <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4 text-lg animate-scale-in">
            <Link to="/tickets">
            <Icon name="Zap" className="mr-2" size={24} />
            Почувствуй адреналин
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      {/* Quick Info Sections */}
      <section className="py-16 px-4 bg-gradient-to-r from-aqua-blue to-bright-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Режим работы</h3>
              <p className="opacity-90">Ежедневно 9:00-22:00</p>
              <Link to="/schedule" className="text-orange-accent hover:underline text-sm">Подробнее</Link>
            </div>
            <div className="text-center">
              <Icon name="Thermometer" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Температура воды</h3>
              <p className="opacity-90">+28°C круглый год</p>
              <Link to="/weather" className="text-orange-accent hover:underline text-sm">Погода</Link>
            </div>
            <div className="text-center">
              <Icon name="Car" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Парковка</h3>
              <p className="opacity-90">Бесплатная на 500 мест</p>
              <Link to="/parking" className="text-orange-accent hover:underline text-sm">Схема</Link>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="opacity-90">Сертифицированные спасатели</p>
              <Link to="/safety" className="text-orange-accent hover:underline text-sm">Правила</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Extreme Slides Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-accent text-white px-4 py-2">ЭКСТРЕМАЛЬНЫЕ ГОРКИ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
              Бешеные горки для смелых
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Подробные обзоры самых захватывающих водных аттракционов с техническими характеристиками
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {slides.map((slide, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={slide.image} 
                      alt={slide.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-2xl text-deep-blue">{slide.name}</CardTitle>
                        <Badge variant="destructive" className="bg-orange-accent">
                          {slide.thrill}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {slide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Icon name="ArrowUp" className="mx-auto mb-2 text-aqua-blue" size={24} />
                          <div className="text-sm text-gray-500">Высота</div>
                          <div className="font-bold text-deep-blue">{slide.height}</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Zap" className="mx-auto mb-2 text-orange-accent" size={24} />
                          <div className="text-sm text-gray-500">Скорость</div>
                          <div className="font-bold text-deep-blue">{slide.speed}</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Star" className="mx-auto mb-2 text-orange-accent" size={24} />
                          <div className="text-sm text-gray-500">Уровень</div>
                          <div className="font-bold text-deep-blue">{slide.thrill}</div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button asChild className="w-full bg-aqua-blue hover:bg-bright-blue">
                        <Link to="/slides">
                        <Icon name="Play" className="mr-2" size={16} />
                        Смотреть видео
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Новости и события</h2>
            <p className="text-lg text-gray-600">Актуальная информация и предстоящие мероприятия</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-orange-accent text-white">НОВИНКА</Badge>
                <h3 className="text-xl font-bold text-deep-blue mb-3">Новая горка "Космический вихрь"</h3>
                <p className="text-gray-600 mb-4">Открытие самой высокой горки в России - 35 метров экстрима!</p>
                <Link to="/news" className="text-aqua-blue hover:underline font-medium">Читать далее →</Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-green-500 text-white">АКЦИЯ</Badge>
                <h3 className="text-xl font-bold text-deep-blue mb-3">Семейные выходные</h3>
                <p className="text-gray-600 mb-4">Скидка 30% на семейные билеты по выходным в марте</p>
                <Link to="/tickets" className="text-aqua-blue hover:underline font-medium">Купить билет →</Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-purple-500 text-white">СОБЫТИЕ</Badge>
                <h3 className="text-xl font-bold text-deep-blue mb-3">Ночь в аквапарке</h3>
                <p className="text-gray-600 mb-4">Специальное мероприятие для взрослых с 22:00 до 2:00</p>
                <Link to="/events" className="text-aqua-blue hover:underline font-medium">Подробности →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Дополнительные услуги</h2>
            <p className="text-lg text-gray-600">Полный спектр услуг для комфортного отдыха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4 text-orange-accent" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">Дни рождения</h3>
                <p className="text-gray-600 mb-4">Организация незабываемых праздников для детей и взрослых</p>
                <Button asChild variant="outline">
                  <Link to="/birthday">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-orange-accent" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">Корпоративы</h3>
                <p className="text-gray-600 mb-4">Тимбилдинг и корпоративные мероприятия любого масштаба</p>
                <Button asChild variant="outline">
                  <Link to="/corporate">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <Icon name="Crown" size={48} className="mx-auto mb-4 text-orange-accent" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">VIP-зона</h3>
                <p className="text-gray-600 mb-4">Эксклюзивный отдых с персональным сервисом</p>
                <Button asChild variant="outline">
                  <Link to="/vip">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-aqua-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AquaStorm в цифрах</h2>
            <p className="text-lg opacity-90">Впечатляющие факты о нашем аквапарке</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-accent mb-2">25</div>
              <div className="text-lg">Водных горок</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-accent mb-2">12</div>
              <div className="text-lg">Бассейнов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-accent mb-2">5000</div>
              <div className="text-lg">Посетителей в день</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-accent mb-2">15000</div>
              <div className="text-lg">м² площади</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Отзывы посетителей</h2>
            <p className="text-lg text-gray-600">Что говорят о нас наши гости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"Потрясающий аквапарк! Горки просто невероятные, особенно Tornado Fury. Дети в восторге!"</p>
                <div className="font-medium text-deep-blue">Анна К.</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"Отличное место для семейного отдыха. Чисто, безопасно, персонал очень дружелюбный."</p>
                <div className="font-medium text-deep-blue">Михаил П.</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"SPA-зона просто волшебная! После активного дня на горках так приятно расслабиться."</p>
                <div className="font-medium text-deep-blue">Елена В.</div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/reviews">Все отзывы</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Attractions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Другие аттракционы</h2>
            <p className="text-lg text-gray-600">Развлечения для всей семьи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Link key={index} to={attraction.name === 'Детская зона' ? '/kids' : attraction.name === 'Волновой бассейн' ? '/pools' : attraction.name === 'SPA-зона' ? '/spa' : '/pools'}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={attraction.icon} size={48} className="mx-auto mb-4 text-aqua-blue" />
                  <h3 className="text-xl font-bold text-deep-blue mb-3">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pools Section */}
      <section className="py-20 px-4 bg-aqua-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Бассейны мирового класса</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <Icon name="Waves" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Олимпийский бассейн</h3>
              <p className="opacity-90">50 метров профессионального плавания</p>
            </div>
            <div className="p-6">
              <Icon name="Heart" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Термальные ванны</h3>
              <p className="opacity-90">Расслабляющие процедуры и SPA</p>
            </div>
            <div className="p-6">
              <Icon name="Baby" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Детский городок</h3>
              <p className="opacity-90">Безопасная зона для малышей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Transport */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Как добраться</h2>
            <p className="text-lg text-gray-600">Удобное расположение в центре города</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Icon name="Car" size={48} className="mx-auto mb-4 text-aqua-blue" />
              <h3 className="text-xl font-bold text-deep-blue mb-3">На автомобиле</h3>
              <p className="text-gray-600 mb-4">Бесплатная парковка на 500 мест</p>
              <Button asChild variant="outline">
                <Link to="/parking">Схема проезда</Link>
              </Button>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Train" size={48} className="mx-auto mb-4 text-aqua-blue" />
              <h3 className="text-xl font-bold text-deep-blue mb-3">На метро</h3>
              <p className="text-gray-600 mb-4">Станция "Водная" - 5 минут пешком</p>
              <Button asChild variant="outline">
                <Link to="/map">Карта</Link>
              </Button>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Bus" size={48} className="mx-auto mb-4 text-aqua-blue" />
              <h3 className="text-xl font-bold text-deep-blue mb-3">На автобусе</h3>
              <p className="text-gray-600 mb-4">Маршруты 15, 23, 45 до остановки "Аквапарк"</p>
              <Button asChild variant="outline">
                <Link to="/contacts">Контакты</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deep-blue mb-8">Кафе и рестораны</h2>
          <div className="bg-gradient-to-r from-aqua-blue to-bright-blue p-8 rounded-2xl text-white">
            <Icon name="Coffee" size={64} className="mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">AquaFood Court</h3>
            <p className="text-lg opacity-90 mb-6">
              Премиальная кухня с панорамным видом на аквапарк. Здоровое питание и освежающие напитки.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-aqua-blue">
              <Link to="/restaurants">
              Посмотреть меню
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 px-4 bg-deep-blue text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Готов к экстриму?</h2>
          <p className="text-xl opacity-90 mb-8">Забронируй билеты и окунись в мир водных приключений</p>
          <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90 px-8 py-4 text-lg">
            <Link to="/tickets">
            <Icon name="Ticket" className="mr-2" size={24} />
            Купить билеты онлайн
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;