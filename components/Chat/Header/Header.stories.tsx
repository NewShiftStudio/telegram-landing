import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChatHeader } from './Header';

export default {
  title: 'Chat/Header',
  component: ChatHeader,
} as ComponentMeta<typeof ChatHeader>;

const Template: ComponentStory<typeof ChatHeader> = args => <ChatHeader {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  title: 'Интеграции',
  image:
    'https://images.unsplash.com/photo-1667816014414-dba47e785cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  isOnline: true,
  phoneLink: '+79999999999',
};
