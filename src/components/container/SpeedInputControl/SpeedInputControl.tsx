import {FC, useRef} from 'react';
import RangeInput from '../../ui/RangeInput/RangeInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {RangeInputProps} from '../../../types/types';
import useStartEvolve from '../../../hooks/useStartEvolve';
import {gameToggleSpeed} from '../../../redux/gameSlice';

interface Props extends RangeInputProps {
    evolveTimeId: any,
}

const SpeedInputControl: FC<Props> = ({ evolveTimeId, ...props }) => {
    const {evolve, timeSpeed} = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);
    const startEvolve = useStartEvolve(evolveTimeId);

    const onChangeSpeed = (): void => {
        const range = ref.current as HTMLInputElement;

        dispatch(gameToggleSpeed(+range.value));
        clearTimeout(evolveTimeId.current);

        if (evolve) {
            evolveTimeId.current = setTimeout(() => startEvolve(), timeSpeed);
        }
    };

    return (
        <RangeInput ref={ref} {...props} onChange={onChangeSpeed} />
    );
};

export default SpeedInputControl;
