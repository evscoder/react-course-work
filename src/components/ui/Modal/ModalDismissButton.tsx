import {FC} from 'react';
import {ButtonProps} from '../../../types/types';
import Button from '../Button/Button';

type Props = {
    closeModal: () => void;
}

const ModalDismissButton: FC<ButtonProps & Props> = ({ children, closeModal, ...props }) => {
    return (
        <Button {...props} onClick={closeModal}>
            {children}
        </Button>
    );
};

export default ModalDismissButton;
