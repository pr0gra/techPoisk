import React from "react";
import styles from "./style.module.css";
export const LiquidCoolingSystemDescription = ({ props }: any) => {
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
                      <span>[R-LT720-BKAMNF-G-1]</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Socket</h3>
                    <p>
                      <span>
                        AM4, AM5, LGA 115X, LGA 1200, LGA 1700, LGA 20XX, sTRX4
                      </span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Рассеиваемая мощность</h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Материал водоблока</h3>
                    <p>
                      <span>медь</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Обслуживаемая СЖО</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Размер водоблока</h3>
                    <p>
                      <span>94 x 80 x 68 мм</span>
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
                      <span>3-pin 5V-D-G (ARGB)</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Источники подсветки</h3>
                    <p>
                      <span>водоблок</span>
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
                      <span>3</span>
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
                      <span>2250 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Минимальная скорость вращения</h3>
                    <p>
                      <span>500 об/мин</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Регулировка скорости вращения</h3>
                    <p>
                      <span>автоматическая (PWM)</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный воздушный поток</h3>
                    <p>
                      <span>85.85 CFM</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный уровень шума</h3>
                    <p>
                      <span>32.9 дБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальное статическое давление</h3>
                    <p>
                      <span>32.1 Па</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Номинальный ток</h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Номинальное напряжение</h3>
                    <p>
                      <span>-</span>
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
                      <h3>Монтажный размер радиатора</h3>
                      <p>
                        <span>120 мм - три секции</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Длина радиатора</h3>
                      <p>
                        <span>420 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Ширина радиатора</h3>
                      <p>
                        <span>120 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Толщина радиатора</h3>
                      <p>
                        <span>27 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Материал радиатора</h3>
                      <p>
                        <span>алюминий</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Помпа</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Уровень шума помпы</h3>
                      <p>
                        <span>19 дБ</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Скорость вращения помпы</h3>
                      <p>
                        <span>3100 об/мин</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Разъём подключения помпы</h3>
                      <p>
                        <span>3 pin</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Трубки</h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина трубок</h3>
                    <p>
                      <span>410 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Прозрачные трубки</h3>
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
