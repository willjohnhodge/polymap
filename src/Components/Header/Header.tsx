import { FC } from 'react';
import { HeaderContainer, Title } from './Header.styles';

type HeaderProps = {
  mobile: boolean;
};

export const Header: FC<HeaderProps> = ({ mobile }) => {
  return (
    <HeaderContainer $mobile={mobile}>
      <Title>polymap</Title>
    </HeaderContainer>
  );
};
