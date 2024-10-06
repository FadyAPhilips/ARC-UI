// src/components/Title.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World',
  size: 'medium',
  color: '#000000',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small Title',
  size: 'small',
  color: '#333',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Title',
  size: 'large',
  color: '#FF5733',
};
