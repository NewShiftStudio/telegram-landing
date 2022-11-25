import { ChatMessages } from 'types/Message';

import admin from 'assets/images/chats/biotropika/admin.png';
import guard from 'assets/images/chats/biotropika/guard.png';
import heading from 'assets/images/chats/biotropika/heading.png';
import miniBot from 'assets/images/chats/biotropika/miniBot.png';
import navigator from 'assets/images/chats/biotropika/navigator.png';
import questionnaire from 'assets/images/chats/biotropika/questionnaire.png';

export const biotropikaMessages: ChatMessages = [
  { id: 17, type: 'message', text: 'Легко — напишите сообщение прямо тут, и мы с вами свяжемся.' },
  {
    id: 16,
    type: 'message',
    text: 'Всё понятно, спасибо. Последний вопрос: как заказать разработку своего бота?',
    isOutgoing: true,
  },
  {
    id: 15,
    type: 'message',
    text: 'Дополнительно реализовали мини-бота, который генерирует сообщения с кнопкой. Их можно закреплять в чатах, чтобы упрощать навигацию.',
    image: miniBot,
  },
  {
    id: 14,
    type: 'message',
    text: 'Лично изучить можно по ссылке <a href="https://t.me/sports_entrepreneurs_bot">https://t.me/sports_entrepreneurs_bot</a>',
  },
  {
    id: 13,
    type: 'message',
    text: 'Бот-навигатор помогает участникам клуба вступать в региональные чаты. Пользователь выбирает регион, страну и город и попадает в соответствующий чат «Спортивных предпринимателей».',
    image: navigator,
  },
  {
    id: 12,
    type: 'message',
    text: 'Бот-администратор отправляет анкеты в чат администраторов. Админы решают, принять или отклонить анкету. Если её отклоняют, бот отправляет пользователю сообщение-отказ, если принимают — отправляет в общий чат вместе с приветственным сообщением.',
    image: admin,
  },

  {
    id: 11,
    type: 'message',
    text: 'Анкета доступна по ссылке <a href="https://t.me/form_sports_bot">https://t.me/form_sports_bot</a>',
  },
  {
    id: 10,
    type: 'message',
    text: 'Бот-анкета задает вопросы и принимает ответы от желающих вступить в бизнес-клуб. Предусмотрели ветвление вопросов и возможность отвечать нажатием кнопки. Ответы записываются во внутреннюю базу данных, на их основе генерируются картинка-анкета в фирменном стиле бренда и сопроводительное сообщение, которые сначала отправляются админам, а после подтверждения — в общий чат.',
    image: questionnaire,
  },
  {
    id: 9,
    type: 'message',
    text: 'Проверить можно по ссылке, но нужно будет вступить в чат <a href="https://t.me/sportivnye_predprinimateli">https://t.me/sportivnye_predprinimateli</a>',
  },
  {
    id: 8,
    type: 'message',
    text: 'Бот-охранник запрещает пользователям, которые не заполнили анкету, отправлять сообщения в чат. Бот также проверяет каждого вступившего, подтверждена ли его анкета. Посторонние shall not pass!',
    image: guard,
  },
  { id: 7, type: 'message', text: 'За 4 недели разработали сеть ботов:' },
  { id: 6, type: 'message', text: 'И как вы с этим справились?', isOutgoing: true },
  {
    id: 5,
    type: 'message',
    text: 'Их было четыре:\n\n 1. Ограничить отправку сообщений для неучастников сообщества\n\n 2. Автоматизировать регистрацию и обработку заявок\n\n 3. Добавить поиск анкет в каталоге, чтобы участники могли найти интересующий контакт по конкретному запросу\n\n 4. Разработать инструмент навигации между локальными чатами городов',
  },
  { id: 4, type: 'message', text: 'Так, а какая задача стояла?', isOutgoing: true },
  {
    id: 3,
    type: 'message',
    text: 'В первую очередь, это чат спортсменов, но главное в нем, что участники владельцы различных бизнесов.',
  },
  {
    id: 2,
    type: 'message',
    text: '«Спортивные предприниматели» — место притяжения для владельцев бизнесов и управленцев, которые занимаются спортом. Изначально проект задумывался как тематическое телеграм-сообщество. Но когда подписчиков стало много, было решено автоматизировать процессы.',
    image: heading,
  },
  {
    id: 1,
    type: 'message',
    text: 'А расскажите о клиенте в этом кейсе',
    isOutgoing: true,
  },
];
