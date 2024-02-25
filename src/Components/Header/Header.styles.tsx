import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'Constants';

type HeaderContainerProps = {
  $mobile: boolean;
}
export const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  height: 3.3rem;

  align-items: center;
  justify-content: center;

  background-color: var(--color-fadedNavy);

  box-sizing: border-box;
  border-bottom: 2px solid var(--color-navy);
`;

export const Title = styled.h1`
  width: fit-content;

  margin: 0;

  font-weight: 300;

  color: var(--color-white);

`;

export const Navlinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  position: absolute;

  right: 0;
  padding-right: 25px;

  @media screen and (max-width: ${breakpoints.sm}px) {
    margin-left: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-lightSilver);
  text-decoration: none;

  font-weight: 200;

  :hover {
    color: var(--color-white);
    text-shadow: 0 0 3px #999;
  }

`;
