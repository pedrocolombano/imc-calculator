import { BMILevel } from '../../helpers/imc';
import styles from './styles.module.css';

type Props = {
    item: BMILevel;
}

export const GridItem = (props: Props) => {
    return (
        <div>{props.item.title}</div>
    );
}