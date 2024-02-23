import { FC } from 'react';
import { Map } from 'Components/Map';
import { PlatformContainer } from './Platform.styles';
import { Sidebar } from 'Components/Sidebar';

type HeaderProps = {
  mobile: boolean;
};

export const Platform: FC<HeaderProps> = ({ mobile }) => {
  return (
    <PlatformContainer $mobile={mobile}>
      <Sidebar mobile={mobile} />
      <Map />
    </PlatformContainer>
  );
};
