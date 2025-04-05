import React from 'react';
import styled from '@emotion/styled';

const CareerSection = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${(props) => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const TimelineItem = styled.div`
  padding: 20px 40px;
  position: relative;
  width: 50%;

  &:nth-of-type(odd) {
    left: 0;
  }

  &:nth-of-type(even) {
    left: 50%;
  }
`;

export const Career = () => {
  return (
    <CareerSection id='career'>
      <Container>
        <h2>Career</h2>
        <Timeline>
          <TimelineItem>
            <h3>회사명</h3>
            <p>직무: Frontend Developer</p>
            <p>기간: 2023.01 - 현재</p>
            <p>주요 업무 및 성과...</p>
          </TimelineItem>
          {/* 더 많은 경력 아이템들... */}
        </Timeline>
      </Container>
    </CareerSection>
  );
};
