import Header from '../../layout/Header/Header';
import Game from '../../container/Game/Game';
import Footer from '../../layout/Footer/Footer';
import useTitle from '../../../hooks/useTitle';

const ScreenGame = () => {
    useTitle('Game of Life - Game');

    return (
        <>
            <Header />
            <main className={'page-content'}>
                <Game />
            </main>
            <Footer />
        </>
    );
};

export default ScreenGame;
