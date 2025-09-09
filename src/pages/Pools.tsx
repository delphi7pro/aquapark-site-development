import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Pools = () => {
  const mainPools = [
    {
      name: "Олимпийский бассейн",
      description: "Профессиональный бассейн олимпийского стандарта для серьезного плавания и тренировок.",
      size: "50м x 25м",
      depth: "2-3 метра",
      temperature: "26°C",
      features: ["8 дорожек", "Электронное табло", "Стартовые тумбы", "Подводное освещение"],
      activities: ["Спортивное плавание", "Тренировки", "Соревнования", "Аквааэробика"]
    },
    {
      name: "Волновой бассейн",
      description: "Уникальный бассейн с искусственными волнами до 2 метров высотой. Ощути себя на океанском побережье!",
      size: "40м x 30м",
      depth: "0.5-2.5 метра",
      temperature: "28°C",
      features: ["Волны до 2м", "Песчаный пляж", "Шезлонги", "Бар у бассейна"],
      activities: ["Серфинг на волнах", "Отдых на пляже", "Детские игры", "Фотосессии"]
    },
    {
      name: "Ленивая река",
      description: "Спокойное течение по всему периметру аквапарка. Расслабься и наслаждайся неспешным плаванием.",
      size: "500м длина",
      depth: "1.2 метра",
      temperature: "29°C",
      features: ["Медленное течение", "Тропические растения", "Мостики", "Гроты"],
      activities: ["Релаксация", "Семейное плавание", "Романтические прогулки", "Медитация"]
    }
  ];

  const specialPools = [
    {
      name: "Джакузи VIP",
      description: "Роскошные джакузи с гидромассажем и панорамным видом на аквапарк.",
      capacity: "8 человек",
      temperature: "38°C",
      features: ["Гидромассаж", "Хромотерапия", "Ароматерапия", "Приватность"]
    },
    {
      name: "Контрастные бассейны",
      description: "Система горячих и холодных бассейнов для оздоровительных процедур.",
      temperatures: "15°C / 42°C",
      benefits: "Укрепление иммунитета",
      features: ["Финская сауна", "Русская баня", "Ледяная купель", "Комната отдыха"]
    },
    {
      name: "Минеральный бассейн",
      description: "Бассейн с природными минералами для оздоровления и релаксации.",
      minerals: "Магний, Кальций",
      temperature: "36°C",
      features: ["Лечебные свойства", "Соляная пещера", "Массажные форсунки", "Тихая зона"]
    }
  ];

  const kidsPools = [
    {
      name: "Детский городок",
      description: "Безопасная водная площадка с мини-горками и интерактивными элементами.",
      depth: "0.3-0.8 метра",
      age: "3-12 лет",
      features: ["Мини-горки", "Водные пушки", "Фонтаны", "Мягкое дно"]
    },
    {
      name: "Лягушатник",
      description: "Самый безопасный бассейн для малышей с теплой водой и игрушками.",
      depth: "0.2-0.4 метра",
      age: "1-5 лет",
      features: ["Очень теплая вода", "Игрушки", "Родительская зона", "Мягкие края"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-aqua-blue to-bright-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Бассейны
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            12 уникальных бассейнов для любого настроения
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-accent text-white px-4 py-2 text-lg">12 бассейнов</Badge>
            <Badge className="bg-white text-aqua-blue px-4 py-2 text-lg">Температура +28°C</Badge>
            <Badge className="bg-orange-accent text-white px-4 py-2 text-lg">Круглый год</Badge>
          </div>
        </div>
      </section>

      {/* Pool Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="main" className="text-lg py-3">Основные</TabsTrigger>
              <TabsTrigger value="special" className="text-lg py-3">Специальные</TabsTrigger>
              <TabsTrigger value="kids" className="text-lg py-3">Детские</TabsTrigger>
            </TabsList>

            <TabsContent value="main">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Основные бассейны</h2>
                  <p className="text-lg text-gray-600">Главные водные аттракции для всех посетителей</p>
                </div>
                <div className="grid gap-8">
                  {mainPools.map((pool, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="md:flex">
                        <div className="md:w-1/3 bg-gradient-to-br from-aqua-blue to-bright-blue p-8 text-white flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4">{pool.name}</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Icon name="Ruler" className="mr-3" size={20} />
                              <span>Размер: {pool.size}</span>
                            </div>
                            <div className="flex items-center">
                              <Icon name="Waves" className="mr-3" size={20} />
                              <span>Глубина: {pool.depth}</span>
                            </div>
                            <div className="flex items-center">
                              <Icon name="Thermometer" className="mr-3" size={20} />
                              <span>Температура: {pool.temperature}</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                          <CardDescription className="text-base leading-relaxed mb-6">
                            {pool.description}
                          </CardDescription>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                              <div className="space-y-2">
                                {pool.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-deep-blue mb-3">Активности:</h4>
                              <div className="space-y-2">
                                {pool.activities.map((activity, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <Icon name="Activity" size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                                    <span>{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-aqua-blue hover:bg-bright-blue">
                              <Icon name="Camera" className="mr-2" size={16} />
                              Фото
                            </Button>
                            <Button asChild variant="outline" className="flex-1">
                              <Link to="/schedule">
                                <Icon name="Clock" className="mr-2" size={16} />
                                Расписание
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="special">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Специальные бассейны</h2>
                  <p className="text-lg text-gray-600">Уникальные водные зоны для особых потребностей</p>
                </div>
                <div className="grid md:grid-cols-1 gap-8">
                  {specialPools.map((pool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-purple-200">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <CardTitle className="text-2xl text-deep-blue">{pool.name}</CardTitle>
                          <Badge className="bg-purple-500 text-white">Премиум</Badge>
                        </div>
                        <CardDescription className="text-base mb-6">{pool.description}</CardDescription>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <Icon name="Users" className="mx-auto mb-2 text-purple-500" size={24} />
                            <div className="text-sm text-gray-500">
                              {pool.capacity ? 'Вместимость' : pool.temperatures ? 'Температуры' : 'Минералы'}
                            </div>
                            <div className="font-bold text-deep-blue">
                              {pool.capacity || pool.temperatures || pool.minerals}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <Icon name="Thermometer" className="mx-auto mb-2 text-orange-accent" size={24} />
                            <div className="text-sm text-gray-500">Температура</div>
                            <div className="font-bold text-deep-blue">{pool.temperature || 'Переменная'}</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <Icon name="Heart" className="mx-auto mb-2 text-red-500" size={24} />
                            <div className="text-sm text-gray-500">Польза</div>
                            <div className="font-bold text-deep-blue">{pool.benefits || 'Релаксация'}</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {pool.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <Icon name="Sparkles" size={16} className="text-purple-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button asChild className="flex-1 bg-purple-500 hover:bg-purple-600">
                            <Link to="/spa">
                              <Icon name="Sparkles" className="mr-2" size={16} />
                              SPA-услуги
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="flex-1">
                            <Link to="/booking">
                              <Icon name="Calendar" className="mr-2" size={16} />
                              Забронировать
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="kids">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Детские бассейны</h2>
                  <p className="text-lg text-gray-600">Безопасные водные развлечения для малышей</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {kidsPools.map((pool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-yellow-200">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl text-deep-blue">{pool.name}</CardTitle>
                          <Badge className="bg-yellow-500 text-white">Детский</Badge>
                        </div>
                        <CardDescription className="mb-6">{pool.description}</CardDescription>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <Icon name="Waves" className="mx-auto mb-2 text-aqua-blue" size={20} />
                            <div className="text-xs text-gray-500">Глубина</div>
                            <div className="font-bold text-deep-blue text-sm">{pool.depth}</div>
                          </div>
                          <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <Icon name="Baby" className="mx-auto mb-2 text-pink-500" size={20} />
                            <div className="text-xs text-gray-500">Возраст</div>
                            <div className="font-bold text-deep-blue text-sm">{pool.age}</div>
                          </div>
                          <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <Icon name="Shield" className="mx-auto mb-2 text-green-500" size={20} />
                            <div className="text-xs text-gray-500">Безопасность</div>
                            <div className="font-bold text-deep-blue text-sm">Макс</div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {pool.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <Icon name="Heart" size={16} className="text-pink-500 mr-2 flex-shrink-0" />
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

      {/* Pool Schedule */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-6">Расписание бассейнов</h2>
            <p className="text-lg text-gray-600">Специальные программы и время работы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="mr-2 text-aqua-blue" />
                  Общее расписание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Олимпийский бассейн</span>
                    <span className="font-medium">6:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Волновой бассейн</span>
                    <span className="font-medium">9:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ленивая река</span>
                    <span className="font-medium">9:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Детские бассейны</span>
                    <span className="font-medium">9:00 - 21:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Activity" className="mr-2 text-orange-accent" />
                  Специальные программы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Аквааэробика</span>
                    <span className="font-medium">10:00, 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Детское плавание</span>
                    <span className="font-medium">16:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Волны (каждый час)</span>
                    <span className="font-medium">:00 - :15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ночное плавание</span>
                    <span className="font-medium">21:00 - 23:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/schedule">
                <Icon name="Calendar" className="mr-2" size={20} />
                Полное расписание
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-aqua-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Окунись в мир водных удовольствий</h2>
          <p className="text-xl mb-8 opacity-90">
            12 уникальных бассейнов ждут тебя каждый день!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90">
              <Link to="/tickets">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
              <Link to="/spa">
                <Icon name="Sparkles" className="mr-2" size={20} />
                SPA-услуги
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pools;