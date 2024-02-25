import styled from 'styled-components';
import { Link } from 'react-router-dom';

type HeaderContainerProps = {
  $mobile: boolean;
}
export const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  height: 3.3rem;

  gap: 0.5rem;

  align-items: center;
  justify-content: center;

  background-color: var(--color-platinumBlue);

  box-sizing: border-box;
  border-bottom: 2px solid var(--color-navy);
`;

export const Title = styled.h1`
  width: fit-content;

  padding: 0.2rem;

  font-weight: 300;

  color: var(--color-white);

`;

export const StyledLink = styled(Link)`
  color: var(--color-lightSilver);
  text-decoration: none;

  :hover {
    color: var(--color-white);
    text-shadow: 1px 1px 10px #999;
  }

`;
