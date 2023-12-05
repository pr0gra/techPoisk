"use client";

import styles from "./page.module.css";
import { ConfiguratorTable } from "@/components/configuratorTable/ConfiguratorTable";
import { useState } from "react";
import CPUsearch from "@/components/CPUsearch/CPUsearch";

export default function Home() {
  return (
    <>
      <div className={styles["home"]}>
        <div className="max-w-6xl mx-auto">
          <h1 className={styles["title-page"]}>Конфигуратор ПК</h1>
          <div className={styles["main"]}>
            <ConfiguratorTable />
          </div>
        </div>
      </div>
    </>
  );
}
