import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.3rem;

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
