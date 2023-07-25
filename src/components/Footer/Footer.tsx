import {FC} from 'react';
import styles from './Footer.module.scss';
interface Props {
    title?: string
}

const Footer: FC<Props> = ({title}) => {
    return (
        <footer className={styles.footer}>
            <p className={styles.credit}>
                by <a href="https://evscoder.github.io/about.html" target={'_blank'}>{title ? title : 'About Me'}</a>
            </p>
            <p className={styles.credit}>
                with tut aid by source of <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target={'_blank'}>Wikipedia</a>
            </p>
        </footer>
    );
};

export default Footer;
