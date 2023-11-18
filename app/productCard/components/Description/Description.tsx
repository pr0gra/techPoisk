"use client";
import React from "react";
import styles from "./style.module.css";
import { DescriptionContainer } from "./DescriptionContainer";
export const Description = () => {
  return (
    <div>
      <p className={styles.blockTitle}>Характеристики</p>
      <div className={styles.horizontalLine} />
      <div className={styles.descriptionContainer}>
        <DescriptionContainer title="Основные" />
        <DescriptionContainer title="Ядро" />
        <DescriptionContainer title="Оперативная память" />
        <DescriptionContainer title="Частота" />
        <DescriptionContainer title="Основные" />
        <DescriptionContainer title="Ядро" />
        <DescriptionContainer title="Оперативная память" />
        <DescriptionContainer title="Частота" />
      </div>
    </div>
  );
};
