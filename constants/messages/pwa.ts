import { ChatMessages } from 'types/Message';

import heading from 'assets/images/chats/pwa/heading.png';
import pwa from 'assets/images/chats/pwa/pwa.png';

export const pwaMessages: ChatMessages = [
  {
    id: 3,
    type: 'message',
    text: '<b>Почему стоит выбрать PWA?</b>\n\nProgressive Web App — веб-технология, которая позволяет пользователям установить ваш сайт как мобильное приложение.\n\n1 - Разработка и поддержка обходится на 70% дешевле;\n\n2 - Индексируется и улучшает SEO-показатели сайта;\n\n3 - Ставится в обход AppStore и Google Play — можно установить на главный экран смартфона прямо из браузера',
    image: pwa,
  },
  {
    id: 2,
    type: 'message',
    text: 'Разрабатываем прогрессивные веб-приложения, которые подходят для всех операционных систем, платформ и устройств.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    type: 'message',
    text: 'Мобильное приложение на базе вашего сайта',
  },
];
