import StartButton from "../comps/start-button";
import styles from "../styles/Home.module.css";
import Leafs from "../comps/leafs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Leafs />

      <StartButton />

      <main className={styles.main}></main>
    </div>
  );
}
