
import React, {FC} from 'react';
import styles from './Modal.module.scss';
import cn from 'clsx';

interface Props {
    isShow: {
        show: boolean,
        animate: boolean
    },
    type?: 'compact',
    side?: 'right',
    content: React.ReactElement,
    footer: React.ReactElement,
    classNames?: string,
    setClose: () => void
}

const closeModalAction = (setModal: any) => {
    setModal({ show: true, animate: false });

    setTimeout(() => {
        setModal({ show: false, animate: false });
    }, 310);
}

const Modal: FC<Props> = ({ isShow, type, content, footer, classNames, setClose }) => {
    return (
        <div className={cn(styles.modal, isShow.show && styles[`is-active`], isShow.animate && styles[`is-animate`], styles[`modal-${type}`], classNames)}>
            <div className={styles.modal__overlay} data-dismiss="modal" onClick={setClose}></div>
            <div className={styles.modal__wrap}>
                <div className={styles.modal__window}>
                    <div className={styles.modal__content}>
                        <div className={styles.modal__body} data-modal={'modal-body'}>
                            <div className={styles.modal__container}>
                                { content }
                            </div>
                        </div>
                        {footer &&
                            <div className={styles.modal__footer} data-modal={'modal-footer'}>
                                <div className={styles.modal__container}>
                                    { footer }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    closeModalAction
}

export default Modal;
