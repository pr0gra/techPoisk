import React from "react";
import styles from "./style.module.css";
export const RAMDescription = () => {
  return (
    <>
      <h1 className={styles.title}>Характеристики</h1>
      <div className={styles.hline} />
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Основные</h2>
            <div className={styles.Description}>
              <div className={styles.DescriptionColumn}>
                <div className={styles.DescriptionRow}>
                  <h3>Тип памяти</h3>
                  <p>
                    <span>DDR4</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Форм-фактор памяти</h3>
                  <p>
                    <span>DIMM</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Код производителя</h3>
                  <p>
                    <span>[AX4U32008G16A-DCBK20]</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Суммарный объем памяти всего комплекта</h3>
                  <p>
                    <span>16 Гб</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Объем одного модуля памяти</h3>
                  <p>
                    <span>3 Гб</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Количество одного модуля в комплекте</h3>
                  <p>
                    <span>2 шт</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Регистровая память</h3>
                  <p>
                    <span>нет</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>ECC-память</h3>
                  <p>
                    <span>нет</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Частота и тайминги</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Архитектура</h3>
                    <p>
                      <span>Matisse (Zen 2)</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество ядер</h3>
                    <p>
                      <span>6</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Энергоэффективные ядра</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество потоков</h3>
                    <p>
                      <span>12</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Кэш L2 уровня</h3>
                    <p>
                      <span>3 мб</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Кэш L3 уровня</h3>
                    <p>
                      <span>32 мб</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Техпроцесс</h3>
                    <p>
                      <span>7 нм</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Питание и охлаждение
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип памяти</h3>
                    <p>
                      <span>DDR4</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный объем памяти</h3>
                    <p>
                      <span>128 ГБ</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная частота памяти</h3>
                    <p>
                      <span>3200 МГц</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество каналов</h3>
                    <p>
                      <span>2</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Поддержка режим ECC</h3>
                    <p>
                      <span>да</span>
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
