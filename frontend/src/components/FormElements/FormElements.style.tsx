import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.small`
  display: block;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  width: 100%;
  top: 100%;
  padding-top: 1px;
`;

const commonStyles = css`
  width: 100%;
  height: 45px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border: 2px solid transparent;

  &.error {
    border: 2px solid ${({ theme }) => theme.colors.red};
  }
`;

export const StyledInput = styled.input`
  ${commonStyles}
`;

export const StyledSelect = styled.select`
  ${commonStyles}
  appearance: none;
  padding: 0 15px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
`;

export const StyledTextarea = styled.textarea`
  ${commonStyles}
  min-height: 200px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;
