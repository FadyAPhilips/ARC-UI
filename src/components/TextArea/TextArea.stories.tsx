import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    minRows: { control: 'number' },
    resizable: { control: 'boolean' },
    negative: { control: 'boolean' },
    secondaryColor: { control: 'color' },
    primaryColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter your text here...',
  minRows: 3,
  resizable: true,
};

export const NonResizable = Template.bind({});
NonResizable.args = {
  value: '',
  placeholder: 'This textarea is not resizable...',
  minRows: 3,
  resizable: false,
};
