import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, Text } from './ScreenHeading.style';
import { ActionButton } from '../ActionButton';

interface ScreenHeadingProps {
  backBtn?: boolean;
}

export const ScreenHeading: FC<PropsWithChildren<ScreenHeadingProps>> = ({
  children,
  backBtn,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ActionButton $hidden={!backBtn} onClick={() => navigate('/')}>
        <FaArrowLeft />
      </ActionButton>
      <Text>{children}</Text>
    </Container>
  );
};
