import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import VideoMessage from './VideoMessage';

export default {
  title: 'Message/VideoMessage',
  component: VideoMessage,
} as ComponentMeta<typeof VideoMessage>;

const Template: ComponentStory<typeof VideoMessage> = args => <VideoMessage {...args} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  video: 'https://static.videezy.com/system/resources/previews/000/009/602/original/4k0212.mp4',
};
