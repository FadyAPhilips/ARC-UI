// src/components/Title.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'semibold', 'bold'],
    },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World',
  size: 'medium',
  weight: 'regular',
  color: '#000000',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small Title',
  size: 'small',
  weight: 'regular',
  color: '#333',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Title',
  weight: 'regular',
  size: 'large',
  color: '#FF5733',
};
