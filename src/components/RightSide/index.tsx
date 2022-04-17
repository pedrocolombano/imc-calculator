import { BMILevel } from '../../helpers/imc';

import { GridItem } from '../GridItem';

import styles from './styles.module.css';

type Props = {
    levels: Array<BMILevel>;
}

export const RightSide = (props: Props) => {
    return (
        <div className={styles.rightSide}>
            <div className={styles.grid}>
                {props.levels.map((item, key) => (
                    <GridItem key={key} item={item} />
                ))}
            </div>
        </div>
    );
}