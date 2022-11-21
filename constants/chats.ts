import type { Chat } from 'types/Chat';

import { appsMessages, developMessages } from 'constants/messages';

import newShift from 'assets/images/avatar/NewShift.png';
import apps from 'assets/images/avatar/apps.png';
import blockchain from 'assets/images/avatar/blockchain.png';
import bots from 'assets/images/avatar/bots.png';
import constructors from 'assets/images/avatar/constructors.png';
import design from 'assets/images/avatar/design.png';
import integrations from 'assets/images/avatar/integrations.png';
import promotion from 'assets/images/avatar/promotion.png';
import pwa from 'assets/images/avatar/pwa.png';
import web from 'assets/images/avatar/web.png';

export const chatsList: Chat[] = [
  {
    path: '/',
    title: 'New Shift',
    lastMessageText: 'main chat content',
    image: newShift,
  },
  {
    path: 'guardBot',
    title: 'Спортивные Предприниматели',
    lastMessageText: 'Photo',
    titleIcon: 'bot',
  },
  {
    path: 'questionnaire',
    title: 'Анкета: Спортивные Предприниматели',
    lastMessageText: '2 Some chat content',
    titleIcon: 'bot',
  },
  {
    path: 'est1993',
    title: 'est. 1993',
    lastMessageText: '3 Some chat content',
    titleIcon: 'bot',
  },
  {
    path: 'develop',
    title: 'Разработка',
    lastMessageText: 'Ведем разработку любой сложности',
    image: web,
    titleIcon: 'bot',
    messages: developMessages,
  },
  {
    path: 'apps',
    title: 'Мобильные приложения',
    lastMessageText: 'Мобильные приложения для любого типа бизнеса',
    image: apps,
    titleIcon: 'peoples',
    messages: appsMessages,
  },
  {
    path: 'promotion',
    title: 'Продвижение',
    lastMessageText: '3 Some chat content',
    image: promotion,
    titleIcon: 'megaphone',
  },
  {
    path: 'design',
    title: 'Дизайн',
    lastMessageText: 'Закажите уникальный дизайн от New Shift',
    image: design,
    titleIcon: 'peoples',
  },
  {
    path: 'blockchain',
    title: 'Блокчейн',
    lastMessageText: 'Реализуем ваш blockchain-проект с технической...',
    image: blockchain,
    titleIcon: 'megaphone',
  },

  {
    path: 'integrations',
    title: 'Интеграции',
    lastMessageText: 'Интеграция сайта с 1с, Битрикс24, АМОCRM',
    image: integrations,
    titleIcon: 'megaphone',
  },
  {
    path: 'constructors',
    title: 'Конструкторы',
    lastMessageText: 'Создание сайтов на конструкторах Tilda, Bitrix24...',
    image: constructors,
    titleIcon: 'bot',
  },
  {
    path: 'pwa',
    title: 'PWA-приложения',
    lastMessageText: 'Мобильное приложение на базе вашего сайта',
    image: pwa,
    titleIcon: 'bot',
  },
  {
    path: 'bots',
    title: 'Чат-боты',
    lastMessageText: 'Разработка чат-ботов под любые задачи бизнеса',
    image: bots,
    titleIcon: 'bot',
  },
];
