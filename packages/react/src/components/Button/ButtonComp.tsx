import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Spinner } from 'phosphor-react';
import styled from 'styled-components';

const LabelButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ISize {
  default?: ButtonSize;
  xs?: ButtonSize;
  sm?: ButtonSize;
  md?: ButtonSize;
  lg?: ButtonSize;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'standard' | 'filled' | 'outline' | 'approve' | 'danger';
  size?: ButtonSize | ISize;
  fullSize?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
}

export const ButtonComponent = ({
  asChild,
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component {...props}>
      {isLoading ? (
        <LabelButton>
          {children}
          <Spinner size={32} weight="light" />
        </LabelButton>
      ) : (
        children
      )}
    </Component>
  );
};
