import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Iprops {
  toggleTheme(): void;
}

const Header: React.FC<Iprops> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>HELLO</h1>

      <Switch
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        // offColor="gray"
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
