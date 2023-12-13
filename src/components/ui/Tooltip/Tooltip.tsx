import {FC} from 'react';
import {TooltipProps} from '../../../types/types';
import cn from "clsx";
import s from './Tooltip.module.scss'

const Tooltip: FC<TooltipProps> = ({ children, content, placement = 'top' }) => {
    return (
        <div className={cn(s.tooltip, s[`tooltip--${placement}`])}>
            <div className={s.tooltip__element}>{content}</div>
            {children}
        </div>
    );
};

export default Tooltip;
