import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaCode, FaChartLine } from 'react-icons/fa';

const CareerContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
`;

const Content = styled.div`
  max-width: 1000px;
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

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  line-height: 1.6;
`;

const CareerTimeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.gray.light};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 15px;
    }
  }
`;

const CareerItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-left: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid white;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 7px;
      width: 14px;
      height: 14px;
    }
  }
`;

const CompanyCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CompanyIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CompanyPeriod = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const CompanyRole = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
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

const ProjectList = styled.ul`
  list-style: none;
`;

const ProjectItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ProjectTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectAchievement = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-style: italic;
`;

const Career = () => {
  const careerData = [
    {
      company: '㈜ 라텔앤드파트너즈',
      period: '2024. 03 ~ 현재',
      role: '아큐브 5개 플랫폼 웹/앱 운영 및 구축',
      techStack: [
        'JavaScript',
        'React',
        'Zustand',
        'Styled-Components',
        'Emotion',
        'JSP',
        'SCSS',
        'Naver Map API',
      ],
      projects: [
        {
          title: 'React 기반 플랫폼 전환 및 성능 개선',
          description:
            'JSP 기반 웹을 React로 마이그레이션, 상태관리를 위해 Context API, Zustand 활용',
          achievement: '컴포넌트 기반 구조로 유지보수성과 재사용성 향상',
        },
        {
          title: '이벤트/혜택 페이지 구현 (Vanilla JS 기반 JSP 환경)',
          description:
            '분기별 쿠폰 이벤트, MVIP 혜택존 등 직접 개발. 사용자 데이터 적재와 마케팅 활용 데이터 수집을 위한 GA, AF 적용',
          achievement: '사용자 참여율 증가 및 VIP 고객 전용 서비스 강화',
        },
        {
          title: '지도 기반 매장 검색 기능 (Naver Map API)',
          description: 'WebView의 navigator.geolocation 이슈를 Native와 브릿지 구조로 해결',
          achievement: '크로스 플랫폼 문제 해결 능력 및 커뮤니케이션 역량 입증',
        },
        {
          title: '카카오 플러스친구 쿠폰 연동 개발',
          description: '카카오 API 연동 자동 쿠폰 발급 로직 구축',
          achievement: '마케팅 채널 확장 및 운영 리소스 절감',
        },
      ],
    },
    {
      company: '㈜엘루오씨앤씨',
      period: '2020. 08 ~ 2023. 06',
      role: '고객사 웹(PC, Mobile) 플랫폼 유지운영 및 구축',
      techStack: ['HTML5', 'CSS3', 'jQuery', 'JavaScript', 'SCSS'],
      projects: [
        {
          title: '다양한 반응형/적응형 웹사이트 운영 및 구축',
          description:
            '브랜드 사이트, 커머스, B2B 서비스까지 20개 이상 프로젝트 수행. 로레알파리, 랑콤, 입생로랑 등 외국계 기업 웹사이트 유지운영 담당',
          achievement:
            'UI/UX 기반의 정적~인터랙티브 웹서비스까지 폭넓은 제작 및 해외 개발자들과 이슈 해결을 위한 소통 경험',
        },
        {
          title: '문서화, 협업 중심 퍼블리싱',
          description:
            '디자이너, 기획자, Java 백엔드 개발자와 유기적 협업. 이슈관리, CI/CD 도구 활용 (Jenkins, Sparrow 등)',
          achievement: '체계적인 협업 프로세스 구축',
        },
        {
          title: '카페 24 – 주문/배송 기능 개발 참여',
          description: '카페24 EC모바일 어드민 기능 개선 및 주문/배송 UI 퍼블리싱',
          achievement: '커머스 플랫폼 개발 경험 확보',
        },
        {
          title: '한국투자증권 M.ZIP - 목돈굴리기 서비스 개발 참여',
          description: '채권형 어음 투자 페이지 설계에 참여하여 사용자 이해도 기반 UI 구현',
          achievement: '금융 서비스 UI/UX 개발 경험',
        },
      ],
    },
  ];

  return (
    <CareerContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Career
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          프론트엔드 개발자로서 다양한 프로젝트를 통해 성장한 경력을 소개합니다.
        </Description>

        <CareerTimeline>
          {careerData.map((career, index) => (
            <CareerItem
              key={career.company}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
            >
              <CompanyCard>
                <CompanyHeader>
                  <CompanyIcon>
                    <FaBuilding />
                  </CompanyIcon>
                  <CompanyInfo>
                    <CompanyName>{career.company}</CompanyName>
                    <CompanyPeriod>
                      <FaCalendarAlt />
                      {career.period}
                    </CompanyPeriod>
                  </CompanyInfo>
                </CompanyHeader>

                <CompanyRole>{career.role}</CompanyRole>

                <TechStack>
                  {career.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectList>
                  {career.projects.map((project, projectIndex) => (
                    <ProjectItem key={projectIndex}>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectAchievement>
                        <FaChartLine style={{ marginRight: '4px' }} />
                        성과: {project.achievement}
                      </ProjectAchievement>
                    </ProjectItem>
                  ))}
                </ProjectList>
              </CompanyCard>
            </CareerItem>
          ))}
        </CareerTimeline>
      </Content>
    </CareerContainer>
  );
};

export default Career;
