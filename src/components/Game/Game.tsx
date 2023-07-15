import {FC} from "react";
import styles from './Game.module.scss';
import Frame from "../Frame/Frame";
import Interface from "../Interface/Interface";

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    return (
        <div className={styles['game']}>
            <Frame />
            <Interface />
        </div>
    )
}

export default Game;
