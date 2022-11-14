import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputBlock } from './InputBlock';

export default {
  title: 'InputBlock',
  component: InputBlock,
} as ComponentMeta<typeof InputBlock>;

const Template: ComponentStory<typeof InputBlock> = args => <InputBlock {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  menuLinks: [
    {
      title: 'Telegram',
      href: '#',
    },
    {
      title: 'WhatsApp',
      href: '#',
    },
    {
      title: 'VK',
      href: '#',
    },
    {
      title: 'support@newshift.ru',
      href: '#',
    },
  ],
  phoneLink: '89999999999',
};
