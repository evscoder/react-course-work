import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? 'otus-course-work-react' : ''}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
