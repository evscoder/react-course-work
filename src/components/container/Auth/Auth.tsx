import Button from '../../ui/Button/Button';
import styles from './Auth.module.scss';
import ScreenImage from '/screen.gif';
import useTitle from '../../../hooks/useTitle';

const Auth = () => {
    useTitle('Game of Life');
    return (
        <div className={styles.auth} style={{backgroundImage: `url(${ScreenImage})`}}>
            <div className={styles.container}>
                <h1 className={styles.title}>CONWAY'S GAME OF LIFE.</h1>
                <Button color={'white'} link={true} href={'/game'} classNames={styles.btn}>Начать игру</Button>
            </div>
        </div>
    );
};

export default Auth;
