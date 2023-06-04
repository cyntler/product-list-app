import { Form } from 'formik';
import styled from 'styled-components';

import { Button } from '../Button';
import { styleFor } from '../../utils/mediaQueries';

export const Container = styled.div`
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${styleFor('tablet')} {
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

export const FormColumn = styled.div<{ $width?: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${styleFor('tablet')} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  label {
    display: block;
    margin: 30px 0 10px;
  }
`;

export const SubmitButton = styled(Button)`
  margin: 20px 0;
  width: auto;
  align-self: center;
  height: 44px;
  padding: 0 50px;
`;
