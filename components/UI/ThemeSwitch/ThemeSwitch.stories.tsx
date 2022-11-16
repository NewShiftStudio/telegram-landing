import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'UI/ThemeSwitch',
  component: ThemeSwitch,
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = args => {
  const [isActive, setIsActive] = useState(false);
  return <ThemeSwitch {...args} isActive={isActive} onChange={() => setIsActive(prevState => !prevState)} />;
};

export const DefaultState = Template.bind({});
