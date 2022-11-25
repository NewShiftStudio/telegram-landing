import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AudioMessage } from './AudioMessage';

export default {
  title: 'Message/AudioMessage',
  component: AudioMessage,
} as ComponentMeta<typeof AudioMessage>;

const Template: ComponentStory<typeof AudioMessage> = args => <AudioMessage {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  audio: '/audio2.mp3',
};
