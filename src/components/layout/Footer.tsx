import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};
