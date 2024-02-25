import { FC } from 'react';
import { HeaderContainer, Title, StyledLink, Navlinks } from './Header.styles';

type HeaderProps = {
  mobile: boolean;
};

export const Header: FC<HeaderProps> = ({ mobile }) => (
  <HeaderContainer $mobile={mobile}>
    <StyledLink to={'/'}><Title>polymap</Title></StyledLink>
    <Navlinks>
      <StyledLink to={'/about'}><span>about</span></StyledLink>
    </Navlinks>
  </HeaderContainer>
);
