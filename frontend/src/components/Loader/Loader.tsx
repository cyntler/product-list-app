import { InfinitySpin } from 'react-loader-spinner';

import { Container } from './Loader.style';

export const Loader = () => (
  <Container>
    <InfinitySpin color="red" />
  </Container>
);
