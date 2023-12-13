import './styles/app.scss';
import Navigation from './components/routes/Navigation';
import useGameEvolve from './hooks/useGameTheme';

function App() {
  useGameEvolve();

  return (
    <div className={'page-wrapper'}>
      <Navigation />
    </div>
  );
}

export default App;
