import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === 'secondary' ? props.theme.colors.secondary : props.theme.colors.primary};
  color: white;
`;

export const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
