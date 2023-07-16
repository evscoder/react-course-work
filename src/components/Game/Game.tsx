import React, {FC, useEffect, useState} from "react";
import styles from './Game.module.scss';
import Frame from "../Frame/Frame";
import Interface from "../Interface/Interface";

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    const [shape, setShape] = useState<string | undefined>('');

    const onChangeShape = (event: React.ChangeEvent<HTMLInputElement>) => {
        const button = event.target;
        const buttonType: string | undefined = button.dataset.type;

        setShape(buttonType);

        console.log(shape);
    }

    return (
        <div className={styles['game']}>
            <Frame />
            <Interface onChangeShape={onChangeShape} />
        </div>
    )
}

export default Game;
