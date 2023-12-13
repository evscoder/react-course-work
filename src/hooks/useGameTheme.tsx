import {createArray} from '../redux/gameSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useEffect} from 'react';

const useGameEvolve = () => {
    const {theme, gridSize} = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.dataset.mode = theme ? 'light' : 'dark';
        dispatch(createArray());
    }, [dispatch, theme, gridSize]);
};

export default useGameEvolve;
