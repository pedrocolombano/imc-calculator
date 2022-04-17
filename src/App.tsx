import styles from './App.module.css'

import { Header } from './components/Header';

export const App = () => {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}
