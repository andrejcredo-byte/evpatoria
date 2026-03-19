/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Calculator,
  Home,
  Layers,
  Sun,
  Moon
} from 'lucide-react';

// --- Components ---

const TopBar = () => (
  <div className="bg-bg-card text-text-main py-2 px-6 text-[10px] md:text-xs border-b border-border-subtle relative z-[60]">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-brand-primary" /> +7 (978) 000-00-00</span>
        <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3 text-brand-primary" /> info@crimeastroy.ru</span>
      </div>
      <a href="#form" className="text-brand-primary font-bold uppercase tracking-widest hover:underline transition-all">
        Заказать звонок
      </a>
    </div>
  </div>
);

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <TopBar />
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-bg-main/90 backdrop-blur-xl border-b border-border-subtle py-3 md:py-4' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary flex items-center justify-center">
              <Hammer className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-sans font-black tracking-tighter uppercase">КрымСтройТех</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-widest font-bold text-text-muted hover:text-brand-primary transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 hover:text-brand-primary transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#form" className="px-5 py-2 border border-brand-primary text-brand-primary text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
              Рассчитать смету
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-bg-main border-b border-border-subtle p-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-text-main"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#form" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-brand-primary text-white text-center font-bold uppercase tracking-widest text-xs"
                >
                  Рассчитать смету
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center pb-20 md:pb-32 overflow-hidden">
      {/* Spacer for fixed Navbar */}
      <div className="h-36 sm:h-44 md:h-56 lg:h-64 flex-shrink-0" />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center relative z-10 w-full">
        <div className="flex flex-col items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-brand-primary text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">
                <div>Евпатория</div>
                <span className="opacity-30">•</span>
                <div>Саки</div>
                <span className="opacity-30">•</span>
                <div>Симферополь</div>
                <span className="opacity-30">•</span>
                <div>Севастополь</div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-black leading-[1.1] md:leading-[0.9] mb-8 md:mb-10 tracking-tighter uppercase max-w-5xl w-full break-words">
              Строительство <br />
              <span className="text-premium">под ключ</span>
            </h1>

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-14 max-w-2xl">
              <p className="text-text-muted text-base md:text-xl lg:text-2xl leading-relaxed font-light px-4">
                Выполним любые строительные и ремонтные работы быстро, аккуратно и по договорённости.
              </p>
              <div className="flex flex-wrap justify-center gap-y-3 gap-x-6 md:gap-x-8">
                <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" /> Без посредников
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" /> Напрямую с заказчиком
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" /> Фиксированная цена
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-20 w-full sm:w-auto px-6">
              <a href="#form" className="btn-primary flex items-center justify-center gap-3 w-full sm:min-w-[240px]">
                Рассчитать смету <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="btn-secondary flex items-center justify-center gap-3 w-full sm:min-w-[240px]">
                Смотреть работы
              </a>
            </div>
            
            <div className="w-full max-w-3xl grid grid-cols-3 gap-6 md:gap-16 border-t border-border-subtle pt-10 md:pt-12">
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">100%</div>
                <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-bold">Качество</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">150+</div>
                <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-bold">Проектов</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1">5 лет</div>
                <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-bold">Гарантии</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center py-1 ${className}`}>
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-border-subtle/10"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="bg-bg-main px-2">
        <div className="w-0.5 h-0.5 rounded-full bg-brand-primary/20"></div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      title: 'Монолит и фундамент',
      description: 'Профессиональные монолитные работы любой сложности. Гарантируем прочность и долговечность конструкции.',
      icon: <Layers className="w-8 h-8" />,
      features: ['Плиты перекрытия', 'Пояса и колонны', 'Монолитные лестницы', 'Фундаменты всех типов']
    },
    {
      title: 'Кладка и пристройки',
      description: 'Качественное возведение стен и дополнительных помещений. Соблюдаем все строительные нормы.',
      icon: <Home className="w-8 h-8" />,
      features: ['Газоблок и кирпич', 'Перегородки', 'Балконы и террасы', 'Пристройки к дому']
    },
    {
      title: 'Кровля и ремонт',
      description: 'Комплексные работы по устройству крыш и внутреннему обновлению вашего жилья.',
      icon: <Hammer className="w-8 h-8" />,
      features: ['Стропильные системы', 'Монтаж кровли', 'Ремонт квартир/домов', 'Демонтажные работы']
    },
    {
      title: 'Благоустройство',
      description: 'Приведение территории в порядок. Качественные бетонные работы на участке.',
      icon: <CheckCircle2 className="w-8 h-8" />,
      features: ['Отмостки и заборы', 'Бетонные дорожки', 'Подготовка под плитку', 'Планировка участка']
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="services" className="py-4 md:py-8 bg-bg-card/50 scroll-mt-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black mb-4 uppercase tracking-tighter">Наши <span className="text-premium">услуги</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base font-light">Используем современные технологии и проверенные материалы.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Side Arrows - Positioned ON the content area */}
          <button 
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-bg-main/80 backdrop-blur border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-lg rounded-full"
            aria-label="Предыдущая услуга"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-bg-main/80 backdrop-blur border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-lg rounded-full"
            aria-label="Следующая услуга"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden rounded-3xl border border-border-subtle bg-bg-main shadow-xl">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((service, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="p-8 px-14 md:p-16 md:px-24 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                    <div className="text-brand-primary p-5 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <h3 className="text-2xl md:text-4xl font-sans font-bold mb-4 uppercase tracking-tight break-words">{service.title}</h3>
                      <p className="text-text-muted mb-8 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto md:mx-0 break-words">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-[10px] md:text-xs text-text-muted uppercase tracking-wider font-medium bg-bg-card p-3 border border-border-subtle rounded-lg">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" /> 
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-brand-primary' : 'w-2 bg-border-subtle'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const projects = [
    {
      title: 'Вилла в современном стиле',
      location: 'Евпатория',
      image: '/project1.jpg',
      tag: 'Строительство',
      details: {
        work: 'Полный цикл строительства: от земляных работ до чистовой отделки. Использован газобетон высшей категории, панорамное остекление.',
        price: 'от 8.5 млн руб.',
        duration: '8 месяцев'
      }
    },
    {
      title: 'Кровля частного дома',
      location: 'Заозерное',
      image: '/project2.jpg',
      tag: 'Кровля',
      details: {
        work: 'Демонтаж старого покрытия, усиление стропильной системы, монтаж мягкой черепицы с гарантией 15 лет.',
        price: 'от 450 тыс. руб.',
        duration: '14 дней'
      }
    },
    {
      title: 'Двухэтажный коттедж',
      location: 'Саки',
      image: '/project3.jpg',
      tag: 'Под ключ',
      details: {
        work: 'Строительство по индивидуальному проекту. Монолитный каркас, заполнение ракушечником, фасадная отделка короедом.',
        price: 'от 12 млн руб.',
        duration: '11 месяцев'
      }
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowDetails(false);
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowDetails(false);
  };

  return (
    <section id="portfolio" className="py-4 md:py-8 scroll-mt-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black mb-4 uppercase tracking-tighter">Наши <span className="text-premium">работы</span></h2>
          <p className="text-text-muted text-sm md:text-base font-light">Реализованные проекты в Евпатории.</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Side Arrows */}
          <button 
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-bg-main/80 backdrop-blur border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-lg rounded-full"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-bg-main/80 backdrop-blur border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-lg rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden rounded-3xl border border-border-subtle bg-bg-main shadow-xl">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="relative aspect-square group overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 px-14 md:p-10 md:px-24 w-full">
                      <span className="inline-block px-3 py-1 bg-brand-primary text-white text-[9px] font-bold uppercase tracking-widest mb-3">
                        {project.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 text-white uppercase tracking-tight break-words">{project.title}</h3>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-zinc-100/70 text-[10px] uppercase tracking-wider">
                          <MapPin className="w-3 h-3" /> {project.location}
                        </div>
                        <button 
                          onClick={() => setShowDetails(!showDetails)}
                          className="px-4 py-2 bg-black/40 backdrop-blur hover:bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-all"
                        >
                          {showDetails ? 'Скрыть' : 'Подробнее'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Details Dropdown */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-bg-card border-t border-border-subtle"
                      >
                        <div className="p-6 md:p-10 space-y-6">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-3">Что сделано</h4>
                              <p className="text-text-muted text-xs md:text-sm leading-relaxed font-light">{project.details.work}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-3">Стоимость</h4>
                                <p className="text-text-main text-sm font-bold">{project.details.price}</p>
                              </div>
                              <div>
                                <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-3">Срок</h4>
                                <p className="text-text-main text-sm font-bold">{project.details.duration}</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-border-subtle/50">
                            <a href="#form" className="text-brand-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                              Хочу такой же проект <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-bg-main/80 backdrop-blur px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-border-subtle z-20">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const reasons = [
    {
      title: 'Опытная бригада',
      desc: 'Постоянный состав мастеров. Работаем аккуратно — без переделок.',
      icon: <Hammer className="w-5 h-5" />
    },
    {
      title: 'Честный подход',
      desc: 'Цена фиксируется до начала работ. Помогаем с материалами и расчётами.',
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: 'Надежность',
      desc: 'Не пропадаем и не срываем сроки. Фото/видео отчёт по этапам.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-4 md:py-8 bg-bg-card/30 scroll-mt-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black mb-4 md:mb-6 uppercase tracking-tighter">Почему выбирают <span className="text-premium">нас</span></h2>
            <div className="space-y-3 md:space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary rounded-2xl">
                    {r.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-sans font-bold mb-1 md:mb-2 uppercase tracking-tight break-words">{r.title}</h4>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed font-light break-words">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 md:p-10 relative overflow-hidden flex flex-col justify-center border-l-4 border-brand-primary h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <ShieldCheck className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-brand-primary mb-8" />
              <h3 className="text-xl md:text-3xl font-sans font-bold mb-8 leading-tight uppercase tracking-tight">
                «Мы не делаем <span className="text-brand-primary">«лишь бы быстрее»</span> — делаем, чтобы не переделывать через год»
              </h3>
            </div>
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-200 dark:bg-zinc-800 border border-border-subtle overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                  alt="Александр Волков" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-sans font-black text-base md:text-lg uppercase tracking-tighter">Александр Волков</div>
                <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-bold">Главный инженер</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="form" className="py-4 md:py-8 relative scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card p-6 md:p-12 shadow-2xl relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-black mb-3 uppercase tracking-tighter">Рассчитать <span className="text-premium">стоимость</span></h2>
            <p className="text-text-muted text-[10px] md:text-xs font-light uppercase tracking-widest max-w-2xl mx-auto">
              Стоимость зависит от объёма — рассчитаем бесплатно. Пишите или звоните — подскажем лучшее решение. 
              <span className="block mt-2 text-brand-primary font-bold">Выезд на объект и оценка в день обращения.</span>
            </p>
          </div>
          
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 md:py-16"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/10 flex items-center justify-center mx-auto mb-6 rounded-2xl">
                <CheckCircle2 className="text-brand-primary w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-3 uppercase tracking-tight">Заявка принята!</h3>
              <p className="text-text-muted text-sm font-light">Мы свяжемся с вами в ближайшее время.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-brand-primary hover:underline uppercase tracking-widest text-[10px] font-bold">Отправить еще раз</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Ваше имя</label>
                <input 
                  required
                  type="text" 
                  placeholder="Иван Иванов" 
                  className="w-full bg-transparent border-b border-border-subtle px-0 py-4 focus:outline-none focus:border-brand-primary transition-colors font-light"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Телефон</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+7 (978) 000-00-00" 
                  className="w-full bg-transparent border-b border-border-subtle px-0 py-4 focus:outline-none focus:border-brand-primary transition-colors font-light"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Тип работ</label>
                <select className="w-full bg-transparent border-b border-border-subtle px-0 py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none font-light">
                  <option>Строительство дома</option>
                  <option>Кровельные работы</option>
                  <option>Ремонт и реконструкция</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Комментарий (необязательно)</label>
                <textarea 
                  rows={3}
                  placeholder="Опишите ваш проект..." 
                  className="w-full bg-transparent border-b border-border-subtle px-0 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none font-light"
                />
              </div>
              <div className="md:col-span-2 pt-8">
                <button 
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Отправка...' : 'Получить расчет'} <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-[9px] text-text-muted mt-6 text-center uppercase tracking-widest font-bold">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Contacts = () => {
  return (
    <footer id="contacts" className="bg-bg-card pt-20 md:pt-32 pb-12 border-t border-border-subtle scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="space-y-8 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-lg">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-sans font-black tracking-tighter uppercase">КрымСтройТех</span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed font-light">
              Профессиональное строительство и ремонт в Крыму. Прямая работа с заказчиком, фиксированные сметы и гарантия качества на каждом этапе.
            </p>
            <div className="flex gap-3">
              <a href="tel:+79780000000" className="w-10 h-10 bg-bg-main border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all rounded-xl">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:info@crimea-build.ru" className="w-10 h-10 bg-bg-main border border-border-subtle flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all rounded-xl">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-sans font-black mb-8 uppercase tracking-widest text-[10px] text-brand-primary">Навигация</h4>
              <ul className="space-y-4 text-[10px] text-text-muted uppercase tracking-widest font-bold">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Портфолио</a></li>
                <li><a href="#about" className="hover:text-brand-primary transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-black mb-8 uppercase tracking-widest text-[10px] text-brand-primary">Услуги</h4>
              <ul className="space-y-4 text-[10px] text-text-muted uppercase tracking-widest font-bold">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Монолитные работы</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Кладка стен</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Кровельные системы</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Благоустройство</a></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8 lg:col-span-1">
            <h4 className="font-sans font-black mb-8 uppercase tracking-widest text-[10px] text-brand-primary">Контакты</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-brand-primary w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider leading-relaxed">Республика Крым, <br />г. Евпатория</span>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-brand-primary w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider">+7 (978) 000-00-00</span>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-brand-primary w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider">Пн-Сб: 09:00 — 18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">© 2026 КрымСтройТех. Все права защищены.</p>
          <div className="flex gap-10 text-[10px] text-text-muted uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-text-main">Политика конфиденциальности</a>
            <a href="#" className="hover:text-text-main">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Auto theme based on time (7:00 - 19:00 is light)
    const hour = new Date().getHours();
    const isDayTime = hour >= 7 && hour < 19;
    setTheme(isDayTime ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="selection:bg-brand-primary selection:text-white overflow-x-hidden max-w-full">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Trust />
      <SectionDivider />
      <LeadForm />
      <SectionDivider />
      <Contacts />
    </div>
  );
}
