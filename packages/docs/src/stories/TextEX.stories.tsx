import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@quimera-ui/react';

export default {
  title: 'TYPOGRAPHY/Text2',
  component: Text,
  args: {
    children: 'Paragraph',
    uppercase: false,
    bold: false,
  },
  argTypes: {
    color: { control: 'color' },
    lineHeight: { control: 'text' },
    size: {
      options: [
        ' ',
        'xxs',
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'select' },
    },
    textAlign: {
      options: ['left', 'right', 'center', 'justify', 'start', 'end'],
      control: { type: 'select' },
    },
    as: {
      options: ['p', 'span', 'a', 'li', 'em', 'strong'],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        type: 'auto',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

// export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {};

// export const Sec: Story<ButtonProps> = (args) => <Button {...args} />;
// Primary.args = {
//   variant: 'outline',
// };
