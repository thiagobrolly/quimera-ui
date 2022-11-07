import { Text } from '@quimera-ui/react';
import { useTheme } from '@quimera-ui/theme';
import * as S from './styles';

export function TextPage() {
  const { theme } = useTheme();
  return (
    <S.Wrapper>
      <Text color="primary" bold>
        Click on the Vite and React logos to learn more
      </Text>
      <Text
        size={{ sm: 'sm', md: '24px', default: '9xl' }}
        textAlign={{ sm: 'center', md: 'end', default: 'left' }}
        color="#ff0"
      >
        Texto
      </Text>
      <Text size="3xl" color={theme.colors.neutral900}>
        Theme
      </Text>
      <Text size="3xl" color="primary">
        Size
      </Text>
      <Text size="1rem" color="primary" lineHeight="base">
        Texto lineHeight
      </Text>
      <Text size="14px" color="primary">
        Texto
      </Text>
      <Text size="0.875rem" color="primary">
        Texto
      </Text>
      <Text size="12px" color="primary">
        Texto
      </Text>
      <Text size="0.75rem" color="primary">
        Texto
      </Text>
      <Text as="li" listStyle="none" color="primary">
        Texto
      </Text>
      <Text
        as="a"
        color="white"
        bold
        href="https://www.youtube.com/watch?v=KvcJwumVe_g&list=PL0TiIcOKyEAlL7mIvbJ-FICU5EF9yfUh6&index=16"
      >
        Texto
      </Text>
    </S.Wrapper>
  );
}
