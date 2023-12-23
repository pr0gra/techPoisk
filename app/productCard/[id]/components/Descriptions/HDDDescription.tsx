import React from "react";
import styles from "./style.module.css";
export const HDDDescription = ({ props }: any) => {
  return (
    <>
      <h1 className={styles.title}>Характеристики</h1>
      <div className={styles.hline} />
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Основные</h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Код производителя</h3>
                    <p>
                      <span>[WD10EZEX]</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Назначение</h3>
                    <p>
                      <span>ПК-десктопы</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Питание</h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальное энерго потребление</h3>
                    <p>
                      <span>6.5 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Энергопотребление в режиме ожидания</h3>
                    <p>
                      <span>6.1 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная рабочая температура</h3>
                    <p>
                      <span>60 °C</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Накопитель</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Объем HDD</h3>
                    <p>
                      <span>1 ТБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Объем кэш-памяти</h3>
                    <p>
                      <span>64 МБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Скорость вращения шпинделя</h3>
                    <p>
                      <span>7200 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость передачи данных</h3>
                    <p>
                      <span>150 Мбай/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Среднее время задержки</h3>
                    <p>
                      <span>4.2 мс</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Интерфейс</h3>
                    <p>
                      <span>SATA III</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Оптимизация под RAID-массивы</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Габариты и вес</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Ширина</h3>
                    <p>
                      <span>69.85 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина</h3>
                    <p>
                      <span>100 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Толщина</h3>
                    <p>
                      <span>15 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Вес</h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hline} />
    </>
  );
};
