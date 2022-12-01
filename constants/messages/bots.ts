import { ChatMessages } from 'types/entities/Message';

import heading from 'assets/images/chats/bots/heading.png';
import help from 'assets/images/chats/bots/help.png';
import info from 'assets/images/chats/bots/info.png';
import learn from 'assets/images/chats/bots/learn.png';

export const botsMessages: ChatMessages = [
  {
    id: 1,
    type: 'message',
    text: '<b>Обучение и игры</b>\n\nот 20 000 руб.\n\nПривлекает внимание клиентов, вовлекает и формирует лояльность за счёт игр, развлекательного контента, мемов.\n\nК этой группе относятся и обучающие чат-боты, помогающие выучить иностранные языки, правила дорожного движенияи т. п.',
    image: learn,
  },
  {
    id: 4,
    type: 'message',
    text: '<b>Техподдержка</b>\n\nот 20 000 руб.\n\nОперативно отвечает на вопросы клиентов. Информируето товарах и услугах, статусах заказа, отделениях и времени их работы. Исправляет персональные данные в системе.\n\nЧат-бот такого вида отвечает на типовые вопросы. Если клиент задаёт сложные вопросы, бот переводит его на живого оператора.',
    image: help,
  },
  {
    id: 5,
    type: 'message',
    text: '<b>Информатор</b>\n\nот 20 000 руб.\n\nПомогает информировать клиентов о новинках, бонусах и акциях. Побуждает пользователей повторно воспользоваться товарамии услугами.\n\nТакой бот не может напрямую общаться с клиентами, но с ним компания сможет работать эффективнее, а вы — контролировать процессы.',
    image: info,
  },
  {
    id: 6,
    type: 'message',
    text: 'Каких чат-ботов мы разрабатываем:',
  },
  {
    id: 7,
    type: 'message',
    text: 'Разрабатываем чат-ботов для сайтов и социальных сетей: ВКонтакте, Facebook*, Instagram*, Twitter, Telegram, Viber, WhatsApp, Skype.\n\n*деятельность этих соцсетей запрещена в России.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 8,
    type: 'message',
    text: 'Разработка чат-ботов под любые задачи бизнеса',
  },
];
