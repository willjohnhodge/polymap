import { breakpoints } from 'Constants';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 1rem;

  margin-left: 60px;

  @media screen and (max-width: ${breakpoints.sm}px) {
    margin-left: 10px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 800px;


  .separated-div {
    padding-top: 30px;
  }
`;
