import {gameToggleEvolve} from '../redux/gameSlice';
import {useDispatch} from 'react-redux';

const usePauseEvolve = (ref: any) => {
    const dispatch = useDispatch();

    return (): void => {
        clearTimeout(ref.current);
        dispatch(gameToggleEvolve(false));
    };
};

export default usePauseEvolve;
