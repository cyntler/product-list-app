import styled from 'styled-components';

export const Subheading = styled.h2`
  padding: 20px 0 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
