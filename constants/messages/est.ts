import { ChatMessages } from 'types/Message';

import heading from '../../assets/images/chats/est/heading.png';
import plan from '../../assets/images/chats/est/plan.png';

export const estMessages: ChatMessages = [
  {
    id: 10,
    type: 'message',
    text: 'Напишите сообщение тут со своим запросом и мы сейчас свяжемся. Все контакты есть в чате New Shift (первая строчка слева в списке чатов).',
    withTail: true,
  },
  {
    id: 9,
    type: 'message',
    text: 'Интересно. А как оформить заказ?',
    isOutgoing: true,
    withTail: true,
  },
  {
    id: 8,
    type: 'message',
    text: 'Протестировать можно по ссылке <a href="https://t.me/eat_in_est_bot">https://t.me/eat_in_est_bot</a>',
  },
  {
    id: 7,
    type: 'message',
    text: 'Плюс рассылку для сбора обратной связи. На следующий день после посещения заведения, пользователю приходит предложение пройти опрос и оценить визит по ряду параметров по шкале от 1 до 10. При отказе ничего не происходит, но при согласии бот последовательно отправляет вопросы. Результаты опросов администратор может в два клика выгрузить в формате xls в своём кабинете в мессенджере.',
  },
  {
    id: 6,
    image: plan,
    type: 'message',
    text: 'За 6 недель сделали следующее:\n\n— Базу для хранения регистрационных данных пользователей, которая позволила частично решить проблему с долгими ответами серверов IIKO.\n\n— Система регистрации в программе лояльности внутри телеграм-бота.\n\n— Генератор бар-кодов для каждого участника программы лояльности. Бар-код можно использовать в заведении, чтобы не вводить номер карты лояльности вручную, а просто отсканировать бар-код, в котором зашита вся нужная информация.\n\n— Профиль администратора на базе созданного бота, который позволяет при вводе логина/пароля создавать маркетинговые рассылки, которые в один клик отправляются всем пользователям.\n\n— Кстати, рассылки в том числе автоматические: две перед днём рождения и для тех, кто не посещал заведение в течение 30, 60, 90 и так далее дней.',
  },
  {
    id: 5,
    type: 'message',
    text: 'Как реализовали?',
    isOutgoing: true,
    withTail: true,
  },
  {
    id: 4,
    type: 'message',
    text: 'На выходе заказчик хотел полчуть telegram-бота, с помощью которого гости могли регистрироваться, узнавать баланс, накапливать и тратить бонусы в рамках мессенджера без сторонних приложений и ресурсов. Нюанс заключался в том, что бот необходимо было интегрировать в ресторанное ПО IIKO для создания профилей пользователей, обмена информацией о бонусных баллах и возможности списания / накопления на кассовом терминале бара.',
  },
  {
    id: 3,
    type: 'message',
    text: 'Расскажите об этом кейсе',
    isOutgoing: true,
    withTail: true,
  },
  {
    id: 2,
    image: heading,
    type: 'message',
    text: 'К нам обратилась сеть гастрономических баров EST.1993 с разработкой программы лояльности на базе Telegram. Ранее существовавшая программа не устраивала клиента низкой вовлеченностью гостей и технической сложностью её обеспечения. Поэтому, команда решила перейти в мессенджер.',
  },
  {
    id: 1,
    type: 'message',
    text: 'Что нужно было сделать?',
    isOutgoing: true,
    withTail: true,
  },
];
