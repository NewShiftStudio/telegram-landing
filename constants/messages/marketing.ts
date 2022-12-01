import { ChatMessages } from 'types/entities/Message';

import context from 'assets/images/chats/marketing/context.png';
import email from 'assets/images/chats/marketing/email.png';
import heading from 'assets/images/chats/marketing/heading.png';
import mobile from 'assets/images/chats/marketing/mobile.png';
import smm from 'assets/images/chats/marketing/smm.png';
import strategy from 'assets/images/chats/marketing/strategy.png';
import target from 'assets/images/chats/marketing/target.png';

export const marketingMessages: ChatMessages = [
  {
    id: 9,
    type: 'message',
    text: '<b>App-store and Google Play</b>\n\nот 50 000 руб.\n\nРазрабатываем, тестируем и продвигаем мобильные приложения под ключ.\n\nЗагружаем приложения в магазины App Store и Google Play Store, проходим этап модерации, составляем описание и скриншоты.',
    image: mobile,
  },
  {
    id: 8,
    type: 'message',
    text: '<b>Таргетинг</b>\n\nот 50 000 руб.\n\nНастраиваем таргетированную рекламу ВКонтакте, Instagram и Facebook. Помимо настройки, мы подготавливаем креативы, пишем вовлекающие промо, составляем карусели и видеоматериалы.',
    image: target,
  },
  {
    id: 7,
    type: 'message',
    text: '<b>E-mail marketing</b>\n\nот 50 000 руб.\n\nСоздаём вовлекающие, продающие и допродающие цепочки писем. Держим фокус на количестве заявок.\n\nМы тестируем несколько вариантов писем, чтобы прийти к наилучшему результату. Наши рассылки не попадают в спам.',
    image: email,
  },
  {
    id: 6,
    type: 'message',
    text: '<b>Контекстная реклама</b>\n\nот 50 000 руб.\n\nНастраиваем рекламу в Яндекс.Директ (поиск и РСЯ) и Google Ads (поиск к Кмс). Собираем и чистим обширную семантику, прописываем минус-слова и  добиваемся низкой цены клика при максимальной конверсии.',
    image: context,
  },
  {
    id: 5,
    type: 'message',
    text: '<b>Digital-стратегия</b>\n\nот 50 000 руб.\n\nИсследуем бренд, анализируем рынок и аудиторию, разрабатываем стратегию выхода бизнеса в цифровое пространство. С креативной идеей и всеми каналами коммуникации.',
    image: strategy,
  },
  {
    id: 4,
    type: 'message',
    text: '<b>SMM Marketing</b>\n\nот 50 000 руб.\n\nУпаковываем и продвигаем группы в Instagram, ВКонтакте и Facebook.\n\nМы не нацелены на бесполезную накрутку подписчиков. Наша задача - привести целевую аудиторию, которая будет покупать.',
    image: smm,
  },
  { id: 3, type: 'message', text: 'На что мы способны:' },
  {
    id: 2,
    type: 'message',
    text: 'Отталкиваемся от ваших возможностей и бюджета. Предлагаем несколько способов продвижения в Интернете. Готовые проекты не бросаем, а предлагаем поддержку от 1 до 3 месяцев.',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    type: 'message',
    text: 'Омниканальный digital-маркетинг',
  },
];
