import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from "./Game";
test('Game app', async () => {
    const { getByTestId } = render(
        <Game />
    );

    const container = getByTestId('container');
    const btnSquare = getByTestId('square');
    // const btnCircle = getByTestId('circle');
    // const btnTriangle = getByTestId('triangle');
    // const btnPurple = getByTestId('purple');
    // const btnPink = getByTestId('pink');
    // const btnGreen = getByTestId('green');
    // const btnBlue = getByTestId('blue');
    // const btnYellow = getByTestId('yellow');
    // const btnEmoji = getByTestId('emoji');
    // const btnWhite = getByTestId('white');


    fireEvent.click(btnSquare);
    expect(container.dataset).toBe('square');
});
