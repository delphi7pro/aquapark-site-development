import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Ночь в аквапарке",
      date: "15 марта 2024",
      time: "22:00 - 02:00",
      description: "Эксклюзивное мероприятие для взрослых с DJ-сетом и специальными коктейлями",
      price: "2500₽",
      category: "Взрослые",
      features: ["18+", "DJ", "Коктейли", "Фотозона"],
      image: "night-party"
    },
    {
      title: "Детский праздник 'Пираты Карибского моря'",
      date: "20 марта 2024",
      time: "14:00 - 17:00",
      description: "Тематический праздник с аниматорами, конкурсами и поиском сокровищ",
      price: "800₽",
      category: "Детские",
      features: ["Аниматоры", "Конкурсы", "Призы", "Угощения"],
      image: "pirates"
    },
    {
      title: "Соревнования по плаванию",
      date: "25 марта 2024",
      time: "10:00 - 16:00",
      description: "Открытые соревнования среди любителей в олимпийском бассейне",
      price: "Бесплатно",
      category: "Спорт",
      features: ["Медали", "Призы", "Фото", "Сертификаты"],
      image: "swimming"
    },
    {
      title: "Мастер-класс по аквааэробике",
      date: "30 марта 2024",
      time: "11:00 - 12:30",
      description: "Профессиональный тренер покажет основы аквааэробики",
      price: "500₽",
      category: "Фитнес",
      features: ["Тренер", "Инвентарь", "Сертификат", "Фото"],
      image: "aqua-aerobics"
    }
  ];

  const regularEvents = [
    {
      title: "Аквааэробика",
      schedule: "Пн, Ср, Пт - 10:00, 19:00",
      description: "Групповые занятия аквааэробикой с профессиональным инструктором",
      price: "300₽/занятие",
      duration: "45 минут"
    },
    {
      title: "Детская анимация",
      schedule: "Сб, Вс - 15:00-17:00",
      description: "Развлекательная программа для детей с играми и конкурсами",
      price: "Бесплатно",
      duration: "2 часа"
    },
    {
      title: "Ночное плавание",
      schedule: "Пт, Сб - 21:00-23:00",
      description: "Романтическое плавание при приглушенном освещении",
      price: "200₽ доплата",
      duration: "2 часа"
    },
    {
      title: "Утренняя зарядка",
      schedule: "Ежедневно - 8:00-8:30",
      description: "Бодрящая зарядка в бассейне для раннего старта дня",
      price: "Бесплатно",
      duration: "30 минут"
    }
  ];

  const seasonalEvents = [
    {
      title: "Новогодняя вечеринка",
      period: "31 декабря",
      description: "Грандиозная новогодняя вечеринка с шоу-программой и фейерверком",
      features: ["Шоу-программа", "Фейерверк", "Подарки", "Банкет"]
    },
    {
      title: "День защитника Отечества",
      period: "23 февраля",
      description: "Специальные скидки для мужчин и тематические мероприятия",
      features: ["Скидки для мужчин", "Соревнования", "Призы", "Фотозона"]
    },
    {
      title: "Международный женский день",
      period: "8 марта",
      description: "Праздничная программа для прекрасной половины человечества",
      features: ["Скидки для женщин", "Цветы", "Комплименты", "SPA-процедуры"]
    },
    {
      title: "День защиты детей",
      period: "1 июня",
      description: "Большой детский праздник с аниматорами и подарками",
      features: ["Детские скидки", "Аниматоры", "Подарки", "Конкурсы"]
    }
  ];

  const corporateEvents = [
    {
      title: "Тимбилдинг в аквапарке",
      description: "Корпоративные мероприятия с командными играми и соревнованиями",
      features: ["Командные игры", "Соревнования", "Банкет", "Ведущий"],
      minPeople: "От 20 человек",
      price: "От 2000₽/чел"
    },
    {
      title: "Корпоративная вечеринка",
      description: "Организация корпоративных праздников и торжеств",
      features: ["Банкетный зал", "Развлекательная программа", "DJ", "Фотограф"],
      minPeople: "От 30 человек",
      price: "От 3000₽/чел"
    },
    {
      title: "Деловые встречи",
      description: "Конференц-зал для проведения деловых встреч и презентаций",
      features: ["Конференц-зал", "Проектор", "Кофе-брейк", "WiFi"],
      minPeople: "От 10 человек",
      price: "От 1500₽/чел"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            События и мероприятия
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Яркие события и незабываемые впечатления каждый день
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-purple-500 px-4 py-2 text-lg">Еженедельные события</Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">Тематические вечеринки</Badge>
            <Badge className="bg-white text-purple-500 px-4 py-2 text-lg">Корпоративы</Badge>
          </div>
        </div>
      </section>

      {/* Events Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="upcoming" className="text-lg py-3">Предстоящие</TabsTrigger>
              <TabsTrigger value="regular" className="text-lg py-3">Регулярные</TabsTrigger>
              <TabsTrigger value="seasonal" className="text-lg py-3">Сезонные</TabsTrigger>
              <TabsTrigger value="corporate" className="text-lg py-3">Корпоративные</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Предстоящие события</h2>
                  <p className="text-lg text-gray-600">Ближайшие мероприятия в аквапарке</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <Icon name="Calendar" size={64} className="text-white" />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-deep-blue">{event.title}</CardTitle>
                          <Badge className={`${
                            event.category === 'Взрослые' ? 'bg-red-500' :
                            event.category === 'Детские' ? 'bg-yellow-500' :
                            event.category === 'Спорт' ? 'bg-blue-500' :
                            'bg-green-500'
                          } text-white`}>
                            {event.category}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Icon name="Calendar" className="mr-2" size={16} />
                          <span className="mr-4">{event.date}</span>
                          <Icon name="Clock" className="mr-2" size={16} />
                          <span>{event.time}</span>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-green-500">{event.price}</span>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-deep-blue mb-3">Включено:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {event.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 bg-purple-500 hover:bg-purple-600">
                            <Icon name="Ticket" className="mr-2" size={16} />
                            Купить билет
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Icon name="Info" className="mr-2" size={16} />
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="regular">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Регулярные мероприятия</h2>
                  <p className="text-lg text-gray-600">Еженедельные программы и активности</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {regularEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-deep-blue">{event.title}</h3>
                          <Badge className="bg-blue-100 text-blue-600">{event.duration}</Badge>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <Icon name="Clock" className="mr-2" size={16} />
                          <span>{event.schedule}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-green-500">{event.price}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            <Icon name="Calendar" className="mr-2" size={14} />
                            Записаться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-8">
                      <Icon name="Calendar" size={48} className="mx-auto mb-4 text-blue-500" />
                      <h3 className="text-2xl font-bold text-deep-blue mb-4">Расписание мероприятий</h3>
                      <p className="text-gray-600 mb-6">
                        Полное расписание всех регулярных мероприятий и программ
                      </p>
                      <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                        <Link to="/schedule">
                          <Icon name="Calendar" className="mr-2" size={20} />
                          Посмотреть расписание
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="seasonal">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Сезонные праздники</h2>
                  <p className="text-lg text-gray-600">Особые мероприятия к праздничным датам</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {seasonalEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-orange-200">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-deep-blue">{event.title}</h3>
                          <Badge className="bg-orange-500 text-white">{event.period}</Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-deep-blue mb-3">Программа:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {event.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <Icon name="Star" size={16} className="text-orange-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                          <Icon name="Bell" className="mr-2" size={16} />
                          Уведомить о событии
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-deep-blue mb-4">Корпоративные мероприятия</h2>
                  <p className="text-lg text-gray-600">Организация корпоративных событий любого масштаба</p>
                </div>
                
                <div className="grid gap-8">
                  {corporateEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="md:flex items-start gap-8">
                          <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-deep-blue mb-4">{event.title}</h3>
                            <p className="text-gray-600 mb-6">{event.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {event.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm">
                                  <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="md:w-1/3 text-center md:text-right">
                            <div className="bg-gray-50 p-6 rounded-lg mb-4">
                              <div className="text-sm text-gray-500 mb-2">Минимум участников</div>
                              <div className="text-lg font-bold text-deep-blue mb-4">{event.minPeople}</div>
                              <div className="text-sm text-gray-500 mb-2">Стоимость</div>
                              <div className="text-2xl font-bold text-green-500">{event.price}</div>
                            </div>
                            
                            <Button asChild className="w-full bg-deep-blue hover:bg-aqua-blue">
                              <Link to="/corporate">
                                <Icon name="Phone" className="mr-2" size={16} />
                                Заказать
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Card className="max-w-4xl mx-auto bg-gradient-to-r from-deep-blue to-aqua-blue text-white">
                    <CardContent className="p-8">
                      <Icon name="Users" size={64} className="mx-auto mb-6" />
                      <h3 className="text-3xl font-bold mb-4">Индивидуальный подход</h3>
                      <p className="text-xl mb-6 opacity-90">
                        Мы создадим уникальное мероприятие специально для вашей компании
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center">
                          <Icon name="Calendar" size={32} className="mx-auto mb-2" />
                          <div className="font-semibold">Планирование</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Users" size={32} className="mx-auto mb-2" />
                          <div className="font-semibold">Организация</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Star" size={32} className="mx-auto mb-2" />
                          <div className="font-semibold">Проведение</div>
                        </div>
                      </div>
                      <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90">
                        <Link to="/contacts">
                          <Icon name="Phone" className="mr-2" size={20} />
                          Обсудить мероприятие
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-blue mb-8">Календарь событий</h2>
          
          <Card>
            <CardContent className="p-8">
              <Icon name="Calendar" size={64} className="mx-auto mb-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Не пропустите ни одного события!</h3>
              <p className="text-gray-600 mb-6">
                Подпишитесь на уведомления о предстоящих мероприятиях и получайте эксклюзивные предложения
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <Icon name="Bell" className="mr-2" size={20} />
                  Подписаться на уведомления
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/schedule">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Полное расписание
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Создайте незабываемые воспоминания</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к нашим мероприятиям и получайте максимум эмоций!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90">
              <Link to="/tickets">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-500">
              <Link to="/contacts">
                <Icon name="Phone" className="mr-2" size={20} />
                Организовать событие
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;