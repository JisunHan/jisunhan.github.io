import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaGit, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';
import { BiStore } from 'react-icons/bi';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray.dark};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TechCard = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const TechName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const TechDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: 1.5;
`;

const EducationGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const EducationCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const EducationTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const EducationPeriod = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const EducationDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

const About = () => {
  const techStack = [
    {
      icon: <FaReact />,
      name: 'React',
      description: '컴포넌트 기반 UI 라이브러리',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
      description: '타입 안정성을 제공하는 JavaScript 확장',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      description: '웹 개발의 핵심 프로그래밍 언어',
    },
    {
      icon: <BiStore />,
      name: 'Zustand',
      description: '간단하고 빠른 상태 관리 라이브러리',
    },
    {
      icon: <FaPalette />,
      name: 'Emotion',
      description: 'CSS-in-JS 스타일링 라이브러리',
    },
    {
      icon: <SiVite />,
      name: 'Vite',
      description: '빠른 빌드 도구 및 개발 서버',
    },
    {
      icon: <FaGit />,
      name: 'Git',
      description: '버전 관리 시스템',
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      description: '웹 페이지 구조 마크업',
    },
  ];

  const education = [
    {
      title: '한국예술종합학교 예술경영과',
      period: '2009.03 ~ 2015.08',
      description:
        '예술과 경영을 융합한 학문적 배경으로 창의적 사고와 비즈니스 마인드를 기를 수 있었습니다.',
    },
    {
      title: '위코드 부트캠프 48기',
      period: '2023.07 ~ 2023.10',
      description:
        'React, Node.js를 집중적으로 학습하며 애자일 스크럼 방법론을 적용하여 프로젝트를 진행했습니다.',
    },
    {
      title: '더조은컴퓨터아카데미',
      period: '2020.02 ~ 2020.07',
      description: '웹 디자인과 퍼블리싱의 기초를 다지며 UI/UX에 대한 이해를 높였습니다.',
    },
  ];

  return (
    <AboutContainer>
      <Content>
        <Section>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </Title>
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            레거시와 React 환경을 모두 경험한 사용자 중심 프론트엔드 개발자입니다.
            <br />
            퍼블리셔로 시작해 UI/UX 감각을 쌓고, 이후 프론트엔드 개발자로 전향해 다양한 B2C
            프로젝트를 수행했습니다.
            <br />
            시멘틱 마크업부터 컴포넌트 기반 개발, GA 태깅과 SEO까지 사용자와 비즈니스 모두를 고려한
            개발을 지향합니다.
            <br />
            협업과 소통, 명확한 문서화를 바탕으로 함께 일하고 싶은 개발자가 되는 것을 목표로 합니다.
          </Description>
        </Section>

        <Section>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            🏫 Education
          </Title>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <EducationGrid>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  <EducationCard>
                    <EducationTitle>{edu.title}</EducationTitle>
                    <EducationPeriod>{edu.period}</EducationPeriod>
                    <EducationDescription>{edu.description}</EducationDescription>
                  </EducationCard>
                </motion.div>
              ))}
            </EducationGrid>
          </motion.div>
        </Section>

        <Section>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            기술 스택
          </Title>
          <TechGrid
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <TechCard>
                  <TechIcon>{tech.icon}</TechIcon>
                  <TechName>{tech.name}</TechName>
                  <TechDescription>{tech.description}</TechDescription>
                </TechCard>
              </motion.div>
            ))}
          </TechGrid>
        </Section>
      </Content>
    </AboutContainer>
  );
};

export default About;
