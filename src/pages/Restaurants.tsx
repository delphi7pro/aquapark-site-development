import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const restaurants = [
    {
      name: "AquaFood Court",
      type: "Основной ресторан",
      description: "Главный ресторан с панорамным видом на аквапарк. Международная кухня и здоровое питание.",
      cuisine: "Международная",
      capacity: "200 мест",
      hours: "9:00 - 22:00",
      features: ["Панорамный вид", "Детское меню", "Веганские блюда", "Шведский стол"],
      specialties: ["Морепродукты", "Стейки", "Паста", "Салаты"]
    },
    {
      name: "Splash Bar",
      type: "Бар у бассейна",
      description: "Освежающие напитки и легкие закуски прямо у волнового бассейна.",
      cuisine: "Напитки и закуски",
      capacity: "50 мест",
      hours: "10:00 - 21:00",
      features: ["У бассейна", "Коктейли", "Мороженое", "Быстрое обслуживание"],
      specialties: ["Тропические коктейли", "Смузи", "Фреши", "Мороженое"]
    },
    {
      name: "Kids Cafe",
      type: "Детское кафе",
      description: "Специальное кафе для маленьких посетителей с детским меню и игровой зоной.",
      cuisine: "Детская",
      capacity: "80 мест",
      hours: "9:00 - 20:00",
      features: ["Игровая зона", "Детские стульчики", "Аниматоры", "Безопасная еда"],
      specialties: ["Детские наггетсы", "Молочные коктейли", "Фруктовые тарелки", "Мини-пиццы"]
    }
  ];

  const menuCategories = [
    {
      category: "Горячие блюда",
      items: [
        { name: "Стейк из лосося", price: "890₽", description: "С овощами гриль и лимонным соусом" },
        { name: "Куриная грудка", price: "650₽", description: "С рисом и овощами" },
        { name: "Паста Карбонара", price: "580₽", description: "Классическая итальянская паста" },
        { name: "Вегетарианская лазанья", price: "520₽", description: "С сыром и овощами" }
      ]
    },
    {
      category: "Салаты",
      items: [
        { name: "Цезарь с креветками", price: "480₽", description: "Свежие листья салата, креветки, пармезан" },
        { name: "Греческий салат", price: "420₽", description: "Томаты, огурцы, фета, оливки" },
        { name: "Салат с тунцом", price: "450₽", description: "Микс салатов, тунец, авокадо" }
      ]
    },
    {
      category: "Напитки",
      items: [
        { name: "Тропический смузи", price: "280₽", description: "Манго, ананас, кокос" },
        { name: "Свежевыжатый сок", price: "220₽", description: "Апельсин, яблоко, морковь" },
        { name: "Авторский коктейль", price: "350₽", description: "Безалкогольный освежающий коктейль" }
      ]
    }
  ];

  const dietaryOptions = [
    {
      type: "Веганское меню",
      icon: "Leaf",
      description: "Полностью растительные блюда без продуктов животного происхождения",
      items: ["Веган-бургер", "Киноа салат", "Овощное карри", "Смузи боул"]
    },
    {
      type: "Безглютеновое меню",
      icon: "Shield",
      description: "Специальные блюда для людей с непереносимостью глютена",
      items: ["Рисовая лапша", "Киноа салат", "Мясо на гриле", "Фруктовые десерты"]
    },
    {
      type: "Детское меню",
      icon: "Baby",
      description: "Здоровая и вкусная еда, адаптированная для детей",
      items: ["Мини-пицца", "Куриные наггетсы", "Фруктовая тарелка", "Молочный коктейль"]
    },
    {
      type: "Спортивное питание",
      icon: "Dumbbell",
      description: "Высокобелковые блюда для активных посетителей",
      items: ["Протеиновый салат", "Куриная грудка", "Творожная запеканка", "Протеиновый коктейль"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-accent to-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Рестораны и кафе
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Вкусная еда и освежающие напитки в уникальной атмосфере
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-orange-accent px-4 py-2 text-lg">3 ресторана</Badge>
            <Badge className="bg-orange-accent text-white px-4 py-2 text-lg">Международная кухня</Badge>
            <Badge className="bg-white text-orange-accent px-4 py-2 text-lg">Здоровое питание</Badge>
          </div>
        </div>
      </section>

      {/* Restaurants Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Наши рестораны</h2>
            <p className="text-lg text-gray-600">Каждый найдет что-то по вкусу</p>
          </div>
          
          <div className="grid gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-accent to-red-500 p-8 text-white flex flex-col justify-center">
                    <Badge className="bg-white text-orange-accent mb-4 w-fit">{restaurant.type}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{restaurant.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Icon name="Utensils" className="mr-3" size={20} />
                        <span>{restaurant.cuisine}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Users" className="mr-3" size={20} />
                        <span>{restaurant.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" className="mr-3" size={20} />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {restaurant.description}
                    </CardDescription>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-3">Особенности:</h4>
                        <div className="space-y-2">
                          {restaurant.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-3">Специальности:</h4>
                        <div className="space-y-2">
                          {restaurant.specialties.map((specialty, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Icon name="Star" size={16} className="text-orange-accent mr-2 flex-shrink-0" />
                              <span>{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-orange-accent hover:bg-red-500">
                        <Icon name="Menu" className="mr-2" size={16} />
                        Меню
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/booking">
                          <Icon name="Calendar" className="mr-2" size={16} />
                          Забронировать стол
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Меню</h2>
            <p className="text-lg text-gray-600">Избранные блюда из нашего меню</p>
          </div>
          
          <Tabs defaultValue="hot" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="hot" className="text-lg py-3">Горячие блюда</TabsTrigger>
              <TabsTrigger value="salads" className="text-lg py-3">Салаты</TabsTrigger>
              <TabsTrigger value="drinks" className="text-lg py-3">Напитки</TabsTrigger>
            </TabsList>

            {menuCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.category === "Горячие блюда" ? "hot" : category.category === "Салаты" ? "salads" : "drinks"}>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-deep-blue">{item.name}</h3>
                          <span className="text-xl font-bold text-orange-accent">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-accent hover:bg-red-500">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать полное меню
            </Button>
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Специальное питание</h2>
            <p className="text-lg text-gray-600">Мы заботимся о всех наших гостях</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietaryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <Icon name={option.icon} size={48} className="mx-auto mb-4 text-green-500" />
                  <h3 className="text-lg font-bold text-deep-blue mb-3">{option.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <div className="space-y-1">
                    {option.items.map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-500">• {item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-accent to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Забронируйте столик</h2>
          <p className="text-xl mb-8 opacity-90">
            Гарантируйте себе место в лучших ресторанах аквапарка
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Быстрое бронирование</h3>
              <p className="opacity-90">Забронируйте столик за 2 минуты</p>
            </div>
            <div className="text-center">
              <Icon name="Star" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Лучшие места</h3>
              <p className="opacity-90">Столики с видом на аквапарк</p>
            </div>
            <div className="text-center">
              <Icon name="Gift" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Специальные предложения</h3>
              <p className="opacity-90">Скидки для постоянных гостей</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-accent hover:bg-gray-100">
              <Link to="/booking">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать столик
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-accent">
              <Link to="/contacts">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">Специальные мероприятия</h2>
            <p className="text-lg text-gray-600">Кулинарные события и тематические вечера</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="ChefHat" size={48} className="mx-auto mb-4 text-orange-accent" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">Мастер-классы от шефа</h3>
                <p className="text-gray-600 mb-4">Каждую субботу в 15:00</p>
                <Button variant="outline">Записаться</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Wine" size={48} className="mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">Дегустационные вечера</h3>
                <p className="text-gray-600 mb-4">Первая пятница месяца</p>
                <Button variant="outline">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Cake" size={48} className="mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-bold text-deep-blue mb-3">Детские праздники</h3>
                <p className="text-gray-600 mb-4">Организация дней рождения</p>
                <Button asChild variant="outline">
                  <Link to="/birthday">Заказать</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;