import { FC, useEffect, useRef } from 'react';

import config from 'config/client.json';

import 'mapbox-gl/dist/mapbox-gl.css';
import {
  MapRef,
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

const mapboxToken = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_MAPBOX_TOKEN :
  config.mapboxAccessToken;

export const Map: FC<MapProps> = () => {
  const mapRef = useRef<MapRef | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current.getMap()
    map.touchZoomRotate.disableRotation()

  }, [mapRef.current])

  return (
    <StyledMapWrapper
    >
      <MapboxMap
        ref={mapRef}
        reuseMaps={true}
        mapStyle={'mapbox://styles/willhodge/clswwr8jz002k01oi0sj758jr'}
        style={containerStyle}
        initialViewState={initialViewState}
        preserveDrawingBuffer={true}
        mapboxAccessToken={mapboxToken}
        pitchWithRotate={false}
        dragRotate={false}
        touchZoomRotate={true}
        maxPitch={0}
        touchPitch={false}
        boxZoom={false} // Shift and draw box to zoom to that box
        customAttribution='Will Hodge'
      />
    </StyledMapWrapper>
  );
};
