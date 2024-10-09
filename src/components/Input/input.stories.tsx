import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: { control: 'select', options: ['text', 'password'] },
    negative: { control: 'boolean' },
    secondaryColor: { control: 'color' },
    primaryColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState(args.value || '');

  return (
    <Input
      {...args}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here',
  value: '',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter password',
  value: '',
  type: 'password',
};
