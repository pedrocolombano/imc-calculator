import styles from './App.module.css'

import { Header } from './components/Header';
import { LeftSide } from './components/LeftSide';

export const App = () => {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <LeftSide />
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}
