import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MessageItem } from './MessageItem';

export default {
  title: 'Message/MessageItem',
  component: MessageItem,
} as ComponentMeta<typeof MessageItem>;

const Template: ComponentStory<typeof MessageItem> = args => <MessageItem {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
  date: '22:15',
  image:
    'https://images.unsplash.com/photo-1667529807746-41be513da45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};
