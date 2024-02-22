import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  display: flex;

  height: calc(-3.3rem + 100vh);
  width: 100%;

  position: relative;
  overflow: hidden;

  .mapboxgl-canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
  }

  .mapboxgl-control-container {
    height: 100%;
    width: 100%;
  }

  .mapbox-improve-map {
    display: none;
  }
`;
