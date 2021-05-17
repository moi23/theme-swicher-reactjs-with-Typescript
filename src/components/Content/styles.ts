import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  transition: 0.9s background;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;
