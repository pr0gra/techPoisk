import React from "react";
import styles from "./style.module.css";
export const CoolerDescription = () => {
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
                    <h3>Модель</h3>
                    <p>
                      <span>ID-COOLING SE-224-XTS ARGB</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Socket</h3>
                    <p>
                      <span>AM4, AM5, LGA 115X, LGA 1200, LGA 1700</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Рассеиваемая мощность</h3>
                    <p>
                      <span>220 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип конструкции</h3>
                    <p>
                      <span>башенный</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Подсветка</h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип подсветки</h3>
                    <p>
                      <span>ARGB</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип разъема питания подсветки</h3>
                    <p>
                      <span>3-pin 5V-D-G</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Источники подсветки</h3>
                    <p>
                      <span>крыльчатка</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>LCD дисплей</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Вентилятор</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество вентиляторов</h3>
                    <p>
                      <span>1</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Размеры вентиляторов</h3>
                    <p>
                      <span>120 x 120 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Размер для подключения вентиляторов</h3>
                    <p>
                      <span>4 pin</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость вращения</h3>
                    <p>
                      <span>1500 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Минимальная скорость вращения</h3>
                    <p>
                      <span>600 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Регулировка скорости вращения</h3>
                    <p>
                      <span>70 CFM</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный уровень шума</h3>
                    <p>
                      <span>28.9 дБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальное статическое давление</h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Номинальный ток</h3>
                    <p>
                      <span>0.15 A</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Номинальное напряжение</h3>
                    <p>
                      <span>12 В</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип подшипника</h3>
                    <p>
                      <span>скольжения (гидродинамический)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Радиатор</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Материал основания</h3>
                      <p>
                        <span>алюминий \ медь</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Материал радиатора</h3>
                      <p>
                        <span>алюминий</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Количество тепловых трубок</h3>
                      <p>
                        <span>4</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Габариты и вес</h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Высота</h3>
                    <p>
                      <span>150 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Ширина</h3>
                    <p>
                      <span>120 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина</h3>
                    <p>
                      <span>75 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Вес</h3>
                    <p>
                      <span>650 г</span>
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
