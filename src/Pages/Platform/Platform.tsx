import { FC } from 'react';
import { Map } from 'Components/Map';
import { PlatformContainer } from './Platform.styles';

export const Platform: FC = () => {
  return (
    <PlatformContainer>
      <p>Hey! This app is under development... by Will</p>
      <Map />
    </PlatformContainer>
  );
};
