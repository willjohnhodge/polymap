import { FC } from 'react';
import { Map } from 'Components/Map';
import { PlatformContainer } from './Platform.styles';
import { Sidebar } from 'Components/Sidebar';

export const Platform: FC = () => {
  return (
    <PlatformContainer>
      <Sidebar />
      <Map />
    </PlatformContainer>
  );
};
