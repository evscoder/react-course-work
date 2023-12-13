import {FC, useRef} from 'react';
import styles from './Interface.module.scss';
import cn from 'clsx';
import Button from '../../ui/Button/Button';
import RadioButton from '../../ui/RadioButton/RadioButton';
import {
    gameToggleGrid, gameToggleTheme
} from '../../../redux/gameSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import ButtonSize from '../ButtonSize/ButtonSize';
import usePauseEvolve from '../../../hooks/usePauseEvolve';
import useStartEvolve from '../../../hooks/useStartEvolve';
import useEvolve from '../../../hooks/useEvolve';
import useResetGame from '../../../hooks/useResetGame';
import SpeedInputControl from '../SpeedInputControl/SpeedInputControl';
import Tooltip from "../../ui/Tooltip/Tooltip";

interface Props {
    onCreate: () => void,
    toggleHelp: () => void
}

const GameInterface: FC<Props> = ({onCreate, toggleHelp}) => {
    const {
        evolve,
        theme,
        start,
        shape,
        color,
        activeShape,
        grid
    } = useSelector((state: RootState) => state.gameSlice);
    const evolveTimeId = useRef<any>(null);
    const dispatch = useDispatch();
    const pauseEvolve = usePauseEvolve(evolveTimeId);
    const startEvolve = useStartEvolve(evolveTimeId);
    const onEvolve = useEvolve(pauseEvolve, startEvolve);
    const onReset = useResetGame(pauseEvolve);

    const onToggleTheme = (): void => {
        dispatch(gameToggleTheme(!theme));
    };

    const onChangeGrid = (): void => {
        dispatch(gameToggleGrid());
    };

    return (
        <div className={styles['game-interface']}>
            <div className={styles.giSizes}>
                <div className={styles.giRow}>
                    <div className={styles.giCol}>
                        <ButtonSize id={'1x'} size={'10_20'} title={'Размер поля 10 на 20'} color={color} onCreate={onCreate} evolveTimeId={evolveTimeId}>1x</ButtonSize>
                    </div>
                    <div className={styles.giCol}>
                        <ButtonSize id={'2x'} size={'15_30'} title={'Размер поля 15 на 30'} color={color} onCreate={onCreate} evolveTimeId={evolveTimeId}>2x</ButtonSize>
                    </div>
                    <div className={styles.giCol}>
                        <ButtonSize id={'3x'} size={'30_60'} title={'Размер поля 30 на 60'} color={color} onCreate={onCreate} evolveTimeId={evolveTimeId}>3x</ButtonSize>
                    </div>
                </div>
            </div>
            <div className={styles.giRow}>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Создать клетки</>}>
                        <Button id={'create'} color={color} onClick={onCreate} disabled={evolve}>Create</Button>
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Запустить движение</>}>
                        <Button id={'evolve'} color={color} onClick={onEvolve} disabled={!start && !activeShape}>{evolve ? 'Stop' : 'Evolve'}</Button>
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Очистить поле</>}>
                        <Button id={'reset'} color={color} onClick={onReset} disabled={!start && !activeShape}>Reset</Button>
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Регулировать скорость клеток</>}>
                        <SpeedInputControl id={'speedInput'} evolveTimeId={evolveTimeId} min={50} max={350} step={1} title={''} />
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <ul className={styles.giList}>
                        <li className={styles.giListItem}>
                            <RadioButton id={'square'} type={'square'} color={color} title={'Квадратные клетки'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'circle'} type={'circle'} color={color} title={'Круглые клетки'} name={'grid_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'triangle'} type={'triangle'} color={color} title={'Треугольные клетки'} name={'grid_type'} />
                        </li>
                    </ul>
                </div>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Убрать сетку</>}>
                        <Button id={'btnGrid'} color={color} onClick={onChangeGrid} >Grid {grid ? 'on' : 'off'}</Button>
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Переключить тему</>}>
                        <Button id={'btnMode'} color={color} onClick={onToggleTheme}>{theme ? 'Dark' : 'Light'} mode</Button>
                    </Tooltip>
                </div>
                <div className={styles.giCol}>
                    <ul className={cn(styles.giList, styles.giListColors)}>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'purple'} color={'purple'} title={'Purple cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'pink'} color={'pink'} title={'Pink cells'} name={'color_type'}/>
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'blue'} color={'blue'} title={'Blue cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'green'} color={'green'} title={'Green cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'yellow'} color={'yellow'} title={'Yellow cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton type={shape} id={'white'} color={'white'} title={'White cells'} name={'color_type'} />
                        </li>
                        <li className={styles.giListItem}>
                            <RadioButton id={'emoji'} color={'emoji'} title={'Type emoji or character for cells'} name={'color_type'} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.giRow}>
                <div className={styles.giCol}>
                    <Tooltip placement={'top'} content={<>Легенда</>}>
                        <Button id={'btnHelp'} color={color} onClick={toggleHelp}>Help</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default GameInterface;
