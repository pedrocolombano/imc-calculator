import { BMILevel } from '../../helpers/imc';

import { GridItem } from '../GridItem';

import styles from './RightSide.module.css';

import leftArrow from '../../assets/leftarrow.png';

type Props = {
    displayedItem: BMILevel | null;
    clearItem: () => void;
    levels: Array<BMILevel>;
}

export const RightSide = (props: Props) => {

    const handleBackButton = (): void => {
        props.clearItem();
    }

    return (
        <div className={styles.rightSide}>
            {!props.displayedItem &&
                <div className={styles.grid}>
                    {props.levels.map((item, key) => (
                        <GridItem key={key} item={item} />
                    ))}
                </div>
            }

            {props.displayedItem &&
                <div className={styles.largeIcon}>
                    <div onClick={handleBackButton} className={styles.arrow}>
                        <img src={leftArrow} alt="Back" />
                    </div>
                    <GridItem item={props.displayedItem} />
                </div>
            }
        </div>
    );
}