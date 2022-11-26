import { ChatMessages } from 'types/Message';

import delivery from 'assets/images/chats/apps/delivery.png';
import heading from 'assets/images/chats/apps/heading.png';
import info from 'assets/images/chats/apps/info.png';
import wallet from 'assets/images/chats/apps/wallet.png';

export const appsMessages: ChatMessages = [
  {
    id: 6,
    type: 'message',
    text: '<b>Информационный ресурс</b>\n\nот 20 000 руб.\n\nОнлайн-СМИ в кармане смартфона с поддержкой push-уведомлений. Сервис мгновенно предоставляет доступ к мировым новостям и актуальным событиям.',
    image: info,
  },
  {
    id: 5,
    type: 'message',
    text: '<b>Приложение для службы доставки</b>\n\nот 20 000 руб.\n\nПростое и понятные приложение для кафе, ресторанов, суши-баров и пиццерий с каталогом, историей заказов и возможностью онлайн-оплаты.',
    image: delivery,
  },
  {
    id: 4,
    type: 'message',
    text: '<b>Мобильный кошелёк</b>\n\nот 20 000 руб.\n\nСервис переносит в смартфон цифровые копии банковских, скидочных, транспортных и других карт.',
    image: wallet,
  },
  { id: 3, type: 'message', text: 'Какие интеграции мы внедряем' },
  {
    id: 2,
    type: 'message',
    text: 'Разрабатываем мобильные приложения для iOS и Android. Продумываем концепцию и логику, создаём дизайн, тестируем и запускаем.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    type: 'message',
    text: 'Какие приложения разрабатывает компания New Shift:',
  },
];
