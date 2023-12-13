import {Route, Routes} from 'react-router-dom';
import ScreenGame from './screens/ScreenGame';
import ScreenAuth from './screens/ScreenAuth';

const Navigation = () => {
    return (
        <Routes>
            <Route path={'/'} element={<ScreenAuth />} />
            <Route path={'/game'} element={<ScreenGame />} />
        </Routes>
    );
};

export default Navigation;
