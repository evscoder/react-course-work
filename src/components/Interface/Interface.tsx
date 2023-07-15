import React, {FC} from "react";
import styles from './Interface.module.scss';
import Button from "../Button/Button";
import RangeInput from "../RangeInput/RangeInput";
interface Props {
    children?: React.ReactNode
}
const GameInterface: FC<Props> = () => {
    return (
        <div className={styles['game-interface']}>
            <div className={styles.giRow}>
                <div className={styles.giCol}>
                    <Button title={'Make random alive cells'}>Create</Button>
                </div>
                <div className={styles.giCol}>
                    <Button title={'Start alive cells evolution'}>Evolve</Button>
                </div>
                <div className={styles.giCol}>
                    <Button title={'Kill all alive cells'}>Reset</Button>
                </div>
                <div className={styles.giCol}>
                    <RangeInput id={'speedControl'} min={100} max={500} value={'300'} step={1} />
                </div>
            </div>
        </div>
    )
}

export default GameInterface;
