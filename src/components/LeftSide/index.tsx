import styles from './styles.module.css';

import { CalculatorForm } from '../CalculatorForm';

export const LeftSide = () => {
    return (
        <div className={styles.leftSide}>
            <h1>Calcule seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea,
                parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            <CalculatorForm />
        </div>
    );
}