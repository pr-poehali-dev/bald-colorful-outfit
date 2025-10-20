import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const articles = [
    {
      id: 1,
      title: 'Стратегии роста бизнеса в 2025 году',
      excerpt: 'Анализ ключевых трендов и практических подходов к развитию компаний в условиях современной экономики.',
      date: '15 октября 2025',
      category: 'Бизнес',
      readTime: '8 мин'
    },
    {
      id: 2,
      title: 'Цифровая трансформация предприятий',
      excerpt: 'Пошаговое руководство по внедрению цифровых решений для повышения эффективности бизнес-процессов.',
      date: '12 октября 2025',
      category: 'Технологии',
      readTime: '12 мин'
    },
    {
      id: 3,
      title: 'Управление командой в удаленном формате',
      excerpt: 'Проверенные методики организации работы распределенных команд и поддержания высокой продуктивности.',
      date: '8 октября 2025',
      category: 'Менеджмент',
      readTime: '10 мин'
    },
    {
      id: 4,
      title: 'Финансовое планирование для стартапов',
      excerpt: 'Практические инструменты и подходы к управлению финансами на ранних стадиях развития компании.',
      date: '5 октября 2025',
      category: 'Финансы',
      readTime: '15 мин'
    },
    {
      id: 5,
      title: 'Юридические аспекты электронной коммерции',
      excerpt: 'Обзор ключевых правовых вопросов при ведении онлайн-бизнеса и работе с клиентами.',
      date: '1 октября 2025',
      category: 'Право',
      readTime: '11 мин'
    },
    {
      id: 6,
      title: 'Маркетинговые стратегии для B2B сектора',
      excerpt: 'Эффективные каналы продвижения и инструменты привлечения корпоративных клиентов.',
      date: '28 сентября 2025',
      category: 'Маркетинг',
      readTime: '9 мин'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#1A1F2C]">Профессиональный Блог</h1>
            <div className="flex gap-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                О нас
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-4">
              Экспертный контент для бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Актуальные статьи и аналитика по ключевым направлениям развития современных компаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Icon name="Clock" size={14} />
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A1F2C] mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="font-semibold">
              Загрузить больше статей
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </main>
      ) : (
        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-[#1A1F2C] mb-6">О нас</h2>
            <div className="h-1 w-24 bg-primary mb-8"></div>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Мы — команда профессионалов, создающих качественный контент для развития бизнеса. 
              Наша миссия — делиться экспертными знаниями и практическим опытом, которые помогают 
              компаниям достигать устойчивого роста.
            </p>

            <p>
              Наш блог охватывает широкий спектр тем: от стратегического планирования и финансового 
              управления до цифровой трансформации и построения эффективных команд. Каждая публикация 
              основана на реальном опыте и подтверждена практическими результатами.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Статей</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Читателей</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Экспертов</div>
              </div>
            </div>

            <p>
              Наши авторы — признанные специалисты в своих областях: предприниматели, управленцы, 
              консультанты и аналитики с многолетним опытом работы в крупных компаниях и успешных стартапах.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-8 my-8">
              <p className="text-xl italic text-gray-800">
                "Знания, которые мы публикуем, проверены временем и практикой. Наша цель — 
                сделать профессиональную экспертизу доступной каждому, кто стремится к развитию."
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-600">— Редакция блога</p>
            </div>

            <p>
              Мы постоянно развиваемся, изучаем новые тренды и адаптируем передовые практики под 
              реалии российского и международного бизнеса. Присоединяйтесь к нашему сообществу 
              профессионалов и получайте актуальные знания для роста вашего бизнеса.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[#1A1F2C] mb-6">Свяжитесь с нами</h3>
            <div className="flex gap-6">
              <Button variant="outline" size="lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Email
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Телефон
              </Button>
            </div>
          </div>
        </main>
      )}

      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">© 2025 Профессиональный Блог. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
