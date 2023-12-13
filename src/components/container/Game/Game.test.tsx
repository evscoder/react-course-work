import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

test('Game Grid and Mode changes', async () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Game />
        </Provider>
    );

    const container = getByTestId('container');
    const btnGrid = getByTestId('btnGrid');
    const btnMode = getByTestId('btnMode');
    const modeTheme = document.body.dataset.mode;

    fireEvent.click(btnGrid);
    expect(container.dataset.grid).toBe('off');

    fireEvent.click(btnMode);
    expect(modeTheme).toBe('dark');
});

test('Game shape changes', async () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Game />
        </Provider>
    );

    const container = getByTestId('container');
    const btnSquare = getByTestId('square');
    const btnCircle = getByTestId('circle');
    const btnTriangle = getByTestId('triangle');

    fireEvent.click(btnSquare);
    expect(container.dataset.shape).toBe('square');

    fireEvent.click(btnCircle);
    expect(container.dataset.shape).toBe('circle');

    fireEvent.click(btnTriangle);
    expect(container.dataset.shape).toBe('triangle');
});

test('Game colors changes', async () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Game />
        </Provider>
    );

    const container = getByTestId('container');
    const btnPink = getByTestId('pink');
    const btnGreen = getByTestId('green');
    const btnBlue = getByTestId('blue');
    const btnYellow = getByTestId('yellow');
    const btnEmoji = getByTestId('emoji');
    const btnWhite = getByTestId('white');

    fireEvent.click(btnPink);
    expect(container.dataset.color).toBe('pink');

    fireEvent.click(btnGreen);
    expect(container.dataset.color).toBe('green');

    fireEvent.click(btnBlue);
    expect(container.dataset.color).toBe('blue');

    fireEvent.click(btnYellow);
    expect(container.dataset.color).toBe('yellow');

    fireEvent.click(btnEmoji);
    expect(container.dataset.color).toBe('emoji');

    fireEvent.click(btnWhite);
    expect(container.dataset.color).toBe('white');
});
