import {gameEvolve, gameToggleEvolve} from '../redux/gameSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const useStartEvolve = (ref: any) => {
    const {timeSpeed} = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();

    const fn = () => {
        dispatch(gameToggleEvolve(true));
        dispatch(gameEvolve());
        ref.current = setTimeout(() => fn(), timeSpeed);
    };

    return fn;
};

export default useStartEvolve;
