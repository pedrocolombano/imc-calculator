type BMILevel = {
    title: string;
    color: string;
    icon: "down" | "up";
    maxValue: number;
    yourBmi?: number;
}

export const BMI_LEVELS: Array<BMILevel> = [
    {title : "Abaixo do peso", color: "#96A3AB", icon: "down", maxValue: 18.5},
    {title : "Normal", color: "#0EAD69", icon: "up", maxValue: 24.9},
    {title : "Sobrepeso", color: "#E2B036", icon: "down", maxValue: 30},
    {title : "Obesidade", color: "#C3423F", icon: "down", maxValue: 99}
];

export const calculateImc = (height: number, weight: number): BMILevel | null => {
    const imc = weight / (height * height);

    BMI_LEVELS.forEach(level => {
        if (imc <= level.maxValue) {
            level.yourBmi = imc;
            return level;
        }
    });

    return null;
}