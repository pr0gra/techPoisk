"use client";
import styles from "./style.module.css";
export const Specifications = () => {
  return (
    <div className={styles.specificationsContainer}>
      <h3>Краткие характеристики</h3>
      <ul className={styles.ulContainer}>
        <li>
          <p>
            Socket: <span>AM4</span>
          </p>
        </li>
        <li>
          <p>
            Количество ядер: <span>6</span>
          </p>
        </li>
        <li>
          <p>
            Количество потоков: <span>12</span>
          </p>
        </li>
        <li>
          <p>
            Базовая частота: <span>3600 МГц</span>
          </p>
        </li>
        <li>
          <p>
            Частота в режиме Turbo: <span>4200 МГц</span>
          </p>
        </li>
        <li>
          <p>
            Объём кэша L2: <span>3 Мб</span>
          </p>
        </li>
        <li>
          <p>
            Объём кэша L3: <span>32 Мб</span>
          </p>
        </li>
        <li>
          <p>
            Техпроцесс: <span>7 нм</span>
          </p>
        </li>
        <li>
          <p>
            Тепловыделение (TDP): <span>65 Вт</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
