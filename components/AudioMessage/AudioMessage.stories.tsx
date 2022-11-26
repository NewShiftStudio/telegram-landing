import React from 'react';

import AudioMessage from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Message/AudioMessage',
  component: AudioMessage,
} as ComponentMeta<typeof AudioMessage>;

const Template: ComponentStory<typeof AudioMessage> = args => <AudioMessage {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  audio: '/audio2.mp3',
};
