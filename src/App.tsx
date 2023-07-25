import './styles/app.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={'page-wrapper'}>
      <Header />
      <main className={'page-content'}>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
