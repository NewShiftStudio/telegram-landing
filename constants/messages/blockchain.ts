import { ChatMessages } from 'types/entities/Message';

import heading from 'assets/images/chats/blockchain/heading.png';

export const blockchainMessages: ChatMessages = [
  {
    id: 8,
    type: 'message',
    text: '<b>Криптовалютные приложения</b>\n\nот 50 000 руб.\n\nРазрабатываем мобильные сервисы и адаптируем готовые десктопные версии под iOS и Android. Публикуем приложения в магазинах.',
    video: '/video/blockchain/mobile.mp4',
  },
  {
    id: 7,
    type: 'message',
    video: '/video/blockchain/node.mp4',
    text: '<b>Установка и настройка ноды</b>\n\nот 20 000 руб.\n\nУстанавливаем и настраиваем узлы blockchain-системы, которые передают информацию о транзакциях и блоках с применением Р2Р-протокола.',
  },
  {
    id: 6,
    type: 'message',
    video: '/video/blockchain/api.mp4',
    text: '<b>Криптовалютные API</b>\n\nот 10 000 руб.\n\nРазрабатываем интерфейсы API, помогающие получать информацию о цифровых валютах и их стоимости. Данные на API поступают с Coinbase, Binance и т. п.',
  },
  {
    id: 5,
    type: 'message',
    video: '/video/blockchain/nft.mp4',
    text: '<b>NFT-токены</b>\n\nот 5000 руб.\n\nРазрабатываем NFT-токены на базе Ethereum, Binance smart chain, Waves и Stellar. Закрепляем ваши права на уникальный цифровой контент.',
  },
  {
    id: 4,
    type: 'message',
    video: '/video/blockchain/smart.mp4',
    text: '<b>Smart-контракты</b>\n\nот 3000 руб.\n\nСоздаём smart-контракты на базе платформ Ethereum, Binance smart chain, Waves и Stellar. Разрабатываем алгоритмы для ICO-компаний и на выпуск токенов.',
  },
  {
    id: 3,
    type: 'message',
    text: 'Наши услуги в сфере разработки blockchain-продуктов',
  },
  {
    id: 2,
    type: 'message',
    text: 'Реализуем blockchain-проекты для записи, совместного использования и распространения данных',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    type: 'message',
    text: 'Запустим ваш blockchain-проект, окажем техническую поддержку и поможем с продвижением',
  },
];
