import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" className="h-8 w-8 text-aqua-blue" />
              <span className="text-2xl font-bold">
                AQUA<span className="text-orange-accent">STORM</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Самый современный аквапарк с экстремальными горками и семейными развлечениями. 
              Незабываемые эмоции для всей семьи!
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-orange-accent">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange-accent">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange-accent">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange-accent">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/slides" className="text-gray-300 hover:text-orange-accent transition-colors">Горки</Link></li>
              <li><Link to="/pools" className="text-gray-300 hover:text-orange-accent transition-colors">Бассейны</Link></li>
              <li><Link to="/restaurants" className="text-gray-300 hover:text-orange-accent transition-colors">Рестораны</Link></li>
              <li><Link to="/tickets" className="text-gray-300 hover:text-orange-accent transition-colors">Билеты</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-orange-accent transition-colors">События</Link></li>
              <li><Link to="/safety" className="text-gray-300 hover:text-orange-accent transition-colors">Безопасность</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/spa" className="text-gray-300 hover:text-orange-accent transition-colors">SPA-зона</Link></li>
              <li><Link to="/kids" className="text-gray-300 hover:text-orange-accent transition-colors">Детская зона</Link></li>
              <li><Link to="/vip" className="text-gray-300 hover:text-orange-accent transition-colors">VIP-услуги</Link></li>
              <li><Link to="/birthday" className="text-gray-300 hover:text-orange-accent transition-colors">Дни рождения</Link></li>
              <li><Link to="/corporate" className="text-gray-300 hover:text-orange-accent transition-colors">Корпоративы</Link></li>
              <li><Link to="/loyalty" className="text-gray-300 hover:text-orange-accent transition-colors">Программа лояльности</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4 text-orange-accent" />
                <span className="text-gray-300">ул. Водная, 123, Москва</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4 text-orange-accent" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4 text-orange-accent" />
                <span className="text-gray-300">info@aquastorm.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="h-4 w-4 text-orange-accent" />
                <span className="text-gray-300">Ежедневно 9:00-22:00</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-medium">Подписка на новости</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Ваш email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-orange-accent hover:bg-orange-accent/90">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 AquaStorm. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/rules" className="text-gray-300 hover:text-orange-accent text-sm transition-colors">
              Правила посещения
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-orange-accent text-sm transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;