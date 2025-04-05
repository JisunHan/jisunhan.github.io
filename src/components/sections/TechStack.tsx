import React from 'react';
import styled from '@emotion/styled';

const TechSection = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TechItem = styled.div`
  text-align: center;
  padding: 1rem;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
`;

export const TechStack = () => {
  return (
    <TechSection id='tech'>
      <Container>
        <h2>Tech Stack</h2>
        <StackGrid>
          {/* 기술 스택 아이템들을 여기에 추가 */}
          <TechItem>
            <img src='/path-to-react-icon.svg' alt='React' />
            <p>React</p>
          </TechItem>
          {/* 더 많은 기술 스택 아이템들... */}
        </StackGrid>
      </Container>
    </TechSection>
  );
};
