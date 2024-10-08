import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
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
};
