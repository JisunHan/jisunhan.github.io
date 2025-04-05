import React from 'react';
import styled from '@emotion/styled';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AboutMe = () => {
  return (
    <AboutSection id='about'>
      <Container>
        <h2>About Me</h2>
        <Grid>
          <Card>
            <h3>Introduction</h3>
            <p>프론트엔드 개발자로서의 소개글...</p>
          </Card>
          <Card>
            <h3>Blog & Github</h3>
            <p>블로그 링크와 깃허브 활동 내역...</p>
          </Card>
          <Card>
            <h3>Contact</h3>
            <p>이메일, 연락처 등 연락 정보...</p>
          </Card>
        </Grid>
      </Container>
    </AboutSection>
  );
};
