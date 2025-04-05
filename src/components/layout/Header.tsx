import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
    </HeaderContainer>
  );
};
