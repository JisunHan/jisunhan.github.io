import styled from '@emotion/styled';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <div>
        <h1>안녕하세요</h1>
        <p>프론트엔드 개발자입니다.</p>
      </div>
    </HeroSection>
  );
};
