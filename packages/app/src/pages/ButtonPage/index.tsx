import { Button } from '@quimera-ui/react';
import { useTheme } from '@quimera-ui/theme';
import { Link } from 'react-router-dom';

export function ButtonPage() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Button my="1rem" size="lg" variant="outline" isLoading asChild>
        <Link to="/select">Link Router</Link>
      </Button>

      <Button my="1rem" size="lg" fullSize variant="outline" isLoading asChild>
        <Link to="/select">fullSize</Link>
      </Button>

      <Button my="1rem" size="lg" variant="outline" disabled isLoading asChild>
        <Link to="/select">Link Router</Link>
      </Button>

      <Button size="lg" variant="outline" disabled isLoading asChild>
        <a href="/contact">a Link</a>
      </Button>

      <Button
        size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}
        variant="approve"
      >
        Click Querie
      </Button>

      <Button size="sm">Click</Button>

      <Button>Click</Button>

      <Button size="lg">Click</Button>

      <Button variant="outline" onClick={toggleTheme}>
        Click
      </Button>
    </>
  );
}
