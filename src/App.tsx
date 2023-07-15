import './styles/app.scss';
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className={'page-wrapper'}>
      <Header />
      <main className={'page-content'}>
        <Game />
      </main>
    </div>
  );
}

export default App;
