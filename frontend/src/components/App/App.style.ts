import styled from 'styled-components';
import { styleFor } from '../../utils/mediaQueries';

export const Container = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  ${styleFor('desktop')} {
    padding: 4rem;
  }
`;
