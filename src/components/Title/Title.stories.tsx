// Title.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    isHighlighted: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Title>;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Title',
  size: 'medium',
  isHighlighted: false,
};

export const LargeHighlighted = Template.bind({});
LargeHighlighted.args = {
  text: 'Large Highlighted Title',
  size: 'large',
  isHighlighted: true,
  color: 'red',
};
