import { Button } from '@quimera-ui/react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <Button asChild>
        <Link to="/">Home</Link>
      </Button>
      <Button asChild>
        <Link to="/text">Text</Link>
      </Button>
      <Button asChild>
        <Link to="/button">Button</Link>
      </Button>
    </S.Wrapper>
  );
};
