import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainMenuItems = [
    { title: 'Главная', href: '/' },
    { title: 'Горки', href: '/slides' },
    { title: 'Бассейны', href: '/pools' },
    { title: 'Рестораны', href: '/restaurants' },
    { title: 'Билеты', href: '/tickets' },
  ];

  const servicesItems = [
    { title: 'Услуги', href: '/services' },
    { title: 'SPA-зона', href: '/spa' },
    { title: 'Спорт', href: '/sports' },
    { title: 'Детская зона', href: '/kids' },
    { title: 'VIP-услуги', href: '/vip' },
    { title: 'Парковка', href: '/parking' },
  ];

  const infoItems = [
    { title: 'О нас', href: '/about' },
    { title: 'Новости', href: '/news' },
    { title: 'Галерея', href: '/gallery' },
    { title: 'Отзывы', href: '/reviews' },
    { title: 'Контакты', href: '/contacts' },
    { title: 'Карта', href: '/map' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="Waves" className="h-8 w-8 text-aqua-blue" />
          <span className="text-2xl font-bold text-deep-blue">
            AQUA<span className="text-orange-accent">STORM</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {mainMenuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.href}
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      location.pathname === item.href ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {servicesItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Информация</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {infoItems.map((item) => (
                    <NavigationMenuLink key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-orange-accent hover:bg-orange-accent/90">
            <Link to="/booking">
              <Icon name="Calendar" className="mr-2 h-4 w-4" />
              Забронировать
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {[...mainMenuItems, ...servicesItems, ...infoItems].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-orange-accent ${
                      location.pathname === item.href ? 'text-orange-accent' : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-orange-accent hover:bg-orange-accent/90">
                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    <Icon name="Calendar" className="mr-2 h-4 w-4" />
                    Забронировать
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;