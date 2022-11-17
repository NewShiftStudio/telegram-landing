import delivery from '../../assets/images/chats/apps/delivery.png';
import heading from '../../assets/images/chats/apps/heading.png';
import info from '../../assets/images/chats/apps/info.png';
import wallet from '../../assets/images/chats/apps/wallet.png';

export const appsMessages = [
  {
    id: 6,
    createdAt: '12:00',
    text: 'Информационный ресурс\n\nот 20 000 руб.\n\nОнлайн-СМИ в кармане смартфона с поддержкой push-уведомлений. Сервис мгновенно предоставляет доступ к мировым новостям и актуальным событиям.',
    image: info,
  },
  {
    id: 5,
    createdAt: '12:00',
    text: 'Приложение для службы доставки\n\nот 20 000 руб.\n\nПростое и понятные приложение для кафе, ресторанов, суши-баров и пиццерий с каталогом, историей заказов и возможностью онлайн-оплаты.',
    image: delivery,
  },
  {
    id: 4,
    createdAt: '12:00',
    text: 'Мобильный кошелёк\n\nот 20 000 руб.\n\nСервис переносит в смартфон цифровые копии банковских, скидочных, транспортных и других карт.',
    image: wallet,
  },
  { id: 3, createdAt: '12:00', text: 'Какие интеграции мы внедряем' },
  {
    id: 2,
    createdAt: '12:00',
    text: 'Разрабатываем мобильные приложения для iOS и Android. Продумываем концепцию и логику, создаём дизайн, тестируем и запускаем.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    createdAt: '12:00',
    text: 'Какие приложения разрабатывает компания New Shift:',
  },
];
