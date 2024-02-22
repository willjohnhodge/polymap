import {
    FeatureCollection,
    Geometry,
    Properties,
} from '@turf/turf';

export type MapProps = {
    geojson?: FeatureCollection<Geometry, Properties>;
};
