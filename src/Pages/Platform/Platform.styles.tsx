import styled from 'styled-components';

type PlatformContainerProps = {
  $mobile: boolean;
};
export const PlatformContainer = styled.div<PlatformContainerProps>`
  display: flex;
  flex-direction: column;
  height: calc(-3.3rem + 100vh);
  position: relative;

  background-color: var(--color-white);
`;
