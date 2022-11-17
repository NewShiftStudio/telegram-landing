import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LinkMessage } from './LinkMessage';

export default {
  title: 'Messages/LinkMessage',
  component: LinkMessage,
} as ComponentMeta<typeof LinkMessage>;

const Template: ComponentStory<typeof LinkMessage> = args => <LinkMessage {...args} />;

export const DefaultState = Template.bind({
  href: 'https://google.com',
  title: 'Перейти на сайт',
});
