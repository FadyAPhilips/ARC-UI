import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: { control: 'text' }, // Use children instead of text
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
  children: 'Hello World', // Pass text as children
  size: 'medium',
  weight: 'regular',
  color: '#000000',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Title', // Pass text as children
  size: 'small',
  weight: 'regular',
  color: '#333',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Title', // Pass text as children
  size: 'large',
  weight: 'bold',
  color: '#FF5733',
};
