import { useState } from "react";

export const CalculatorForm = () => {
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

        } else {
            alert("Preencha os campos.");
        }
    }

    return (
        <>
            <input
                type="number"
                placeholder="Digite sua altura. Ex: 1,5 (em metros)"
                value={heightField > 0 ? heightField : ""}
                onChange={handleHeightFieldInputChange}
            />

            <input
                type="number"
                placeholder="Digite seu peso. Ex: 70,4 (em kg)"
                value={weightField > 0 ? weightField : ""}
                onChange={handleWeightFieldInputChange}
            />

            <button onClick={handleCalculateButton}>Calcular</button>
        </>
    );
}