import { FC } from 'react';

import {
  Map as MapboxMap,
} from 'react-map-gl';

import { MapProps } from './Map.types';
import { StyledMapWrapper } from './Map.styles';

const containerStyle = {
  height: '100%',
  width: '100%',
};

const initialViewState = {
  longitude: 144.9631,
  latitude: -37.8136,
  zoom: 12,
}

const mapboxToken = process.env.MAPBOX_TOKEN;

console.log(process.env)

export const Map: FC<MapProps> = () => {

  return (
    <StyledMapWrapper
    >
      <MapboxMap
        reuseMaps={true}
        mapStyle={'mapbox://styles/willhodge/clswwr8jz002k01oi0sj758jr'}
        style={containerStyle}
        initialViewState={initialViewState}
        preserveDrawingBuffer={true}
        mapboxAccessToken={mapboxToken}
        pitchWithRotate={false}
        dragRotate={false}
        touchZoomRotate={false}
        maxPitch={0}
        touchPitch={false}
        boxZoom={false} // Shift and draw box to zoom to that box
        customAttribution='Will Hodge'
      />
    </StyledMapWrapper>
  );
};
