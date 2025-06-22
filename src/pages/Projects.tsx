import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalculator, FaGift, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: 1;
  transition: all 0.3s ease;
`;

const ProjectImage = styled.div<{ $bgColor: string }>`
  height: 200px;
  background: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;

  &:hover ${ProjectBackgroundImage} {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  color: white;
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectPeriod = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 500;
`;

const ProjectFeatures = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const Projects = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const projects = [
    {
      id: 1,
      title: '아큐브 스마트 피팅 프로그램',
      period: '2024.12 ~ 2025.06',
      description:
        'AI 기반 콘택트렌즈 피팅 시스템으로, 소비자 문진 정보와 안경원 검사 데이터를 기반으로 최적 도수를 추천해주는 웹 애플리케이션입니다.',
      icon: <FaEye />,
      image: '/images/smart-fitting.png',
      bgColor: '#2563eb',
      techStack: ['React', 'TypeScript', 'Zustand', 'Tanstack Query', 'Emotion'],
      features: [
        '신규 React 프로젝트 아키텍처 설계 및 컴포넌트 구조 구성',
        'Zustand로 전역 상태 분리 및 관리 효율화',
        'Tanstack Query로 비동기 요청 및 캐싱 구조 정립',
        'Emotion 기반 UI 스타일링으로 일관된 UX 구현',
      ],
    },
    {
      id: 2,
      title: '위치 기반 안경원 탐색 기능',
      period: '2025.02 ~ 2025.05',
      description: '현 위치 기반 주변 안경원 탐색 기능으로, WebView 환경 대응을 포함합니다.',
      icon: <FaMapMarkerAlt />,
      image: '/images/store-finder.png',
      bgColor: '#f59e0b',
      techStack: ['JSP', 'Vanilla JS', 'Naver Map SDK'],
      features: [
        'WebView에서 위치 수신 브릿지 구조 설계',
        '리스트-마커 상호 연동 UX 구현',
        '지도 위치/확대축소 대응 반응형 UI 설계',
      ],
    },
    {
      id: 3,
      title: '아큐브 앱 MVIP 전용 혜택 기능',
      period: '2024.05 ~ 2024.09',
      description: 'MVIP 멤버십 달성 시 경품, 쿠폰, 이벤트 참여 권한을 부여하는 기능 구현.',
      icon: <FaCalculator />,
      image: '/images/mvip.png',
      bgColor: '#7c3aed',
      techStack: ['JSP', 'Vanilla JS', 'jQuery'],
      features: [
        'MVIP 멤버십 등급별 혜택 조건 로직 구현',
        '혜택 노출 조건 및 UI 분기 처리',
        '참여 여부 및 당첨 확인 UX 개선',
        '모듈화 구조 설계로 유지보수성과 퍼포먼스 개선',
      ],
    },
    {
      id: 4,
      title: '박세리 프로모션 추첨 이벤트',
      period: '2024.07 ~ 2024.09',
      description:
        '멀티포컬 구매자 대상 사은품 이벤트 페이지 및 응모/배송지 입력 기능을 구현했습니다.',
      icon: <FaGift />,
      image: '/images/promotion-event.png',
      bgColor: '#10b981',
      techStack: ['JSP', 'Vanilla JS', 'HTML', 'CSS'],
      features: [
        '주소 입력 UI 및 유효성 검증 구현',
        'CSV 출력 기반 관리자 연동 구조 설계',
        '크로스 디바이스 대응 및 재사용 가능한 모듈 구성',
      ],
      link: 'https://web.acuvue.co.kr/event/maxMF24',
    },
  ];

  return (
    <ProjectsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          프로젝트
        </Title>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => handleProjectClick(project.link)}
            >
              <ProjectImage $bgColor={project.bgColor}>
                {project.image && !imageErrors[project.id] ? (
                  <>
                    <ProjectBackgroundImage
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                    />
                  </>
                ) : (
                  <ProjectIcon>{project.icon}</ProjectIcon>
                )}
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectPeriod>{project.period}</ProjectPeriod>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechStack>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectFeatures>
                  {project.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                  ))}
                </ProjectFeatures>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;
