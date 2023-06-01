import { RouterProvider } from 'react-router-dom';

import { Container } from './App.style';
import { router } from '../../router';

export const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>
);
