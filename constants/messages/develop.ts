import { ChatMessages } from 'types/Message';

import heading from 'assets/images/chats/develop/heading.png';

export const developMessages: ChatMessages = [
  {
    id: 1,
    type: 'message',
    text: '<b>Интернет-магазин</b>\n\nот 120 000 руб.\n\nРазработка веб-сайта с навигацией между товарами или услугами, профилем покупателя и возможностью онлайн-оплаты.',
    video: '/video/develop/online-shop.mp4',
  },
  {
    id: 2,
    type: 'message',
    text: '<b>Лендинг</b>\n\nот 30 000 руб.\n\nОдностраничный продающий сайт для сбора контактов, продвижения услуг и повышения узнаваемости.',
    video: '/video/develop/landing.mp4',
  },
  {
    id: 3,
    type: 'message',
    text: '<b>Блог</b>\n\nот 30 000 руб.\n\nСоздание веб-сайта, куда вы сможете регулярно добавлять записи с текстом, фото, видео и другим контентом.',
    video: '/video/develop/blog.mp4',
  },
  {
    id: 4,
    type: 'message',
    text: '<b>Сайт-визитка</b>\n\nот 20 000 руб.\n\nНебольшой сайт, содержащий информацию о компании, её услугах, кейсах и команде.',
    video: '/video/develop/business.mp4',
  },
  {
    id: 5,
    type: 'message',
    text: '<b>Корпоративный сайт</b>\n\nот 60 000 руб.\n\nРазработка многостраничного сайта для клиентов и сотрудников вашей компании.',
    video: '/video/develop/corporate.mp4',
  },
  {
    id: 6,
    type: 'message',
    text: 'Какие веб-сайты разрабатывает компания New Shift:',
  },
  {
    id: 7,
    type: 'message',
    text: 'Создаём веб-сайты с нуля. Тестируем и дорабатываем активные проекты.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 8,
    type: 'message',
    text: 'Веб-дизайн от New Shift — это узнаваемость вашего сайта, рост конверсии и прибыли от продаж',
  },
];
