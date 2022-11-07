import styled, { css } from 'styled-components';
import { fontSizes, lineHeights } from '@quimera-ui/tokens';
import { TextProps, TextColor, TextSizes, ITextSizes, TextLineHeight } from '.';

const variantsColor = (color: TextColor) => {
  switch (color) {
    case 'primary':
      return () => css`
        color: ${({ theme }) => theme.colors.primary};
      `;
    case 'white':
      return () => css`
        color: ${({ theme }) => theme.colors.neutral100};
      `;
    case 'gray':
      return () => css`
        color: ${({ theme }) => theme.colors.gray_80};
      `;
    case 'black':
      return () => css`
        color: ${({ theme }) => theme.colors.gray_110};
      `;
    default:
      return `color: ${color}`;
  }
};

const variantsSize = (size: TextSizes | ITextSizes) => {
  switch (size) {
    case 'xxs':
      return () => css`
        font-size: ${fontSizes.xxs}; /* 0.625rem -> 10px */
      `;
    case 'xs':
      return () => css`
        font-size: ${fontSizes.xs}; /* 0.75rem -> 12px */
      `;
    case 'sm':
      return () => css`
        font-size: ${fontSizes.sm}; /* 0.875rem -> 14px */
      `;
    case 'md':
      return () => css`
        font-size: ${fontSizes.md}; /* 1rem -> 16px */
      `;
    case 'lg':
      return () => css`
        font-size: ${fontSizes.lg}; /* 1.125rem -> 18px */
      `;
    case 'xl':
      return () => css`
        font-size: ${fontSizes.sm}; /* 1.25rem -> 20px */
      `;
    case '2xl':
      return () => css`
        font-size: ${fontSizes['2xl']}; /* 1.5rem -> 24px */
      `;
    case '3xl':
      return () => css`
        font-size: ${fontSizes['3xl']}; /* 1.875rem -> 30px */
      `;
    case '4xl':
      return () => css`
        font-size: ${fontSizes['4xl']}; /* 2.25rem -> 36px */
      `;
    case '5xl':
      return () => css`
        font-size: ${fontSizes['5xl']}; /* 3rem -> 48px */
      `;
    case '6xl':
      return () => css`
        font-size: ${fontSizes['6xl']}; /* 3.75rem -> 60px */
      `;
    case '7xl':
      return () => css`
        font-size: ${fontSizes['7xl']}; /* 4.5rem -> 72px */
      `;
    case '8xl':
      return () => css`
        font-size: ${fontSizes['9xl']}; /* 6rem -> 96px */
      `;
    case '9xl':
      return () => css`
        font-size: ${fontSizes['9xl']}; /* 8rem -> 128px */
      `;
    default:
      return `font-size: ${size}`;
  }
};

const variantsLineHeight = (lineHeight: TextLineHeight) => {
  switch (lineHeight) {
    case 'shorter':
      return () => css`
        line-height: ${lineHeights.shorter}; /* 0.625rem -> 10px */
      `;
    case 'short':
      return () => css`
        line-height: ${lineHeights.short}; /* 0.75rem -> 12px */
      `;
    case 'base':
      return () => css`
        line-height: ${lineHeights.base}; /* 0.875rem -> 14px */
      `;
    case 'tall':
      return () => css`
        line-height: ${lineHeights.tall}; /* 1rem -> 16px */
      `;

    default:
      return `line-height: ${lineHeight}`;
  }
};

export const Text = styled.p<TextProps>`
  ${({
    color,
    size,
    textAlign,
    uppercase,
    bold,
    listStyle,
    lineHeight,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    theme,
  }) => css`
    font-weight: ${bold ? 'bold' : '400'};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    text-align: ${textAlign && typeof textAlign === 'object'
      ? textAlign?.default
      : textAlign};
    list-style: ${listStyle};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};

    ${size && typeof size === 'object'
      ? variantsSize(size.default!)
      : variantsSize(size!)};

    ${variantsColor(color!)};
    ${variantsLineHeight(lineHeight!)};

    @media (max-width: ${theme.breakpoints.md}) {
      // 768px
      ${size && typeof size === 'object' && variantsSize(size.md!)};
      text-align: ${textAlign &&
      typeof textAlign === 'object' &&
      textAlign?.md};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      // 640px
      ${size && typeof size === 'object' && variantsSize(size.sm!)};
      text-align: ${textAlign &&
      typeof textAlign === 'object' &&
      textAlign?.sm};
    }
  `}
`;
