import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { ToastContainer } from 'react-toastify';

import { BMILevel, BMI_LEVELS } from './helpers/imc';

import "react-toastify/dist/ReactToastify.min.css";

export const App = () => {
  const [displayedItem, setDisplayedItem] = useState<BMILevel | null>(null);

  const handleBmiCalculation = (level: BMILevel | null): void => {
    setDisplayedItem(level);
  }

  const clearItem = (): void => {
    setDisplayedItem(null);
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <LeftSide setDisplayedItem={handleBmiCalculation} />
        <RightSide clearItem={clearItem} displayedItem={displayedItem} levels={BMI_LEVELS} />
      </div>

      <ToastContainer />
    </div>
  );
}
