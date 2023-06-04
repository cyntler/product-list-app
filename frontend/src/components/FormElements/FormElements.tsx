import { FC, HTMLAttributes } from 'react';

import {
  Container,
  ErrorMessage,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from './FormElements.style';

interface ControlProps {
  error?: string;
}

export const Input: FC<HTMLAttributes<HTMLInputElement> & ControlProps> = ({
  error,
  ...props
}) => (
  <Container>
    <StyledInput
      {...props}
      className={`${props.className} ${error ? 'error' : ''}`}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);

export const Select: FC<HTMLAttributes<HTMLSelectElement> & ControlProps> = ({
  error,
  ...props
}) => (
  <Container>
    <StyledSelect
      {...props}
      className={`${props.className} ${error ? 'error' : ''}`}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);

export const Textarea: FC<
  HTMLAttributes<HTMLTextAreaElement> & ControlProps
> = ({ error, ...props }) => (
  <Container>
    <StyledTextarea
      {...props}
      className={`${props.className} ${error ? 'error' : ''}`}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);
