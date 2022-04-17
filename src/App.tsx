import styles from './App.module.css'

import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

import { BMI_LEVELS } from './helpers/imc';

export const App = () => {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <LeftSide />
        <RightSide levels={BMI_LEVELS} />
      </div>
    </div>
  );
}
