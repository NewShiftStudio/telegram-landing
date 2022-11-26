import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MessagesList } from './MessagesList';

export default {
  title: 'MessagesList',
  component: MessagesList,
} as ComponentMeta<typeof MessagesList>;

const Template: ComponentStory<typeof MessagesList> = args => <MessagesList {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  messages: [
    {
      id: 1,
      type: 'message',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      createdAt: '22:15',
      isOutgoing: false,
      image:
        'https://images.unsplash.com/photo-1667529807746-41be513da45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: {
        title: 'Забрать свой миллион',
        href: '#',
      },
    },
    {
      id: 2,
      type: 'message',
      text: 'Lorem Ipsum - это текст-"рыба"',
      createdAt: '22:15',
      isOutgoing: true,
    },
    {
      id: 3,
      type: 'message',
      text: 'Че как дела?',
      createdAt: '22:15',
      isOutgoing: false,
      link: {
        title: 'Забрать свой миллион',
        href: '#',
      },
    },
    {
      id: 4,
      type: 'message',
      text: 'Все по кайфу а у тебя?',
      createdAt: '22:15',
      isOutgoing: true,
    },
    {
      id: 5,
      type: 'message',
      text: 'Lorem Ipsum - это текст-"рыба"',
      createdAt: '22:15',
      isOutgoing: true,
    },
    {
      id: 6,
      type: 'message',
      text: 'Че как дела?',
      createdAt: '22:15',
      isOutgoing: false,
    },
  ],
};
