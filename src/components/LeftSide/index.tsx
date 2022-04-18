import styles from './LeftSide.module.css';

import { CalculatorForm } from '../CalculatorForm';
import { BMILevel } from '../../helpers/imc';

type Props = {
    setDisplayedItem: (level: BMILevel | null) => void;
}

export const LeftSide = (props: Props) => {
    return (
        <div className={styles.leftSide}>
            <h1>Calcule seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea,
                parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            <CalculatorForm setDisplayedItem={props.setDisplayedItem} />
        </div>
    );
}