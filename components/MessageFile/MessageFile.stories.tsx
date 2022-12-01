import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MessageFile } from './MessageFile';

export default {
  title: 'Message/MessageFile',
  component: MessageFile,
} as ComponentMeta<typeof MessageFile>;

const Template: ComponentStory<typeof MessageFile> = args => <MessageFile {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  name: 'Название файла',
  size: '1.5 Мб',
  type: 'pdf',
};
