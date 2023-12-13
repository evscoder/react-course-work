import {gameCreate} from '../redux/gameSlice';
import {useDispatch} from 'react-redux';

const useCreate = (ref: any) => {
    const dispatch = useDispatch();

    return (): void => {
        const table = ref.current as HTMLDivElement;
        const cells = table.querySelectorAll('.shape');
        const totalCells = cells.length;
        const maxCells = totalCells * 0.35;

        dispatch(gameCreate({totalCells, maxCells}));
    };
};

export default useCreate;
