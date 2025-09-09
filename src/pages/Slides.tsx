import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Slides = () => {
  const extremeSlides = [
    {
      name: "Tornado Fury",
      description: "Экстремальная воронкообразная горка с ускорением до 60 км/ч. Четырехместный плот несется по спиральному туннелю.",
      height: "25 метров",
      speed: "60 км/ч",
      thrill: "Экстрим",
      minAge: "14+",
      image: "img/09fff898-7352-4d4a-8380-f1a4727e9eb7.jpg",
      features: ["Спиральный туннель", "Четырехместный плот", "LED подсветка", "Звуковые эффекты"],
      restrictions: ["Минимальный рост 140 см", "Максимальный вес 120 кг", "Не рекомендуется беременным"]
    },
    {
      name: "Blue Thunder",
      description: "Самая высокая скоростная горка с элементами свободного падения. Крутые виражи и неожиданные повороты.",
      height: "30 метров",
      speed: "70 км/ч",
      thrill: "Экстрим+",
      minAge: "16+",
      image: "img/c012d1b9-2502-445f-b4ef-f0171c4bbd29.jpg",
      features: ["Свободное падение", "Прозрачные участки", "Система безопасности", "Фото на финише"],
      restrictions: ["Минимальный рост 150 см", "Максимальный вес 110 кг", "Медицинские ограничения"]
    },
    {
      name: "Cosmic Whirl",
      description: "Новейшая горка с космическими эффектами и невесомостью. Уникальная система освещения создает эффект полета в космосе.",
      height: "35 метров",
      speed: "80 км/ч",
      thrill: "Экстрим++",
      minAge: "18+",
      image: "img/1d474f9e-675b-49cb-8ecb-8a5b6f878827.jpg",
      features: ["Эффект невесомости", "Космическая подсветка", "Звуковое сопровождение", "VR-очки"],
      restrictions: ["Минимальный рост 160 см", "Максимальный вес 100 кг", "Строгие медицинские ограничения"]
    }
  ];

  const familySlides = [
    {
      name: "Family Rapids",
      description: "Семейная горка для совместного спуска. Безопасная и увлекательная для всех возрастов.",
      height: "12 метров",
      speed: "25 км/ч",
      thrill: "Семейный",
      minAge: "6+",
      features: ["Широкие плоты", "Мягкие повороты", "Безопасные борта", "Детские ремни"]
    },
    {
      name: "Rainbow Slide",
      description: "Яркая разноцветная горка с множеством поворотов и водных эффектов.",
      height: "15 метров",
      speed: "30 км/ч",
      thrill: "Умеренный",
      minAge: "8+",
      features: ["Цветная подсветка", "Водные завесы", "Музыкальное сопровождение", "Фотозоны"]
    }
  ];

  const kidsSlides = [
    {
      name: "Mini Adventure",
      description: "Детская горка с безопасными спусками и игровыми элементами.",
      height: "5 метров",
      speed: "15 км/ч",
      thrill: "Детский",
      minAge: "3+",
      features: ["Низкая высота", "Мягкие материалы", "Игровые элементы", "Постоянное наблюдение"]
    },
    {
      name: "Splash Zone",
      description: "Интерактивная водная площадка с мини-горками и фонтанами.",
      height: "3 метра",
      speed: "10 км/ч",
      thrill: "Безопасный",
      minAge: "2+",
      features: ["Мелкая вода", "Мягкое покрытие", "Родительская зона", "Развивающие элементы"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-aqua-blue to-bright-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Водные горки
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            25 уникальных горок для любого уровня адреналина
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-accent text-white px-4 py-2 text-lg">25 горок</Badge>
            <Badge className="bg-white text-aqua-blue px-4 py-2 text-lg">3 уровня сложности</Badge>
            <Badge className="bg-orange-accent text-white px-4 py-2 text-lg">Для всех возрастов</Badge>
          </div>
        </div>
      </section>

      {/* Slides Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="extreme" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="extreme" className="text-lg py-3">Экстремальные</TabsTrigger>
              <TabsTrigger value="family" className="text-lg py-3">Семейные</TabsTrigger>
              <TabsTrigger value="kids" className="text-lg py-3">Детские</TabsTrigger>
            </TabsList>

            <TabsContent value="extreme">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Экстремальные горки</h2>
                  <p className="text-lg text-gray-600">Для любителей острых ощущений и адреналина</p>
                </div>
                <div className="grid gap-8">
                  {extremeSlides.map((slide, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
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
                              <Badge variant="destructive" className="bg-red-500">
                                {slide.thrill}
                              </Badge>
                            </div>
                            <CardDescription className="text-base leading-relaxed">
                              {slide.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-0">
                            <div className="grid grid-cols-4 gap-4 mb-6">
                              <div className="text-center">
                                <Icon name="ArrowUp" className="mx-auto mb-2 text-aqua-blue" size={20} />
                                <div className="text-xs text-gray-500">Высота</div>
                                <div className="font-bold text-deep-blue text-sm">{slide.height}</div>
                              </div>
                              <div className="text-center">
                                <Icon name="Zap" className="mx-auto mb-2 text-orange-accent" size={20} />
                                <div className="text-xs text-gray-500">Скорость</div>
                                <div className="font-bold text-deep-blue text-sm">{slide.speed}</div>
                              </div>
                              <div className="text-center">
                                <Icon name="User" className="mx-auto mb-2 text-green-500" size={20} />
                                <div className="text-xs text-gray-500">Возраст</div>
                                <div className="font-bold text-deep-blue text-sm">{slide.minAge}</div>
                              </div>
                              <div className="text-center">
                                <Icon name="Star" className="mx-auto mb-2 text-orange-accent" size={20} />
                                <div className="text-xs text-gray-500">Уровень</div>
                                <div className="font-bold text-deep-blue text-sm">{slide.thrill}</div>
                              </div>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                              <div className="grid grid-cols-2 gap-2 mb-4">
                                {slide.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <h4 className="font-semibold text-deep-blue mb-3">Ограничения:</h4>
                              <div className="space-y-1">
                                {slide.restrictions.map((restriction, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-red-600">
                                    <Icon name="AlertTriangle" size={16} className="text-red-500 mr-2 flex-shrink-0" />
                                    <span>{restriction}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <Button className="flex-1 bg-aqua-blue hover:bg-bright-blue">
                                <Icon name="Play" className="mr-2" size={16} />
                                Видео
                              </Button>
                              <Button asChild variant="outline" className="flex-1">
                                <Link to="/safety">
                                  <Icon name="Shield" className="mr-2" size={16} />
                                  Безопасность
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="family">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Семейные горки</h2>
                  <p className="text-lg text-gray-600">Безопасные развлечения для всей семьи</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {familySlides.map((slide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl text-deep-blue">{slide.name}</CardTitle>
                          <Badge className="bg-green-500 text-white">{slide.thrill}</Badge>
                        </div>
                        <CardDescription className="mb-6">{slide.description}</CardDescription>
                        
                        <div className="grid grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <Icon name="ArrowUp" className="mx-auto mb-2 text-aqua-blue" size={20} />
                            <div className="text-xs text-gray-500">Высота</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.height}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="Zap" className="mx-auto mb-2 text-orange-accent" size={20} />
                            <div className="text-xs text-gray-500">Скорость</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.speed}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="User" className="mx-auto mb-2 text-green-500" size={20} />
                            <div className="text-xs text-gray-500">Возраст</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.minAge}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="Heart" className="mx-auto mb-2 text-pink-500" size={20} />
                            <div className="text-xs text-gray-500">Тип</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.thrill}</div>
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
                        
                        <Button className="w-full bg-green-500 hover:bg-green-600">
                          <Icon name="Users" className="mr-2" size={16} />
                          Подходит для семьи
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="kids">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Детские горки</h2>
                  <p className="text-lg text-gray-600">Безопасные развлечения для самых маленьких</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {kidsSlides.map((slide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-yellow-200">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl text-deep-blue">{slide.name}</CardTitle>
                          <Badge className="bg-yellow-500 text-white">{slide.thrill}</Badge>
                        </div>
                        <CardDescription className="mb-6">{slide.description}</CardDescription>
                        
                        <div className="grid grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <Icon name="ArrowUp" className="mx-auto mb-2 text-aqua-blue" size={20} />
                            <div className="text-xs text-gray-500">Высота</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.height}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="Zap" className="mx-auto mb-2 text-orange-accent" size={20} />
                            <div className="text-xs text-gray-500">Скорость</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.speed}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="Baby" className="mx-auto mb-2 text-pink-500" size={20} />
                            <div className="text-xs text-gray-500">Возраст</div>
                            <div className="font-bold text-deep-blue text-sm">{slide.minAge}</div>
                          </div>
                          <div className="text-center">
                            <Icon name="Shield" className="mx-auto mb-2 text-green-500" size={20} />
                            <div className="text-xs text-gray-500">Безопасность</div>
                            <div className="font-bold text-deep-blue text-sm">Макс</div>
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
                        
                        <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600">
                          <Link to="/kids">
                            <Icon name="Baby" className="mr-2" size={16} />
                            Детская зона
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Shield" size={64} className="mx-auto mb-6 text-red-500" />
          <h2 className="text-3xl font-bold text-deep-blue mb-6">Безопасность превыше всего</h2>
          <p className="text-lg text-gray-600 mb-8">
            Все наши горки соответствуют международным стандартам безопасности. 
            Квалифицированные спасатели следят за безопасностью 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/safety">
                <Icon name="FileText" className="mr-2" size={16} />
                Правила безопасности
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/rules">
                <Icon name="AlertTriangle" className="mr-2" size={16} />
                Ограничения
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-aqua-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готов покорить наши горки?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выбери свой уровень адреналина и получи незабываемые эмоции!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90">
              <Link to="/tickets">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
              <Link to="/booking">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slides;