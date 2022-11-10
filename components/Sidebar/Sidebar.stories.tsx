import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  title: '123',
};
