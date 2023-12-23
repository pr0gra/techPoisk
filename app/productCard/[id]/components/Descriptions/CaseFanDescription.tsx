import React from "react";
import styles from "./style.module.css";
export const CaseFanDescription = ({ props }: any) => {
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
                  <h3>Код производителя</h3>
                  <p>
                    <span>[RC21-01800200-R3M1]</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Количество венитляторов в комплекте</h3>
                  <p>
                    <span>1</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Размер вентилятора</h3>
                  <p>
                    <span>140 x 140 мм</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Тип подшипника</h3>
                  <p>
                    <span>скольжения (гидродинамический)</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Цвет каркаса</h3>
                  <p>
                    <span>черный</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Цвет крыльчатки</h3>
                  <p>
                    <span>черный</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Тип подсветки</h3>
                  <p>
                    <span>ARGB</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Источник подсветки</h3>
                  <p>
                    <span>каркас</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Технические характеристики
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость вращения</h3>
                    <p>
                      <span>1600 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Минимальная скорость вращения</h3>
                    <p>
                      <span>500 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Воздушный поток на максимальной скорости</h3>
                    <p>
                      <span>81 CFM</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальное статическое давление</h3>
                    <p>
                      <span>12.8 Па</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный уровень шума</h3>
                    <p>
                      <span>30 дБа</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Минимальный уровень шума</h3>
                    <p>
                      <span>15 дБ</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Питание и подключение
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип разъема питания вентилятора</h3>
                    <p>
                      <span>4 pin</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Регулировка оборотов</h3>
                    <p>
                      <span>PWM</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Номинальное напряжение</h3>
                    <p>
                      <span>12 В</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный ток</h3>
                    <p>
                      <span>4 мА</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип разъема питания посветки</h3>
                    <p>
                      <span>3 Pin (5V-D-G)</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Хаб-контроллер в комплекте</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>ПДУ в комплекте</h3>
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
