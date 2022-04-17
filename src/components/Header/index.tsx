import styles from './styles.module.css';
import poweredImage from '../../assets/powered.png';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img className={styles.poweredImage} src={poweredImage} alt="" />
            </div>
        </header>
    );
}