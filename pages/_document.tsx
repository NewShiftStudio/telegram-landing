import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='NewShift — IT-компания для решения бизнес-задач: создание сайтов, разработка приложений и настройка Яндекс.Директ, а также подключение чат-ботов в телеграм, vk и других платформах.'
        />

        <meta name='og:site_name' content='New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб' />
        <meta name='og:image' content='https://newshift.ru/images/logo.svg' />
        <meta name='og:url' content='https://telegram.devshift.ru' />
        <meta name='og:title' content='New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб' />
        <meta
          name='og:description'
          content='NewShift — IT-компания для решения бизнес-задач: создание сайтов, разработка приложений и настройка Яндекс.Директ, а также подключение чат-ботов в телеграм, vk и других платформах.'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='New Shift — разработка сайтов, сервисов, приложений, чат-ботов в СПб' />
        <meta
          name='twitter:description'
          content='NewShift — IT-компания для решения бизнес-задач: создание сайтов, разработка приложений и настройка Яндекс.Директ, а также подключение чат-ботов в телеграм, vk и других платформах.'
        />
        <meta name='twitter:image' content='https://newshift.ru/images/logo.svg' />
        <meta name='twitter:domain' content='https://telegram.devshift.ru' />
        <meta name='facebook-domain-verification' content='c19uuz7kv1d70c8zh6m99o7gqsivo6' />
        <meta
          name='keywords'
          content='сайт цены, сайт продвижение, заказать сайт, создание приложений, телеграм бот, разработка приложений, smm продвижение'
        />
        <meta name='next-head-count' content='16' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
