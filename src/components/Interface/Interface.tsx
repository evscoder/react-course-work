import React, {FC} from "react";
import Button from "../Button/Button";
import styles from './Interface.module.scss';
interface Props {
    children?: React.ReactNode
}
const GameInterface: FC<Props> = () => {
    return (
        <div className={styles['game-interface']}>
            <Button title={'Make random alive cells'}>Create</Button>
            <Button title={'Start alive cells evolution'}>Evolve</Button>
            <Button title={'Kill all alive cells'}>Reset</Button>
        </div>
    )
}

export default GameInterface;
