import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Tickets = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const ticketTypes = [
    {
      name: "Стандартный билет",
      price: "1200₽",
      originalPrice: null,
      description: "Полный доступ ко всем горкам и бассейнам на целый день",
      features: ["Все горки и бассейны", "Шкафчик в раздевалке", "Душевые и туалеты", "WiFi"],
      popular: false,
      color: "blue"
    },
    {
      name: "Семейный билет",
      price: "3200₽",
      originalPrice: "4800₽",
      description: "Билет для семьи из 2 взрослых и 2 детей до 14 лет",
      features: ["Скидка 33%", "Приоритетный вход", "Семейная раздевалка", "Детская анимация"],
      popular: true,
      color: "green"
    },
    {
      name: "VIP билет",
      price: "2500₽",
      originalPrice: null,
      description: "Премиум доступ с дополнительными услугами и комфортом",
      features: ["Отдельный вход", "VIP раздевалка", "Полотенца включены", "Приоритет на горках", "Скидка в ресторане 20%"],
      popular: false,
      color: "purple"
    },
    {
      name: "Детский билет",
      price: "800₽",
      originalPrice: null,
      description: "Для детей до 14 лет с доступом к детским зонам",
      features: ["Детские горки", "Игровая зона", "Анимационные программы", "Детское кафе"],
      popular: false,
      color: "yellow"
    },
    {
      name: "Студенческий билет",
      price: "900₽",
      originalPrice: "1200₽",
      description: "Скидка 25% для студентов при предъявлении студенческого билета",
      features: ["Скидка 25%", "Все стандартные услуги", "Студенческие мероприятия", "Групповые скидки"],
      popular: false,
      color: "orange"
    },
    {
      name: "Пенсионерский билет",
      price: "800₽",
      originalPrice: "1200₽",
      description: "Специальная цена для пенсионеров в будние дни до 16:00",
      features: ["Скидка 33%", "Спокойные часы", "Оздоровительные программы", "Скидка в SPA"],
      popular: false,
      color: "gray"
    }
  ];

  const seasonPasses = [
    {
      name: "Месячный абонемент",
      price: "8900₽",
      originalPrice: "36000₽",
      description: "Безлимитное посещение в течение месяца",
      features: ["Безлимитные посещения", "Скидка в ресторанах 15%", "Приоритетное бронирование", "Гостевые билеты со скидкой"],
      savings: "Экономия 75%"
    },
    {
      name: "Годовой абонемент",
      price: "89000₽",
      originalPrice: "438000₽",
      description: "Целый год неограниченного доступа к аквапарку",
      features: ["Безлимитные посещения", "VIP статус", "Скидка в ресторанах 25%", "Бесплатная парковка", "Персональный менеджер"],
      savings: "Экономия 80%"
    }
  ];

  const groupTickets = [
    {
      name: "Школьная группа",
      price: "600₽",
      description: "От 15 человек, сопровождающие бесплатно",
      minPeople: "15+"
    },
    {
      name: "Корпоративная группа",
      price: "1000₽",
      description: "От 20 человек, включает обед",
      minPeople: "20+"
    },
    {
      name: "День рождения",
      price: "800₽",
      description: "От 10 человек, именинник бесплатно",
      minPeople: "10+"
    }
  ];

  const calculateTotal = () => {
    const adultPrice = 1200;
    const childPrice = 800;
    return adults * adultPrice + children * childPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Билеты
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Выберите подходящий билет и окунитесь в мир водных развлечений
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-green-500 px-4 py-2 text-lg">Онлайн скидки</Badge>
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">Семейные тарифы</Badge>
            <Badge className="bg-white text-green-500 px-4 py-2 text-lg">Групповые скидки</Badge>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Быстрое бронирование</h2>
            <p className="text-gray-600">Выберите дату и количество билетов</p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-4 items-end">
                <div>
                  <Label htmlFor="date">Дата посещения</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Время</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="12:00">12:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="adults">Взрослые</Label>
                  <Select value={adults.toString()} onValueChange={(value) => setAdults(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="children">Дети</Label>
                  <Select value={children.toString()} onValueChange={(value) => setChildren(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0,1,2,3,4,5,6].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    {calculateTotal()}₽
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ticket Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="single" className="text-lg py-3">Разовые билеты</TabsTrigger>
              <TabsTrigger value="season" className="text-lg py-3">Абонементы</TabsTrigger>
              <TabsTrigger value="group" className="text-lg py-3">Групповые</TabsTrigger>
            </TabsList>

            <TabsContent value="single">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-deep-blue mb-4">Разовые билеты</h2>
                <p className="text-lg text-gray-600">Выберите подходящий тариф для разового посещения</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ticketTypes.map((ticket, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${ticket.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                    {ticket.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1">
                        Популярный
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl text-deep-blue">{ticket.name}</CardTitle>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-green-500">{ticket.price}</span>
                        {ticket.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{ticket.originalPrice}</span>
                        )}
                      </div>
                      <CardDescription>{ticket.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {ticket.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full ${ticket.popular ? 'bg-green-500 hover:bg-green-600' : 'bg-aqua-blue hover:bg-bright-blue'}`}>
                        <Icon name="ShoppingCart" className="mr-2" size={16} />
                        Купить билет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="season">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-deep-blue mb-4">Сезонные абонементы</h2>
                <p className="text-lg text-gray-600">Максимальная экономия для постоянных посетителей</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {seasonPasses.map((pass, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gold">
                    <CardHeader className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-t-lg">
                      <Badge className="bg-white text-orange-500 mb-2 w-fit mx-auto">{pass.savings}</Badge>
                      <CardTitle className="text-2xl">{pass.name}</CardTitle>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold">{pass.price}</span>
                        <span className="text-lg line-through opacity-75">{pass.originalPrice}</span>
                      </div>
                      <CardDescription className="text-white opacity-90">{pass.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3 mb-6">
                        {pass.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Icon name="Crown" size={16} className="text-yellow-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white">
                        <Icon name="Star" className="mr-2" size={16} />
                        Купить абонемент
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="group">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-deep-blue mb-4">Групповые билеты</h2>
                <p className="text-lg text-gray-600">Специальные цены для организованных групп</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {groupTickets.map((ticket, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon name="Users" size={48} className="mx-auto mb-4 text-blue-500" />
                      <h3 className="text-xl font-bold text-deep-blue mb-2">{ticket.name}</h3>
                      <div className="text-2xl font-bold text-blue-500 mb-2">{ticket.price}</div>
                      <div className="text-sm text-gray-500 mb-4">за человека</div>
                      <p className="text-gray-600 mb-4">{ticket.description}</p>
                      <Badge className="bg-blue-100 text-blue-600 mb-4">{ticket.minPeople}</Badge>
                      <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                        <Link to="/groups">
                          <Icon name="Phone" className="mr-2" size={16} />
                          Заказать
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <Icon name="Phone" size={48} className="mx-auto mb-4 text-green-500" />
                    <h3 className="text-2xl font-bold text-deep-blue mb-4">Индивидуальные предложения</h3>
                    <p className="text-gray-600 mb-6">
                      Для групп от 50 человек мы подготовим индивидуальное предложение с максимальными скидками
                    </p>
                    <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                      <Link to="/contacts">
                        <Icon name="Phone" className="mr-2" size={20} />
                        Связаться с нами
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Специальные предложения</h2>
            <p className="text-xl opacity-90">Актуальные акции и скидки</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Будние дни</h3>
                <p className="mb-4">Скидка 20% в понедельник-четверг до 16:00</p>
                <Badge className="bg-white text-purple-500">-20%</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">День рождения</h3>
                <p className="mb-4">Именинник проходит бесплатно в день рождения</p>
                <Badge className="bg-white text-purple-500">Бесплатно</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Многодетные семьи</h3>
                <p className="mb-4">Скидка 30% при предъявлении удостоверения</p>
                <Badge className="bg-white text-purple-500">-30%</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-blue mb-8">Способы оплаты</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Icon name="CreditCard" size={48} className="mb-3 text-blue-500" />
              <span className="font-medium">Банковские карты</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Smartphone" size={48} className="mb-3 text-green-500" />
              <span className="font-medium">Apple Pay / Google Pay</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Banknote" size={48} className="mb-3 text-orange-500" />
              <span className="font-medium">Наличные в кассе</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Building" size={48} className="mb-3 text-purple-500" />
              <span className="font-medium">Банковский перевод</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <Icon name="Shield" size={48} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-bold text-deep-blue mb-3">Безопасная оплата</h3>
            <p className="text-gray-600">
              Все платежи защищены SSL-шифрованием. Мы не храним данные ваших карт.
              Возврат билетов возможен за 24 часа до посещения.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-6">Часто задаваемые вопросы</h2>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-deep-blue mb-2">Можно ли вернуть билет?</h3>
                <p className="text-gray-600">Да, билеты можно вернуть за 24 часа до даты посещения. Возврат осуществляется в течение 5-7 рабочих дней.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-deep-blue mb-2">Действует ли билет весь день?</h3>
                <p className="text-gray-600">Да, билет действует с момента входа до закрытия аквапарка. Вы можете выходить и заходить в течение дня.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-deep-blue mb-2">Нужно ли покупать билет для детей до 3 лет?</h3>
                <p className="text-gray-600">Дети до 3 лет проходят бесплатно в сопровождении взрослого. Необходимо предъявить документ, подтверждающий возраст.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-aqua-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к водным приключениям?</h2>
          <p className="text-xl mb-8 opacity-90">
            Покупайте билеты онлайн и получайте скидку 10%!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Купить билеты сейчас
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
              <Link to="/contacts">
                <Icon name="Phone" className="mr-2" size={20} />
                Задать вопрос
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;