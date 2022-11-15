import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'UI/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => <Textarea {...args} />;

export const DefaultState = Template.bind({});
