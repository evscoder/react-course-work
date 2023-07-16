import React, {FC} from "react";
import styles from './Interface.module.scss';
import Button from "../Button/Button";
import RangeInput from "../RangeInput/RangeInput";
import RadioButton from "../RadioButton/RadioButton";
import cn from "clsx";
import {Colors, Types} from "./types";
interface Props {
    children?: React.ReactNode,
    onChangeShape?: React.ChangeEventHandler<HTMLInputElement>,
    onChangeColor?: React.ChangeEventHandler<HTMLInputElement>,
    color?: Colors,
    type?: Types,
}
const GameInterface: FC<Props> = ({onChangeShape, onChangeColor, type, color}) => {
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
                            <RadioButton onChange={onChangeShape} id={'square'} type={'square'} color={color} title={'Squared cells'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} id={'circle'} type={'circle'} color={color} title={'Circular cells'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} id={'triangle'} type={'triangle'} color={color} title={'Triangular cells'} name={'grid_type'} />
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
                    <ul className={cn(styles.giList, styles.giListColors)}>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'purple'} color={'purple'} title={'Purple cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'pink'} color={'pink'} title={'Pink cells'} name={'color_type'}/>
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'blue'} color={'blue'} title={'Blue cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'green'} color={'green'} title={'Green cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'yellow'} color={'yellow'} title={'Yellow cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'white'} color={'white'} title={'White cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton onChange={onChangeShape} type={type} id={'emoji'} color={'emoji'} title={'Type emoji or character for cells'} name={'color_type'} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GameInterface;
