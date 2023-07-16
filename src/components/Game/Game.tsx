import React, {FC, useEffect, useRef, useState} from "react";
import styles from './Game.module.scss';
import Frame from "../Frame/Frame";
import Interface from "../Interface/Interface";

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    const [shape, setShape] = useState<string | undefined>('square');
    const [color, setColor] = useState<string | undefined>('purple');
    const gameElement = useRef<HTMLDivElement | null>(null);

    const onChangeShape = (event: React.ChangeEvent<HTMLInputElement>) => {
        const button = event.target;
        const buttonType: string | undefined = button.dataset.type;
        const buttonColor: string | undefined = button.dataset.color;

        const shapeData: DOMStringMap | undefined = gameElement.current?.dataset;

        shapeData!.shape = buttonType;
        shapeData!.color = buttonColor;

        setShape(shapeData!.shape);
        setColor(shapeData!.color);
    }

    return (
        <div ref={gameElement} data-shape={'square'} data-color={'purple'} className={styles['game']}>
            <Frame />
            <Interface onChangeShape={onChangeShape} type={shape} color={color === 'emoji' ? 'purple' : color} />
        </div>
    )
}

export default Game;
