import { FC } from 'react';
import { Map } from 'Components/Map';
import { ContentContainer, PlatformContainer } from './Platform.styles';

export const Platform: FC = () => {
  return (
    <PlatformContainer>
      <ContentContainer>Hey! This app is under development... by Will</ContentContainer>
      <Map />
    </PlatformContainer>
  );
};
