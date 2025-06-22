import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBlog } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ContactCard = styled(motion.div)`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const ContactInfo = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray.dark};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MessageSection = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
`;

const MessageTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const MessageText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 8px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: '이메일',
      info: 'hanccino@gmail.com',
      link: 'mailto:hanccino@gmail.com?subject=포트폴리오 문의&body=안녕하세요, 한지선님의 포트폴리오를 보고 연락드립니다.',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      info: 'github.com/JisunHan',
      link: 'https://github.com/JisunHan',
    },
    {
      icon: <FaBlog />,
      title: 'Blog',
      info: 'velog.io/@hanccino',
      link: 'https://velog.io/@hanccino',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      info: 'linkedin.com/in/jisun-han',
      link: 'https://linkedin.com/in/jisun-han',
    },
  ];

  const handleEmailClick = () => {
    const email = 'hanccino@gmail.com';
    const subject = '포트폴리오 문의';
    const body = '안녕하세요, 한지선님의 포트폴리오를 보고 연락드립니다.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // mailto 링크가 작동하지 않을 경우를 대비한 대체 방법
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // 클립보드에 이메일 주소 복사
      navigator.clipboard.writeText(email);
      alert('이메일 주소가 클립보드에 복사되었습니다: ' + email);
    }
  };

  return (
    <ContactContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          프로젝트 협업이나 궁금한 점이 있으시면 언제든 연락해주세요.
        </Description>

        <ContactGrid>
          {contactInfo.map((contact, index) => (
            <ContactCard
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <ContactIcon>{contact.icon}</ContactIcon>
              <ContactTitle>{contact.title}</ContactTitle>
              {contact.title === '이메일' ? (
                <ContactInfo onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                  {contact.info}
                </ContactInfo>
              ) : (
                <ContactInfo
                  href={contact.link}
                  {...(contact.link.indexOf('http') === 0
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {contact.info}
                </ContactInfo>
              )}
            </ContactCard>
          ))}
        </ContactGrid>

        <MessageSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MessageTitle>함께 일하고 싶으신가요?</MessageTitle>
          <MessageText>
            새로운 도전과 성장을 추구하는 개발자입니다. 흥미로운 프로젝트나 협업 기회가 있다면
            언제든 연락주세요!
          </MessageText>
          <ContactButton onClick={handleEmailClick}>
            <FaEnvelope />
            메일 보내기
          </ContactButton>
        </MessageSection>
      </Content>
    </ContactContainer>
  );
};

export default Contact;
