import styled, { css } from 'styled-components';
import { shade, lighten, transparentize } from 'polished';
import { ButtonProps, ButtonSize, ISize } from './index';

const variantSize = (size: ButtonSize | ISize) => {
  switch (size) {
    case 'xs':
      return () => css`
        ${({ theme }) => css`
          height: ${theme.space[8]}; // 32px
          font-size: ${theme.fontSizes.xs};
          border-radius: ${theme.radii.xs};
          width: 100%;

          svg {
            width: ${theme.space[4]};
          }
        `}
      `;
    case 'sm':
      return () => css`
        ${({ theme }) => css`
          height: ${theme.space[8]}; // 32px
          font-size: ${theme.fontSizes.xs};
          border-radius: ${theme.radii.xs};

          svg {
            width: ${theme.space[4]};
          }
        `}
      `;
    case 'md':
      return () => css`
        ${({ theme }) => css`
          height: ${theme.space[10]}; // 40px
          font-size: ${theme.fontSizes.sm};

          svg {
            width: ${theme.space[5]};
          }
        `}
      `;
    case 'lg':
      return () => css`
        ${({ theme }) => css`
          height: ${theme.space[12]}; // 48px
          font-size: ${theme.fontSizes.md};

          svg {
            width: ${theme.space[6]};
          }
        `}
      `;

    default:
      return () => css`
        ${({ theme }) => css`
          height: ${theme.space[10]}; // 40px
          font-size: ${theme.fontSizes.sm};

          svg {
            width: ${theme.space[5]};
          }
        `}
      `;
  }
};

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

export const ButtonLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonLoading = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    stroke: currentColor;
    animation: rotate 2.5s linear infinite;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({
    variant,
    size,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    disabled,
    theme,
    isLoading,
    fullSize,
    as,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px ${theme.space[4]};
    font-weight: ${theme.fontWeights.medium};
    text-align: center;
    transition: background 0.3s;
    border: none;
    border-radius: ${theme.radii.sm};
    text-decoration: none;
    width: fit-content;
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    cursor: pointer;

    ${buttonTheme[variant!]()}

    ${variantSize(size!)};

    svg {
      fill: currentColor;
    }

    ${!!fullSize &&
    css`
      width: 100%;
    `}

    ${isLoading &&
    css`
      ${ButtonLabel} {
        visibility: hidden;
      }
    `}

    ${!!disabled &&
    css`
      cursor: not-allowed;
      opacity: 50%;

      span {
        pointer-events: none;
      }
    `}

    ${!!disabled &&
    as &&
    css`
      pointer-events: none;
    `}

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
