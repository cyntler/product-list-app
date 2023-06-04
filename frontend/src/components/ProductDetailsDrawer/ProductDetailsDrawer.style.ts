import styled from 'styled-components';
import Drawer from 'rsuite/Drawer';

export const StyledDrawer = styled(Drawer)`
  max-width: 100vw;
`;

export const Header = styled(Drawer.Header)`
  height: 76px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  position: relative;
  top: 1px;
`;

export const RowName = styled.h4`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
`;

export const RowValue = styled.p`
  margin: 0 0 30px 0;
  font-weight: bold;
  white-space: pre-wrap;
`;
