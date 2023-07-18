import {forwardRef} from "react";
import styles from './Frame.module.scss';
import Shape from "../Shape/Shape";

interface Props {
    status?: "reset" | "active";
    isElementsActive: boolean[]
}

const Frame = forwardRef<HTMLDivElement, Props>(({status, isElementsActive}, frameElement) => {
    const shapes: number[] = [];

    for (let i = 0; i < (60 * 30); i++) {
        shapes.push(i + 1);
    }

    return (
        <div ref={frameElement} data-status={status} className={styles['frame']}>
            {shapes.map((_, index: number) => {
                return (
                    <Shape isActive={isElementsActive[index] && true} />
                );
            })}
        </div>
    )
})
export default Frame;
