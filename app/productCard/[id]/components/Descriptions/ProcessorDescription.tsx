"use client";
import styles from "./style.module.css";

export const ProcessorDescription = ({ props }: any) => {
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
                  <h3>Производитель</h3>
                  <p>
                    <span>AMD</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Серия</h3>
                  <p>
                    <span>Ryzen 5</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Год релиза</h3>
                  <p>
                    <span>2019</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Код производителя</h3>
                  <p>
                    <span>[100-000000031]</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Тип поставки</h3>
                  <p>
                    <span>OEM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Ядро</h2>
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
            <h2 className={styles.DescriptionBlockTitle}>Оперативная память</h2>
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
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Частота</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Базовая частота</h3>
                    <p>
                      <span>3600МГц</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Частота в режиме Turbo</h3>
                    <p>
                      <span>4200 МГц</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Разблокированный множитель</h3>
                    <p>
                      <span>да</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Тепловыделение</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тепловыделение (TDP)</h3>
                    <p>
                      <span>65 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная рабочая температура</h3>
                    <p>
                      <span>95 °С</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Встроенная графика</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Интегрированное графическое ядро</h3>
                    <p>
                      <span>нет</span>
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
