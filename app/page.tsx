import styles from "./page.module.css";
import { ConfiguratorTable } from "@/components/configuratorTable/ConfiguratorTable";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <h1 className={styles["title-page"]}>Конфигуратор ПК</h1>
      <div className={styles["main"]}>
        <ConfiguratorTable />
      </div>
    </div>
  );
}
