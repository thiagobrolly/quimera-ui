import React from 'react';
import * as S from './styles';

type TextTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.HTMLAttributes<HTMLElement>;

enum Sizes {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
  '5xl' = '5xl',
  '6xl' = '6xl',
  '7xl' = '7xl',
  '8xl' = '8xl',
  '9xl' = '9xl',
}

export type TextSizes =
  | `${Sizes}`
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`;

type Colors = 'primary' | 'black' | 'gray' | 'white';

type LiteralUnionColors<T extends Colors, U = string> =
  | T
  | (Pick<U, never> & {
      _?: never;
    });

export type TextColor = LiteralUnionColors<
  'primary' | 'black' | 'gray' | 'white'
>;

export type LineHeight = 'shorter' | 'short' | 'base' | 'tall';

export type TextLineHeight =
  | `${LineHeight}`
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`;

export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end';

export type ITextAlign = {
  default?: TextAlign;
  sm?: TextAlign;
  md?: TextAlign;
  xl?: TextAlign;
};

export interface ITextSizes {
  default?: TextSizes;
  sm?: TextSizes;
  md?: TextSizes;
  xl?: TextSizes;
}

export type TextProps = {
  // children?: React.ReactNode | string;
  as?: 'p' | 'span' | 'a' | 'li' | 'em' | 'strong';
  lineHeight?: TextLineHeight;
  size?: TextSizes | ITextSizes;
  listStyle?: string;
  textAlign?: TextAlign | ITextAlign;
  color?: TextColor;
  bold?: boolean;
  uppercase?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & TextTypes;

export const Text = ({
  children,
  as,
  size = 'md',
  uppercase = false,
  bold = false,
  color = 'black',
  lineHeight = 'shorter',
  ...props
}: TextProps) => {
  return (
    <S.Text
      as={as}
      color={color}
      size={size}
      uppercase={uppercase}
      bold={bold}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </S.Text>
  );
};

Text.displayName = 'Text';
