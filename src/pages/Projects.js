"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const framer_motion_1 = require("framer-motion");
const fa_1 = require("react-icons/fa");
const react_1 = require("react");
const ProjectsContainer = styled_1.default.div `
  min-height: 100vh;
  padding: 120px 0 80px;
`;
const Content = styled_1.default.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;
const Title = (0, styled_1.default)(framer_motion_1.motion.h1) `
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;
const ProjectsGrid = styled_1.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
const ProjectCard = (0, styled_1.default)(framer_motion_1.motion.div) `
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
const ProjectBackgroundImage = styled_1.default.img `
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
const ProjectImage = styled_1.default.div `
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
const ProjectIcon = styled_1.default.div `
  font-size: 3rem;
  color: white;
  z-index: 2;
`;
const ProjectContent = styled_1.default.div `
  padding: ${({ theme }) => theme.spacing.xl};
`;
const ProjectTitle = styled_1.default.h3 `
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;
const ProjectPeriod = styled_1.default.p `
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const ProjectInfo = styled_1.default.div `
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;
const ProjectInfoItem = styled_1.default.div `
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  background: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-weight: 500;
`;
const ProjectDescription = styled_1.default.p `
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
const ProjectDetails = styled_1.default.p `
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
const TechStack = styled_1.default.div `
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
const TechTag = styled_1.default.span `
  background: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 500;
`;
const ProjectFeatures = styled_1.default.ul `
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
const FeatureItem = styled_1.default.li `
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
    const [imageErrors, setImageErrors] = (0, react_1.useState)({});
    const handleImageError = (projectId) => {
        setImageErrors((prev) => (Object.assign(Object.assign({}, prev), { [projectId]: true })));
    };
    const handleProjectClick = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };
    const projects = [
        {
            id: 1,
            title: '👁️ 아큐브 스마트 피팅',
            period: '2025.02 ~ 2025.06',
            personnel: 'FE 3명 / BE 2명',
            contribution: '기여도 60%',
            description: 'AI 기반 설문 페이지를 구성하고, 사용자가 입력한 문진 데이터와 굴절검사 결과를 분석해 렌즈를 추천하는 UI 흐름과 상태 관리를 구현했습니다.',
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaEye, {}),
            image: '/images/smart-fitting.png',
            bgColor: '#2563eb',
            techStack: ['React', 'TypeScript', 'Zustand', 'Tanstack Query', 'Emotion'],
            features: [
                'AI 기반 설문 페이지 구성 및 UI 흐름 구현',
                '문진 데이터와 굴절검사 결과 분석 시스템',
                '렌즈 추천 알고리즘 연동',
                '상태 관리 및 컴포넌트 구조 설계',
            ],
            details: 'React, TypeScript, Zustand, Tanstack Query 기반으로 개발되었으며, emotion을 활용한 스타일 관리로 유지보수성을 확보했습니다. 설문 분기 로직 정의가 미흡하여 QA 단계에서 오류가 다수 발생했고, 기획자와의 반복 회의를 통해 사용자 여정을 재설계했습니다. 상태관리 구조도 재정비하여 흐름 오류를 개선했습니다. 직관적인 UI와 컴포넌트 단위 상태 관리를 통해 유지보수가 쉬운 구조를 만들었지만, 결과 데이터의 복잡한 비즈니스 로직을 충분히 파악하지 못해 백엔드와의 협업이 다소 지연되었습니다.',
        },
        {
            id: 2,
            title: '💰 아큐브 ECP 최대혜택가 개발',
            period: '2025.04 ~ 2025.05',
            personnel: 'FE 2명 / BE 1명',
            contribution: '기여도 100%',
            description: '주문 페이지에서 고객이 받을 수 있는 할인, 쿠폰, 포인트 등을 실시간으로 반영해 최종 결제 금액을 직관적으로 보여주는 기능을 구현했습니다.',
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaCalculator, {}),
            image: '/images/mvip.png',
            bgColor: '#7c3aed',
            techStack: ['JSP', 'Ajax', 'Vanilla JS', 'jQuery', 'HTML', 'CSS'],
            features: [
                '실시간 할인/쿠폰/포인트 반영 시스템',
                '최종 결제 금액 계산 로직',
                '기존 jQuery 구조를 바닐라 JS로 리팩토링',
                '모듈화를 통한 재사용성 향상',
            ],
            details: '기존 jQuery 구조를 바닐라 JS 기반 모듈로 리팩토링하여 코드의 재사용성과 가독성을 높였습니다. 복잡한 할인 적용 우선순위 로직을 명확히 정의하는 데 시간이 소요되었습니다. 고객이 즉시 가격 변화를 인식할 수 있어 이탈률 감소와 CS 문의 감소에 기여했지만, QA 시 수기 계산으로 검증해야 했으며, 테스트 자동화에 대한 설계가 미흡했습니다.',
        },
        {
            id: 3,
            title: '📍 아큐브 앱 위치 기반 서비스',
            period: '2025.01 ~ 2025.05',
            personnel: 'FE 2명 / BE 1명',
            contribution: '기여도 100%',
            description: '사용자의 현재 위치를 기반으로 가까운 안경원을 탐색할 수 있는 기능을 개발했습니다. Naver Map API를 연동하고, 지도 마커와 리스트 간 인터랙션을 통해 사용자의 탐색 편의성을 높였습니다.',
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaMapMarkerAlt, {}),
            image: '/images/store-finder.png',
            bgColor: '#f59e0b',
            techStack: ['JSP', 'Vanilla JS', 'Naver Map SDK'],
            features: [
                '현재 위치 기반 안경원 탐색 기능',
                'Naver Map API 연동',
                '지도 마커와 리스트 간 인터랙션',
                'WebView 환경 대응',
            ],
            details: 'Naver Map API를 연동하고, 지도 마커와 리스트 간 인터랙션을 통해 사용자의 탐색 편의성을 높였습니다. WebView에서 geolocation 기능이 작동하지 않는 문제가 발생했으며, 앱 개발자와 협업하여 네이티브 브릿지를 통한 통신 구조로 해결했습니다. UX 개선에 중점을 둔 인터랙션 설계로 사용자 만족도를 높였지만, 다양한 디바이스 테스트가 부족해 QA 시간이 다소 길어졌습니다.',
        },
        {
            id: 4,
            title: '🎁 아큐브 웹/앱 박세리 프로모션',
            period: '2024.07 ~ 2024.08',
            personnel: 'FE 1명 / BE 1명',
            contribution: '기여도 100%',
            description: '멀티포컬 렌즈 구매자를 대상으로 한 경품 응모 이벤트 기능을 개발했습니다. 주소 입력 및 쿠폰 연동 기능을 바닐라 JS로 모듈화하여 이벤트 페이지에 재활용 가능한 구조로 구현했습니다.',
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaGift, {}),
            image: '/images/promotion-event.png',
            bgColor: '#10b981',
            techStack: ['JSP', 'Vanilla JS', 'HTML', 'CSS'],
            features: [
                '멀티포컬 렌즈 구매자 대상 경품 응모 기능',
                '주소 입력 및 쿠폰 연동 기능 모듈화',
                '재활용 가능한 이벤트 페이지 구조',
                '크로스 디바이스 대응',
            ],
            details: '주소 입력 및 쿠폰 연동 기능을 바닐라 JS로 모듈화하여 이벤트 페이지에 재활용 가능한 구조로 구현했습니다. 모바일 환경에서 키보드 겹침 문제로 UX 이슈가 발생했고, 포커스 이동 및 스크롤 보정 처리를 통해 개선했습니다. 모듈화를 고려한 구조로 향후 이벤트에서도 재활용 가능한 기반을 마련했지만, 디자인과 실제 디바이스 환경 간의 불일치 이슈로 QA 대응에 시간이 소요되었습니다.',
            link: 'https://web.acuvue.co.kr/event/maxMF24',
        },
        {
            id: 5,
            title: '🎖️ 아큐브 앱 MVIP 전용 혜택 기능',
            period: '2024.08 ~ 2024.09',
            personnel: 'FE 3명 / BE 3명',
            contribution: '기여도 60%',
            description: 'MVIP 등급 달성 고객에게 전용 혜택 영역을 노출하고, 쿠폰 및 경품 응모 기능을 제공하는 전용 기능을 구현했습니다.',
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaCalculator, {}),
            image: '/images/mvip.png',
            bgColor: '#7c3aed',
            techStack: ['JSP', 'Vanilla JS', 'jQuery'],
            features: [
                'MVIP 등급별 전용 혜택 영역 노출',
                '쿠폰 및 경품 응모 기능',
                '재사용 가능한 등급별 컴포넌트 구조',
                '감성적 만족감을 위한 전용 UI',
            ],
            details: '등급 조건별 컴포넌트를 재사용 가능한 구조로 개발하고, 감성적 만족감을 줄 수 있는 전용 UI를 구성했습니다. 초기에 노출 조건이 복잡해 유지보수가 어려웠고, 이를 단순화한 후 공통 컴포넌트화하여 구조를 정리했습니다. 등급별 차별화된 UI/UX로 고객 만족도 및 앱 활성화 지표 향상에 기여했지만, 초기 구조 설계가 부족해 중복 코드가 발생했고, 리팩토링이 늦어졌습니다.',
        },
    ];
    return ((0, jsx_runtime_1.jsx)(ProjectsContainer, { children: (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)(Title, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: "\uD504\uB85C\uC81D\uD2B8" }), (0, jsx_runtime_1.jsx)(ProjectsGrid, { children: projects.map((project, index) => ((0, jsx_runtime_1.jsxs)(ProjectCard, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: index * 0.2 }, onClick: () => handleProjectClick(project.link), children: [(0, jsx_runtime_1.jsx)(ProjectImage, { "$bgColor": project.bgColor, children: project.image && !imageErrors[project.id] ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ProjectBackgroundImage, { src: project.image, alt: project.title, onError: () => handleImageError(project.id) }) })) : ((0, jsx_runtime_1.jsx)(ProjectIcon, { children: project.icon })) }), (0, jsx_runtime_1.jsxs)(ProjectContent, { children: [(0, jsx_runtime_1.jsx)(ProjectTitle, { children: project.title }), (0, jsx_runtime_1.jsx)(ProjectPeriod, { children: project.period }), (0, jsx_runtime_1.jsxs)(ProjectInfo, { children: [(0, jsx_runtime_1.jsx)(ProjectInfoItem, { children: project.personnel }), (0, jsx_runtime_1.jsx)(ProjectInfoItem, { children: project.contribution })] }), (0, jsx_runtime_1.jsx)(TechStack, { children: project.techStack.map((tech) => ((0, jsx_runtime_1.jsx)(TechTag, { children: tech }, tech))) }), (0, jsx_runtime_1.jsx)(ProjectDescription, { children: project.description }), (0, jsx_runtime_1.jsx)(ProjectFeatures, { children: project.features.map((feature, featureIndex) => ((0, jsx_runtime_1.jsx)(FeatureItem, { children: feature }, featureIndex))) }), (0, jsx_runtime_1.jsx)(ProjectDetails, { children: (0, jsx_runtime_1.jsx)("p", { children: project.details }) })] })] }, project.id))) })] }) }));
};
exports.default = Projects;
