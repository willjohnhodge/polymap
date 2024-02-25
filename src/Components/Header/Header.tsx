import { FC } from 'react';
import { HeaderContainer, Title, StyledLink } from './Header.styles';

type HeaderProps = {
  mobile: boolean;
};

export const Header: FC<HeaderProps> = ({ mobile }) => {
  return (
    <HeaderContainer $mobile={mobile}>
      <StyledLink to={'/'}><Title>polymap</Title></StyledLink>
      <StyledLink to={'/about'}><span>about</span></StyledLink>
    </HeaderContainer>
  );
};
