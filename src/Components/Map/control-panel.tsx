import * as React from 'react';
import area from '@turf/area';

function ControlPanel(props: any) {
  let polygonArea = 0;
  for (const polygon of props.polygons) {
    polygonArea += area(polygon);
  }

  return (
    <div className="control-panel" style={{ zIndex: 1, color: 'black' }}>
      <h3>Draw Polygon</h3>
      {polygonArea > 0 && (
        <p>
          {Math.round(polygonArea * 100) / 100} <br />
          square meters
        </p>
      )}
    </div>
  );
}

export default React.memo(ControlPanel);
