import { ReactNode } from 'react';
import NavLink from './NavLink';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title='Bem vindx!' path='/'></NavLink>
      </ul>
    </Container>
  );
};

export default Header;
