import styled, { css } from 'styled-components';

import { Button } from '../../components/Button';
import { ConfirmationButton } from '../../components/ConfirmationButton';
import { styleFor } from '../../utils/mediaQueries';

const buttonCommonStyles = css`
  opacity: 0.7;
  transition: 0.3s ease opacity;
`;

export const EditButton = styled(Button)`
  ${buttonCommonStyles}
`;

export const DeleteConfirmationButton = styled(ConfirmationButton)`
  margin-left: 10px;
  ${buttonCommonStyles}
`;

export const ItemContainer = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  transition: 0.3s ease background-color;

  ${styleFor('desktop')} {
    padding: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};

    ${DeleteConfirmationButton}, ${EditButton} {
      opacity: 1;
    }
  }
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
  flex: 1;
`;
