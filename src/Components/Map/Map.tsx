import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';

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
import { Feature, FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/turf';

// import ControlPanel from './control-panel';

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  drawRef: React.MutableRefObject<any>;

  onCreate?: (evt: { features: FeatureCollection<Geometry | GeometryCollection, Properties> }) => void;
  onUpdate?: (evt: { features: FeatureCollection<Geometry | GeometryCollection, Properties> }) => void;
  onDelete?: (evt: { features: FeatureCollection<Geometry | GeometryCollection, Properties> }) => void;
};

const DrawControl = (props: DrawControlProps) => {
  useControl<MapboxDraw>(
    () => {
      return props.drawRef.current;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO: fix types from example code
    ({ map }: { map: MapRef }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.on('draw.create', props.onCreate);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.on('draw.update', props.onUpdate);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.on('draw.delete', props.onDelete);
    },
    ({ map }: { map: MapRef }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.off('draw.create', props.onCreate);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.off('draw.update', props.onUpdate);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO: fix types from example code
      map.off('draw.delete', props.onDelete);
    }, {
    position: 'top-left'
  });

  return null;
}

interface FeatureProps {
  features: FeatureCollection<Geometry | GeometryCollection, Properties>;
  setFeatures: Dispatch<SetStateAction<FeatureCollection<Geometry | GeometryCollection, Properties>>>;
}
export const Map: FC<MapProps & FeatureProps> = ({ features, setFeatures }) => {

  const mapRef = useRef<MapRef | null>(null);

  const drawRef = useRef(
    new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: "draw_polygon"
    })
  );

  const onCreate = useCallback((e) => {
    console.log('created')
    console.log('features', features)

    let resultFeatures: FeatureCollection = { ...features };

    const drawFeatures: Feature[] = e.features;
    drawFeatures.map((f) => {
      const newFeature = f;

      resultFeatures.features = [...resultFeatures.features, newFeature]
    })

    setFeatures(resultFeatures);
  }, []);

  const onUpdate = useCallback((e) => {
    console.log('updated');
    let resultFeatures: FeatureCollection = { ...features };

    const drawFeatures: Feature[] = e.features;
    drawFeatures.map((f) => {
      const newFeature = f;

      resultFeatures.features = [...resultFeatures.features, newFeature]
    })

    setFeatures(resultFeatures);
  }, []);

  const onDelete = useCallback((e) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO: fix types
    setFeatures((features) => {
      const newFeatures = { ...features };
      for (const f of e.features) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore TODO: fix types
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

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
        <DrawControl
          drawRef={drawRef}
          onCreate={onCreate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        {/* <ControlPanel polygons={Object.values(features)} /> */}
      </MapboxMap>
    </StyledMapWrapper>
  );
};
