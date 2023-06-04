import styled from 'styled-components';
import { styleFor } from '../../utils/mediaQueries';

export const Container = styled.main`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${styleFor('desktop')} {
    padding: 4rem;
  }
`;
