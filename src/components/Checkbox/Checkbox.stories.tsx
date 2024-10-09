// src/components/Checkbox/Checkbox.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
};

export const Unchangeable = Template.bind({});
Unchangeable.args = {
  label: 'Checked Checkbox',
  checked: true,
  changeable: false,
};

export const crossOutOnChecked = Template.bind({});
crossOutOnChecked.args = {
  label: 'Checked Checkbox',
  checked: false,
  crossOutOnChecked: true,
};
