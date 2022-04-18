import { BMILevel } from '../../helpers/imc';
import styles from './GridItem.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: BMILevel;
}

export const GridItem = (props: Props) => {
    return (
        <div className={styles.itemCard} style={{ backgroundColor: props.item.color }}>
            <div className={styles.gridIcon}>
                <img src={props.item.icon === "up" ? upImage : downImage} alt={props.item.icon === "up" ? "Good" : "Bad"} />
            </div>
            <div className={styles.gridTitle}>{props.item.title}</div>

            {props.item.yourBmi && 
                <div className={styles.gridImc}>Seu IMC é de {props.item.yourBmi} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC entre <strong>{props.item.minValue}</strong> e <strong>{props.item.maxValue}</strong>
                </>
            </div>
        </div>
    );
}