"use client";
import React from "react";
import styles from "./style.module.css";
interface DescriptionContainer {
  title: string;
}
export const DescriptionContainer = ({ title = "" }: DescriptionContainer) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.title}>{title}</th>
        </tr>
      </thead>
      <tr>
        <td>Производитель</td>
        <td>AMD</td>
      </tr>
      <tr>
        <td>Серия</td>
        <td>Ryzen 5</td>
      </tr>
      <tr>
        <td>Год релиза</td>
        <td>2019</td>
      </tr>
      <tr>
        <td>Код производителя</td>
        <td>
          <p>[100-000000031]</p>
        </td>
      </tr>
      <tr>
        <td>Гарантия производителя</td>
        <td>12 мес.</td>
      </tr>
      <tr>
        <td>Тип поставки</td>
        <td>ОЕМ</td>
      </tr>
    </table>
  );
};
