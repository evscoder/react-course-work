import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const useEvolve = (pause: () => void, start: () => void) => {
    const {evolve} = useSelector((state: RootState) => state.gameSlice);

    return (): void => {
        if (evolve) {
            pause();
        } else {
            start();
        }
    };
};

export default useEvolve;
