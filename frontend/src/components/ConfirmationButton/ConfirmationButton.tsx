import { FC, PropsWithChildren, useState } from 'react';
import Modal from 'rsuite/Modal';

import { Button, ButtonVariant } from '../Button';
import {
  ConfirmButton,
  Heading,
  StyledModalFooter,
} from './ConfirmationButton.style';
import { FaCheck } from 'react-icons/fa';

interface ConfirmationButtonProps {
  title: string;
  message: string;
  className?: string;
  confirmText?: string;
  cancelText?: string;
  btnVariant?: ButtonVariant;
  onConfirm: (close: () => void) => void;
}

export const ConfirmationButton: FC<
  PropsWithChildren<ConfirmationButtonProps>
> = ({
  children,
  title,
  message,
  className,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  btnVariant,
  onConfirm,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        variant={btnVariant}
        onClick={() => setModalOpen(true)}
        className={className}
      >
        {children}
      </Button>
      <Modal open={modalOpen} autoFocus={false} onClose={handleModalClose}>
        <Modal.Header>
          <Heading>{title}</Heading>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <StyledModalFooter>
          <ConfirmButton
            variant="secondary"
            onClick={() => onConfirm(handleModalClose)}
          >
            <FaCheck /> {confirmText}
          </ConfirmButton>
          <Button onClick={handleModalClose}>{cancelText}</Button>
        </StyledModalFooter>
      </Modal>
    </>
  );
};
