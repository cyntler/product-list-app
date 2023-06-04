import styled from 'styled-components';
import Modal from 'rsuite/Modal';

import { Button } from '../Button';

export const Heading = styled.h3`
  margin: 0;
`;

export const ConfirmButton = styled(Button)`
  margin-right: 10px;
`;

export const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
