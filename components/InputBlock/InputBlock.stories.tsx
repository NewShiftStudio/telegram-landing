import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { menuLinks } from '../../constants/commonLinks';
import { InputBlock } from './InputBlock';

export default {
  title: 'InputBlock',
  component: InputBlock,
} as ComponentMeta<typeof InputBlock>;

const Template: ComponentStory<typeof InputBlock> = args => <InputBlock {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  menuLinks,
  phoneLink: '89999999999',
};
