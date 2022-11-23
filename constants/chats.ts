import type { Chat } from 'types/Chat';

import { appsMessages } from './messages/apps';
import { biotropikaMessages } from './messages/biotropika';
import { blockchainMessages } from './messages/blockchain';
import { botsMessages } from './messages/bots';
import { constructorsMessages } from './messages/constructors';
import { designMessages } from './messages/design';
import { developMessages } from './messages/develop';
import { estMessages } from './messages/est';
import { integrationsMessages } from './messages/integrations';
import { marketingMessages } from './messages/marketing';
import { pwaMessages } from './messages/pwa';

import newShift from 'assets/images/avatar/NewShift.png';
import apps from 'assets/images/avatar/apps.png';
import blockchain from 'assets/images/avatar/blockchain.png';
import bots from 'assets/images/avatar/bots.png';
import constructors from 'assets/images/avatar/constructors.png';
import design from 'assets/images/avatar/design.png';
import est from 'assets/images/avatar/est.png';
import guardBot from 'assets/images/avatar/guard-bot.png';
import integrations from 'assets/images/avatar/integrations.png';
import navigatorBot from 'assets/images/avatar/navigator-bot.png';
import promotion from 'assets/images/avatar/promotion.png';
import pwa from 'assets/images/avatar/pwa.png';
import userBot from 'assets/images/avatar/user-bot.png';
import web from 'assets/images/avatar/web.png';

export const chatsList: Chat[] = [
  {
    path: '/',
    title: 'New Shift',
    lastMessageText: 'Чтобы связаться с нами напишите любое сообщение в этот диалог, как пишите обычно в Telegram. ',
    image: newShift,
    isPinned: true,
    isChecked: true,
    messages: [
      {
        id: 1,
        text: 'Чтобы связаться с нами напишите любое сообщение в этот диалог, как пишите обычно в Telegram. Или нажмите на одну из четырех кнопок. Сайт перенаправит вас в мессенджеры, соцсеть или почту.',
        withTail: true,
      },
      {
        id: 2,
        text: 'Слева, в диалогах, наши кейсы. Нажмите, например, на est.1993. Это наш бот с программой лояльности для ресторана.',
      },
      {
        id: 3,
        text: 'Куда нажимать и куда писать?',
        isOutgoing: true,
        withTail: true,
      },
      {
        id: 4,
        text: 'Что нужно делать, чтобы связаться и посмотреть кейсы?',
        isOutgoing: true,
        withTail: true,
      },
      {
        id: 5,
        text: 'Ага, в видео рассказ о компании и как пользоваться этим сайтом. Понятно.',
        isOutgoing: true,
        withTail: true,
      },
    ],
  },
  {
    path: 'biotropika',
    title: 'Спортивные Предприниматели',
    lastMessageText: 'Бот-навигатор. Создан для того, чтобы...',
    titleIcon: 'bot',
    image: navigatorBot,
    messages: biotropikaMessages,
  },
  {
    path: 'est1993',
    title: 'est. 1993',
    lastMessageText: 'Бот с интеграцией ресторанного ПО IIKO...',
    titleIcon: 'bot',
    image: est,
    messages: estMessages,
  },
  {
    path: 'develop',
    title: 'Разработка',
    lastMessageText: 'Ведем разработку любой сложности',
    image: web,
    titleIcon: 'bot',
    lastMessageIcon: 'data',
    messages: developMessages,
  },
  {
    path: 'marketing',
    title: 'Продвижение',
    lastMessageText: 'Омниканальный digital-маркетинг',
    image: promotion,
    titleIcon: 'megaphone',
    lastMessageIcon: 'headphones',
    messages: marketingMessages,
  },
  {
    path: 'design',
    title: 'Дизайн',
    lastMessageText: 'Закажите уникальный дизайн от New Shift',
    image: design,
    titleIcon: 'peoples',
    lastMessageIcon: 'video',
    messages: designMessages,
  },
  {
    path: 'blockchain',
    title: 'Блокчейн',
    lastMessageText: 'Реализуем ваш blockchain-проект с технической...',
    image: blockchain,
    titleIcon: 'megaphone',
    lastMessageIcon: 'headphones',
    messages: blockchainMessages,
  },
  {
    path: 'apps',
    title: 'Мобильные приложения',
    lastMessageText: 'Мобильные приложения для любого типа бизнеса',
    image: apps,
    titleIcon: 'peoples',
    lastMessageIcon: 'video',
    messages: appsMessages,
  },

  {
    path: 'integrations',
    title: 'Интеграции',
    lastMessageText: 'Интеграция сайта с 1с, Битрикс24, АМОCRM',
    image: integrations,
    titleIcon: 'megaphone',
    lastMessageIcon: 'document',
    messages: integrationsMessages,
  },
  {
    path: 'constructors',
    title: 'Конструкторы',
    lastMessageText: 'Создание сайтов на конструкторах Tilda, Bitrix24...',
    image: constructors,
    titleIcon: 'bot',
    lastMessageIcon: 'document',
    messages: constructorsMessages,
  },
  {
    path: 'pwa',
    title: 'PWA-приложения',
    lastMessageText: 'Мобильное приложение на базе вашего сайта',
    image: pwa,
    titleIcon: 'bot',
    lastMessageIcon: 'document',
    messages: pwaMessages,
  },
  {
    path: 'bots',
    title: 'Чат-боты',
    lastMessageText: 'Разработка чат-ботов под любые задачи бизнеса',
    image: bots,
    titleIcon: 'bot',
    lastMessageIcon: 'document',
    messages: botsMessages,
  },
];
