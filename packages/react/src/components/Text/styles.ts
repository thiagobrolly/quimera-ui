import styled, { css } from 'styled-components';
import { fontSizes, lineHeights } from '@quimera-ui/tokens';
import { TextProps, TextColor, TextSizes, SizeBreak } from '.';

const variantsColor = (color: TextColor) => {
  switch (color) {
    case 'primary':
      return () => css`
        color: ${({ theme }) => theme.colors.primary};
      `;
    case 'white':
      return () => css`
        color: ${({ theme }) => theme.colors.neutral_white};
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

const variantsSize = (size: TextSizes | SizeBreak) => {
  switch (size) {
    case 'xxs':
      return () => css`
        font-size: ${fontSizes.xxs}; /* 0.625rem -> 10px */
        // line-height: ${lineHeights.base}; /* 1rem -> 16px */
      `;
    case 'xs':
      return () => css`
        font-size: ${fontSizes.xs}; /* 0.75rem -> 12px */
        // line-height: 1.6rem; /* 1rem -> 16px */
      `;
    case 'sm':
      return () => css`
        font-size: ${fontSizes.sm}; /* 0.875rem -> 14px */
        // line-height: 2rem; /* 1.25rem -> 20px */
      `;
    case 'md':
      return () => css`
        font-size: ${fontSizes.md}; /* 1rem -> 16px */
        // line-height: 2.4rem; /* 1.5rem -> 24px */
      `;
    case 'lg':
      return () => css`
        font-size: ${fontSizes.lg}; /* 1.125rem -> 18px */
        // line-height: 2.8rem; /* 1.75rem -> 28px */
      `;
    case 'xl':
      return () => css`
        font-size: ${fontSizes.sm}; /* 1.25rem -> 20px */
        // line-height: ${lineHeights.shorter}; /* 1.75rem -> 28px */
      `;
    case '2xl':
      return () => css`
        font-size: ${fontSizes['2xl']}; /* 1.5rem -> 24px */
        // line-height: ${lineHeights.shorter}; /* 2rem -> 32px */
      `;
    case '3xl':
      return () => css`
        font-size: ${fontSizes['3xl']}; /* 1.875rem -> 30px */
        // line-height: 3.6rem; /* 2.25rem -> 36px */
      `;
    case '4xl':
      return () => css`
        font-size: ${fontSizes['4xl']}; /* 2.25rem -> 36px */
        // line-height: 4rem; /* 2.5rem -> 40px */
      `;
    case '5xl':
      return () => css`
        font-size: ${fontSizes['5xl']}; /* 3rem -> 48px */
        // line-height: 1;
      `;
    case '6xl':
      return () => css`
        font-size: ${fontSizes['6xl']}; /* 3.75rem -> 60px */
        // line-height: 1;
      `;
    case '7xl':
      return () => css`
        font-size: ${fontSizes['7xl']}; /* 4.5rem -> 72px */
        // line-height: 1;
      `;
    case '8xl':
      return () => css`
        font-size: ${fontSizes['9xl']}; /* 6rem -> 96px */
        // line-height: 1;
      `;
    case '9xl':
      return () => css`
        font-size: ${fontSizes['9xl']}; /* 8rem -> 128px */
        // line-height: 1;
      `;
    default:
      return `font-size: ${size}`;
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
    text-align: ${
      textAlign && typeof textAlign === 'object'
        ? textAlign?.default
        : textAlign
    };
    list-style: ${listStyle};
    line-height: ${lineHeights.shorter};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};

    ${
      size && typeof size === 'object'
        ? variantsSize(size.default!)
        : variantsSize(size!)
    };

    ${variantsColor(color!)};

    @media (max-width: ${theme.breakpoints.md}) {
      // 768px
      ${size && typeof size === 'object' && variantsSize(size.md!)};
      text-align: ${
        textAlign && typeof textAlign === 'object' && textAlign?.md
      };
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      // 640px
      ${size && typeof size === 'object' && variantsSize(size.sm!)};
      text-align: ${
        textAlign && typeof textAlign === 'object' && textAlign?.sm
      };

  `}
`;
