import { useCallback } from 'react';
import { Message, useToaster } from 'rsuite';
import { TypeAttributes } from 'rsuite/esm/@types/common';

export const useToast = () => {
  const toaster = useToaster();

  const getMessage = useCallback(
    (message: string, type: TypeAttributes.Status) => (
      <Message showIcon type={type} closable>
        {message}
      </Message>
    ),
    [],
  );

  const showToast = useCallback(
    (message: string, type: TypeAttributes.Status = 'info') => {
      toaster.push(getMessage(message, type), {
        placement: 'topCenter',
        duration: 5000,
      });
    },
    [getMessage, toaster],
  );

  return {
    showToast,
  };
};
