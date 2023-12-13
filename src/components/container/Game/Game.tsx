import {FC, useRef, useState} from 'react';
import styles from './Game.module.scss';
import Interface from '../Interface/Interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Frame from '../../layout/Frame/Frame';
import Modal, {closeModalAction} from '../../ui/Modal/Modal';
import ModalDismissButton from '../../ui/Modal/ModalDismissButton';
import Help from '../../layout/Help/Help';
import useGameEvolve from '../../../hooks/useGameTheme';
import useCreate from '../../../hooks/useCreate';

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    const [showModal, setModal] = useState<{show: boolean, animate: boolean}>({show: false, animate: false})
    const { cellsActive, grid, shape, color } = useSelector((state: RootState) => state.gameSlice);
    const gameElement = useRef<HTMLDivElement>(null);
    const frameElement = useRef<HTMLTableElement>(null);

    useGameEvolve();

    const onCreate = useCreate(frameElement);

    const onToggleHelp = (): void => {
        setModal({ show: true, animate: true });
    };

    const onCloseModal = () => {
        closeModalAction(setModal);
    };

    return (
        <div ref={gameElement} data-shape={shape} data-color={color} data-grid={grid ? 'off' : 'on'} data-testid={'container'} className={styles['game']}>
            <Frame ref={frameElement} isElements={cellsActive} />
            <Interface onCreate={onCreate} toggleHelp={onToggleHelp}/>
            <Modal isShow={showModal} classNames={styles.demoPanel} type={'compact'} setClose={onCloseModal}
               content={<Help />}
               footer={
                   <ModalDismissButton color={color} closeModal={onCloseModal}>Закрыть</ModalDismissButton>
               }
            />
        </div>
    );
};

export default Game;
