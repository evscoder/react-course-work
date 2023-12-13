import {createArray, gameReset} from '../redux/gameSlice';
import {useDispatch} from 'react-redux';

const useResetGame = (pause: () => void) => {
    const dispatch = useDispatch();

    return (): void => {
        dispatch(gameReset());
        pause();
        dispatch(createArray());
    };
};

export default useResetGame;
