import React from "react";
import styles from "./style.module.css";
export const PowerUnitDescription = ({ props }: any) => {
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
                    <h3>Мощность (номинал)</h3>
                    <p>
                      <span>750 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Мощность по линии 12 В</h3>
                    <p>
                      <span>744 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Код производителя</h3>
                    <p>
                      <span>[ZM750-GVII]</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Отстегивающийеся кабели</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Цвет подсветки</h3>
                    <p>
                      <span>чёрные</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип подсветки</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Цвет подсветки</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>
                Система охлаждения
              </h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Система охлаждения</h3>
                    <p>
                      <span>активная</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Размеры венитляторов</h3>
                    <p>
                      <span>120 x 120 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Регулировка оборотов</h3>
                    <p>
                      <span>автоматическая</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>
                      Переключатель режима работы вентилятора (Hybrid mode)
                    </h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Кабели и разъёмы</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Питание мат.платы</h3>
                    <p>
                      <span>20 + 4 pin x2</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Питание процессора (CPU)</h3>
                    <p>
                      <span>4+2 pin x4</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Питание видеокарты (PCI-E)</h3>
                    <p>
                      <span>6+2 pin x4</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество разъемов 15-pin SATA</h3>
                    <p>
                      <span>5</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество разъемов 4-pin Molex</h3>
                    <p>
                      <span>3</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъем 4 pin Floppy</h3>
                    <p>
                      <span>есть</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина кабеля питания мат.платы</h3>
                    <p>
                      <span>550 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина кабеля питания процессора</h3>
                    <p>
                      <span>650 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина кабеля питания PCI-E</h3>
                    <p>
                      <span>500 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина кабеля питания SATA</h3>
                    <p>
                      <span>400 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина кабеля питания Molex</h3>
                    <p>
                      <span>400 мм</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Надёжность</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Сертификат 80 PLUS</h3>
                      <p>
                        <span>Bronze</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Корректор коэффициента мощности (PFC)</h3>
                      <p>
                        <span>активный</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Соответствие стандартам</h3>
                      <p>
                        <span>ATX 12V 2.31</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>технология защиты</h3>
                      <p>
                        <span>OCP, OPP, OTP, OVP, SCP, UVP</span>
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
                    <h3>Длина</h3>
                    <p>
                      <span>140 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Ширина</h3>
                    <p>
                      <span>150 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Высота</h3>
                    <p>
                      <span>86 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Вес</h3>
                    <p>
                      <span>2.09 кг</span>
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
