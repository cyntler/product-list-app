import styled, { css } from 'styled-components';
import { styleFor } from '../../utils/mediaQueries';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export const Button = styled.button<{ variant?: ButtonVariant }>`
  height: 30px;
  border-radius: 10px;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  ${styleFor('desktop')} {
    height: 36px;
    padding: 0 15px;
  }

  svg {
    margin-right: 8px;
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ variant, theme }) =>
    variant === 'danger' &&
    css`
      background-color: ${theme.colors.red};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.orange};
      color: ${({ theme }) => theme.colors.black};

      svg {
        fill: ${({ theme }) => theme.colors.black};
      }
    `}

  &:disabled {
    opacity: 0.6;
  }
`;
