import styles from './CalculatorForm.module.css';

import { useState } from "react";
import { BMILevel } from "../../helpers/imc";

import { calculateImc } from "../../helpers/imc";

type Props = {
    setDisplayedItem: (level: BMILevel | null) => void;
}

export const CalculatorForm = (props: Props) => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleHeightFieldInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setHeightField(parseFloat(event.target.value));
    }

    const handleWeightFieldInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setWeightField(parseFloat(event.target.value));
    }

    const handleCalculateButton = (): void => {
        if (heightField && weightField) {
            props.setDisplayedItem(calculateImc(heightField, weightField));
            clearInputs();
        } else {
            alert("Preencha os campos.");
        }
    }

    const clearInputs = (): void => {
        setHeightField(0);
        setWeightField(0);
    }

    return (
        <div className={styles.form}>
            <input
                type="number"
                placeholder="Digite sua altura. Ex: 1.7 (em metros)"
                value={heightField > 0 ? heightField : ""}
                onChange={handleHeightFieldInputChange}
            />

            <input
                type="number"
                placeholder="Digite seu peso. Ex: 70.4 (em kg)"
                value={weightField > 0 ? weightField : ""}
                onChange={handleWeightFieldInputChange}
            />

            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
    );
}