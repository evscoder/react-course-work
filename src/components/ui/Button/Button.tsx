import {forwardRef} from 'react';
import styles from './Button.module.scss';
import cn from 'clsx';
import {ButtonProps} from '../../../types/types';
import {Link} from 'react-router-dom';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({link, size, id, type, children, color, classNames, ...props }, ref) => {
    const buttonClasses = cn(styles.button, type && styles[`button--${type}`], color && styles[`button--${color}`], classNames);
    const button = () => {
        if (link) {
            const href = props.href as string;

            return (
                <Link {...props} data-testid={id} to={href} className={buttonClasses}>
                    { children }
                </Link>
            );
        }

        return (
            <button {...props} ref={ref} id={id} data-testid={id} className={buttonClasses} data-size={size && size}>
                { children }
            </button>
        );
    };

    return (
        button()
    );
});

export default Button;
