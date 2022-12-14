import styled, { css } from 'styled-components';
import { shade, lighten, transparentize } from 'polished';
import { ButtonComponent, ButtonProps, ButtonSize, ISize } from './ButtonComp';

const buttonTheme = {
  standard: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.blue600};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.blue600)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.blue600)};
    }
  `,

  filled: () => css`
    background: ${({ theme }) => theme.colors.blue600};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.blue600)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.blue600)};
    }
  `,

  outline: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.blue600};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.blue600};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.blue600)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.blue600)};
    }
  `,

  approve: () => css`
    background: ${({ theme }) => theme.colors.green600};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => theme.colors.green700};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => theme.colors.green800};
    }
  `,

  danger: () => css`
    background: ${({ theme }) => theme.colors.red600};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => theme.colors.red700};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => theme.colors.red800};
    }
  `,
};

const variantSize = (size: ButtonSize | ISize) => {
  switch (size) {
    case 'xs':
      return () => css`
        height: 2rem; // 32px
        font-size: 0.75rem;
        border-radius: 4px;
        width: 100%;

        svg {
          width: 1rem;
        }
      `;
    case 'sm':
      return () => css`
        height: 2rem; // 32px
        font-size: 0.75rem; // 12px
        border-radius: 4px;

        svg {
          width: 1rem;
        }
      `;
    case 'md':
      return () => css`
        height: 2.5rem; // 40px
        font-size: 0.875rem; // 14px

        svg {
          width: 1.25rem;
        }
      `;
    case 'lg':
      return () => css`
        height: 3rem; // 48px
        font-size: 1rem; // 16px

        svg {
          width: 1.5rem;
        }
      `;

    default:
      return () => css`
        height: 2.5rem; // 40px
        font-size: 0.875rem;

        svg {
          width: 1.25rem;
        }
      `;
  }
};

export const Button = styled(ButtonComponent)<ButtonProps>`
  ${({
    variant = 'filled',
    size = 'md',
    fullSize = false,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    theme,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 1rem;
    font-weight: 500;
    text-align: center;
    transition: background 0.3s;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    width: ${fullSize ? '100%' : 'fit-content'};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    cursor: pointer;

    ${variantSize(size!)};

    ${buttonTheme[variant!]()}

    svg {
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      fill: currentColor;
      animation: rotate 2.5s linear infinite;
    }

    &[disabled],
    :disabled {
      cursor: not-allowed;
      opacity: 50%;
      pointer-events: none;
    }

    @media (min-width: ${theme.breakpoints['2xl']}) {
      // 1536px
      ${size && typeof size === 'object' && variantSize(size.lg!)};
    }

    @media (max-width: ${theme.breakpoints.md}) {
      // 768px
      ${size && typeof size === 'object' && variantSize(size.md!)};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      // 640px
      ${size && typeof size === 'object' && variantSize(size.sm!)};
    }

    @media (max-width: ${theme.breakpoints.xs}) {
      // 480px
      ${size && typeof size === 'object' && variantSize(size.xs!)};
    }
  `}
`;
