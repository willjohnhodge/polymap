import styled, { css } from 'styled-components';
import { Button } from '@mui/material';
import { breakpoints } from 'Constants';

const mobileStyling = css`
  width: 100%;
  border-radius: 0;
  max-height: 50%;
`;

type SideBarContainerProps = {
  $minimised: boolean;
  $mobile: boolean;
}
export const SidebarContainer = styled.div<SideBarContainerProps>`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: 300px;
  height: 300px;

  padding: 0.8rem;
  padding-left: 1rem;

  top: 0;
  right: 0;

  z-index: 1;

  box-sizing: border-box;

  border-left: 1px solid var(--color-lightSilver);
  border-bottom: 1px solid var(--color-lightSilver);

  border-radius:  0 0 0 20px;

  background-color: var(--color-white);

  transition: height 0.2s ease-out;
  
  user-select: none;

  ${({ $mobile }) =>
    $mobile && mobileStyling
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    ${mobileStyling}
  }

  ${({ $minimised }) =>
    $minimised && 'height: 53px; '
  }

`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-top: 10px;
`;

export const CloseButton = styled(Button)`
  width: fit-content;
  min-width: 30px !important;
  min-height: 30px !important;
  height: fit-content;

  color: var(--color-navy) !important;

  border-radius: 100px !important;
  border: 2px solid red;

  padding: 0 !important;
  margin: 0;

  .MuiTouchRipple-root {
    display: none;
  }
`;
