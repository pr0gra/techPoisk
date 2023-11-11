"use client";

import styles from "./page.module.css";
import { ConfiguratorTable } from "@/components/configuratorTable/ConfiguratorTable";
import { useState } from "react";
import CPUsearch from "@/components/CPUsearch/CPUsearch";

export default function Home() {
  const [show, setShow] = useState(false);

  function searchByCPU() {
    setShow(true);
  }

  function exitFromCPUsearch() {
    setShow(false);
  }

  return (
    <>
      {show && <CPUsearch />}
      <div className={styles["home"]}>
        <h1 className={styles["title-page"]}>Конфигуратор ПК</h1>
        <div className={styles["main"]}>
          <ConfiguratorTable searchByCPU={searchByCPU} />
        </div>
      </div>
    </>
  );
}
