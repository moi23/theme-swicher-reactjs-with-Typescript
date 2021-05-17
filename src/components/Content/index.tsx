import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Iprops {
  toggleTheme(): void;
}

const Content: React.FC<Iprops> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={100}
        handleDiameter={50}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Content;
