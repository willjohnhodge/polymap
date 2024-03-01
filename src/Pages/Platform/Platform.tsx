import { FC, useEffect, useState } from 'react';
import { Map } from 'Components/Map';
import { PlatformContainer } from './Platform.styles';
import { Sidebar } from 'Components/Sidebar';

import {
  FeatureCollection,
  Geometry,
  GeometryCollection,
  Properties,
} from '@turf/turf';

type HeaderProps = {
  mobile: boolean;
};
export const Platform: FC<HeaderProps> = ({ mobile }) => {
  const [features, setFeatures] = useState<FeatureCollection<Geometry | GeometryCollection, Properties>>({ type: 'FeatureCollection', features: [] });

  useEffect(() => { console.log('state features:', features) }, [features]);

  return (
    <PlatformContainer $mobile={mobile}>
      <Sidebar mobile={mobile} features={features} />
      <Map features={features} setFeatures={setFeatures} />
    </PlatformContainer>
  );
};
