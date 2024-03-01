import * as React from 'react';
import center from '@turf/center';

type ControlPanelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  polygons: any;
};

function ControlPanel({ polygons }: ControlPanelProps) {
  let polygonCenterPoint: number[] = [];
  for (const polygon of polygons) {
    const centerPoint = center(polygon);
    polygonCenterPoint = centerPoint?.geometry?.coordinates;
  }

  return (
    <div
      className="control-panel"
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '20px',
      }}
    >
      {polygonCenterPoint.length > 0 && (
        <p>coordinates: {`${polygonCenterPoint}`}</p>
      )}
    </div>
  );
}

export default React.memo(ControlPanel);
