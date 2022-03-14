import { ReactNode } from 'react';
import { FooterContainer } from './styles';

interface FooterProps {
  title: string;
  icon: ReactNode;
}

export default function FooterItem({ title, icon }: FooterProps) {
  return (
    <FooterContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </FooterContainer>
  );
}