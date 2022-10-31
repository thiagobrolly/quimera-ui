import { Meta, Story } from '@storybook/react';

import { Text, TextProps } from '@quimera-ui/react';

export default {
  title: 'TYPOGRAPHY/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eaque ea non neque eum iste voluptas laboriosam, dolorem tempore illo laudantium accusamus totam nobis, perferendis autem magnam deleniti eius aut.',
    uppercase: false,
    bold: false,
  },
  argTypes: {
    color: { control: 'color' },
    uppercase: { control: 'boolean' },
    bold: { control: 'boolean' },
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
    lineHeight: {
      options: [' ', 'shorter', 'short', 'base', 'tall'],
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
} as Meta<TextProps>;

export const Primary: Story<TextProps> = (args) => <Text {...args} />;
Primary.args = {};
