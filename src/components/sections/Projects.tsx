import React from 'react';
import styled from '@emotion/styled';

const ProjectSection = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;
  }
`;

export const Projects = () => {
  return (
    <ProjectSection id='projects'>
      <Container>
        <h2>Projects</h2>
        <ProjectGrid>
          {/* 프로젝트 카드들을 여기에 추가 */}
          <ProjectCard>
            <img src='/project-image.jpg' alt='Project' />
            <div className='content'>
              <h3>프로젝트 제목</h3>
              <p>프로젝트 설명...</p>
            </div>
          </ProjectCard>
          {/* 더 많은 프로젝트 카드들... */}
        </ProjectGrid>
      </Container>
    </ProjectSection>
  );
};
