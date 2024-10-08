import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large'],
    },
    secondaryColor: { control: 'color' },
    primaryColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  onClick: () => console.log('Button clicked!'),
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small Title',
  onClick: () => console.log('Button clicked!'),
  size: 'small',
  primaryColor: '#333',
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: 'Ghost',
  onClick: () => console.log('Button clicked!'),
  primaryColor: '#d6d6d6',
  secondaryColor: 'rgba(0, 0, 0, 0.5)',
  border: false,
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline',
  onClick: () => console.log('Button clicked!'),
  primaryColor: '#00178a',
  secondaryColor: 'rgba(0, 0, 0, 0)',
  border: true,
};
