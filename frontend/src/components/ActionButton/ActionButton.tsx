import styled, { css } from 'styled-components';

export const ActionButton = styled.button<{ $hidden?: boolean }>`
  background: ${({ theme }) => theme.colors.orange};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }

  ${({ $hidden }) =>
    $hidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;
