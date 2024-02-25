import { FC, useCallback, useEffect, useRef, useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import {
  MapRef,
  Map as MapboxMap,
  useControl,
} from 'react-map-gl';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import { MapProps } from './Map.types';
import { StyledMapWrapper } from './Map.styles';

import { containerStyle, initialViewState, mapboxToken } from './Map.constants';

// import ControlPanel from './control-panel';

const DrawControl = () => {
  const draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true
    },
    defaultMode: "draw_polygon"
  });

  useControl<MapboxDraw>(() => draw, {
    position: 'top-left'
  });

  return null;
}

export const Map: FC<MapProps> = () => {
  const [features, setFeatures] = useState<any>({});

  const mapRef = useRef<MapRef | null>(null);

  const onUpdate = useCallback(e => {
    console.log(e)
    const newFeatures = { ...features };
    for (const f of e.features) {
      newFeatures[f.id] = f;
    }

    setFeatures(newFeatures);
  }, [features]);

  mapRef.current && mapRef.current.on('draw.create', onUpdate);

  const onDelete = useCallback(e => {
    console.log(e)
    const newFeatures = { ...features };
    for (const f of e.features) {
      delete newFeatures[f.id];
    }

    setFeatures(newFeatures);
  }, [features]);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log(mapRef)

    const map = mapRef.current.getMap();
    map.touchZoomRotate.disableRotation();
  }, []);

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
      >
        <DrawControl />
        {/* <ControlPanel polygons={Object.values(features)} /> */}
      </MapboxMap>
    </StyledMapWrapper>
  );
};
