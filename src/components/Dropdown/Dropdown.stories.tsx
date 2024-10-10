// src/components/Dropdown/Dropdown.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    onSelect: { action: 'selected' },
    options: {
      control: { type: 'object' }, // Changing from "array" to "object" for compatibility
    },
  },
} as Meta;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option',
};

export const LongText = Template.bind({});
LongText.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3 in this long text dropdown menu to test for length Option 3 in this long text dropdown menu to test for length Option 3 in this long text dropdown menu to test for length Option 3 in this long text dropdown menu to test for length',
  ],
  placeholder:
    'Select an option in this long text dropdown menu to test for length',
};
