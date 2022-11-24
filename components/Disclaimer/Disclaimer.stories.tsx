import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Disclaimer } from './Disclaimer';

export default {
  title: 'Disclaimer',
  component: Disclaimer,
} as ComponentMeta<typeof Disclaimer>;

const Template: ComponentStory<typeof Disclaimer> = args => <Disclaimer {...args} />;
export const DefaultState = Template.bind({});
