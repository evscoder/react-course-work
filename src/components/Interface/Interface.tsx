import React, {FC} from "react";
import styles from './Interface.module.scss';
import Button from "../Button/Button";
import RangeInput from "../RangeInput/RangeInput";
import RadioButton from "../RadioButton/RadioButton";
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
                <div className={styles.giCol}>
                    <ul className={styles.giList}>
                        <li className={styles.giListItem}>
                            <RadioButton id={'square'} title={'Squared cells'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'circle'} type={'circle'} title={'Circular cells'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'triangle'} type={'triangle'} title={'Triangular cells'} name={'grid_type'} />
                        </li>
                    </ul>
                </div>
                <div className={styles.giCol}>
                    <Button title={'Toggle grid'}>Grid off</Button>
                </div>
                <div className={styles.giCol}>
                    <Button title={'Toggle mode'}>Light mode</Button>
                </div>
                <div className={styles.giCol}>
                    <ul className={styles.giList}>
                        <li className={styles.giListItem}>
                            <RadioButton id={'purple'} color={'purple'} title={'Purple cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'pink'} color={'pink'} title={'Pink cells'} name={'color_type'}/>
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'blue'} color={'blue'} title={'Blue cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'green'} color={'green'} title={'Green cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'yellow'} color={'yellow'} title={'Yellow cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'white'} color={'white'} title={'White cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'emoji'} color={'emoji'} title={'Type emoji or character for cells'} name={'color_type'} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GameInterface;
