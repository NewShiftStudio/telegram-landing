import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MobileSidebar } from './MobileSidebar';

export default {
  title: 'MobileSidebar',
  component: MobileSidebar,
} as ComponentMeta<typeof MobileSidebar>;

const Template: ComponentStory<typeof MobileSidebar> = args => <MobileSidebar {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  phone: '89999999999',
  newMessagesCount: 0,
};
