import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

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
          <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4 text-lg animate-scale-in">
            <Icon name="Zap" className="mr-2" size={24} />
            Почувствуй адреналин
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
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
                      <Button className="w-full bg-aqua-blue hover:bg-bright-blue">
                        <Icon name="Play" className="mr-2" size={16} />
                        Смотреть видео
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
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
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <Icon name={attraction.icon} size={48} className="mx-auto mb-4 text-aqua-blue" />
                  <h3 className="text-xl font-bold text-deep-blue mb-3">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </CardContent>
              </Card>
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
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-aqua-blue">
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 px-4 bg-deep-blue text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Готов к экстриму?</h2>
          <p className="text-xl opacity-90 mb-8">Забронируй билеты и окунись в мир водных приключений</p>
          <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90 px-8 py-4 text-lg">
            <Icon name="Ticket" className="mr-2" size={24} />
            Купить билеты онлайн
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;