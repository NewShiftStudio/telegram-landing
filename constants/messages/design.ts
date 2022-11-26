import { ChatMessages } from 'types/Message';

import heading from 'assets/images/chats/apps/heading.png';

export const designMessages: ChatMessages = [
  {
    id: 8,
    type: 'message',
    text: '<b>Motion и 3D-дизайн</b>\n\nАнимируем логотипы и тексты, делаем инфографику и видеоролики, которые решают задачи бизнеса.\n\nРазрабатываем динамичные решения, помогающие объяснить, наглядно показать преимущества продукта, развлечь, обучить и подтолкнуть к выполнению целевого действия.',
    video: '/video/design/motion.mp4',
  },
  {
    id: 7,
    type: 'message',
    video: '/video/design/ui.mp4',
    text: '<b>UX/UI-дизайн</b>\n\nДелаем взаимодействие пользователей с сайтом комфортным.\n\nПродумываем, какие маршруты будет использовать пользователь, с какими сложностями он может столкнуться и как подвести его к целевому действию.',
  },
  {
    id: 6,
    type: 'message',
    video: '/video/design/motion.mp4',
    text: '<b>Бизнес-презентации</b>\n\nОформляем презентации так, чтобы информация в ней была наглядной, доступной и понятной.\n\nПомогаем выразить ваши идеи, привлечь внимание аудитории и удержать интерес.',
  },
  {
    id: 5,
    type: 'message',
    video: '/video/design/graph.mp4',
    text: '<b>Графический дизайн</b>\n\nСоздаём иллюстрации, логотипы и айдентику. Отрисовываем иконки, оформляем интерфейсы, подбираем шрифты.\n\nПомогаем выразить идеи, ценности и смыслы бренда через визуальные образы. Оформляем сайты так, чтобы вашим клиентам было удобно, понятно и приятно.',
  },
  {
    id: 4,
    type: 'message',
    video: '/video/design/branding.mp4',
    text: '<b>Брендинг</b>\n\nСоздаём персональный брендинг и идеологию бренда для компаний.\n\nРазрабатываем брендбук — документ с детальным описанием, куда входят главные составляющие бренда: визуальный стиль, философия, компоновки разных версий логотипа и т. д.',
  },
  { id: 3, type: 'message', text: 'Дизайн, который мы создаем:' },
  {
    id: 2,
    type: 'message',
    text: 'Оформляем контент, разрабатываем графические элементы, делаем сайт привлекательным для клиентов',
    image: heading,
    link: {
      title: 'ПЕРЕЙТИ НА САЙТ',
      href: '#',
    },
  },
  {
    id: 1,
    type: 'message',
    text: 'Веб-дизайн от New Shift — это узнаваемость вашего сайта, рост конверсии и прибыли от продаж',
  },
];
