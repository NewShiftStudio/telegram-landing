import { ChatMessages } from 'types/Message';

import oneC from 'assets/images/chats/integrations/1c.png';
import crm from 'assets/images/chats/integrations/crm.png';
import heading from 'assets/images/chats/integrations/heading.png';
import outside from 'assets/images/chats/integrations/outside.png';

export const integrationsMessages: ChatMessages = [
  {
    id: 3,
    type: 'message',
    text: '<b>Интеграция с внешними сервисами</b>\n\nот 30 000 руб.\n\nВнедряем самописные учётные системы, сервисы подсказок (DaData, КЛАДР), службы оплаты и доставки товаров, онлайн-чаты и т. д. для бизнесов, которым нужна индивидуальная разработка.',
    image: outside,
  },
  {
    id: 4,
    type: 'message',
    text: '<b>Интеграция с CRM-системой</b>\n\nот 50 000 руб.\n\nИнтегрируем сайты с Битрикс24 и amoCRM. Настроим систему под ваши бизнес-задачи, проверим, что всё работает, и поможем составить обучающие материалы для сотрудников.',
    image: crm,
  },
  {
    id: 5,
    type: 'message',
    text: '<b>Интеграция с 1С</b>\n\nот 60 000 руб.\n\nСтандартное ПО 1С: «Бухгалтерия», «Розница», «Управление торговлей», «Комплексная автоматизация», «Управление небольшой фирмой». Если стандартное решение не подойдёт, доработаем интеграцию 1C под вас.',
    image: oneC,
  },
  {
    id: 6,
    type: 'message',
    text: 'Какие интеграции мы внедряем',
  },
  {
    id: 7,
    type: 'message',
    text: 'Интегрируем сайты с 1С и CRM-системами. Настраиваем инструмент под конкретные бизнес-задачи. Налаживаем синхронизацию данных между платформами. ',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 8,
    type: 'message',
    text: 'Интеграция сайта с 1С, Битрикс24, amoCRM',
  },
];
