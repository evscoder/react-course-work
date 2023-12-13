import {FC, useRef} from 'react';
import {gameChangeGridSize} from '../../../redux/gameSlice';
import Button from '../../ui/Button/Button';
import {ButtonProps} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import usePauseEvolve from '../../../hooks/usePauseEvolve';
import useStartEvolve from '../../../hooks/useStartEvolve';
import useResetGame from '../../../hooks/useResetGame';
import {RootState} from '../../../redux/store';
import Tooltip from "../../ui/Tooltip/Tooltip";

interface Props extends ButtonProps {
    onCreate: () => void;
    evolveTimeId: any
}

const ButtonSize: FC<Props> = ({title, onCreate, evolveTimeId, children, size, color, ...props}) => {
    const {start, evolve} = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();
    const ref = useRef<HTMLButtonElement>(null);
    const pauseEvolve = usePauseEvolve(evolveTimeId);
    const startEvolve = useStartEvolve(evolveTimeId);
    const onReset = useResetGame(pauseEvolve);

    const onChangeSize = (): void => {
        const button = ref.current as HTMLButtonElement;
        const size = button.dataset.size?.split('_') as string[];

        dispatch(gameChangeGridSize({
            sizeX: +size[0],
            sizeY: +size[1]
        }));

        if (start || evolve) {
            onReset();
        }

        if (start) {
            setTimeout(() => onCreate());
        }

        if (evolve) {
            setTimeout(() => {
                onCreate();
                startEvolve();
            });
        }
    };

    return (
        <Tooltip placement={'top'} content={<>{title}</>}>
            <Button {...props} ref={ref} size={size} color={color} onClick={onChangeSize}>{children}</Button>
        </Tooltip>
    );
};

export default ButtonSize;
