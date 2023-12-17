"use client";
import React from "react";
import styles from "./style.module.css";

export const VideoCardDescription = ({ props }: any) => {
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
                    <span>[NE64060019P1-1070D]</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Микроархитектура</h3>
                  <p>
                    <span>NVIDIA Ada Lovelace</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>LHR</h3>
                  <p>
                    <span>нет</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Техпроцесс</h3>
                  <p>
                    <span>5 нм</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Вывод изображения</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип и количество видеоразъёмов</h3>
                    <p>
                      <span>DisplayPort x3, HDMI</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Версия HDMI</h3>
                    <p>
                      <span>2.1</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Версия DisplayPort</h3>
                    <p>
                      <span>1.4a</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество подключаемых одновременно мониторов</h3>
                    <p>
                      <span>4</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальное разрешение</h3>
                    <p>
                      <span>7680x4320 (8K Ultra HD)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Подключение и питание
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Интерфейс подключения</h3>
                    <p>
                      <span>PCI-E 4.0</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Форм-фактор разъема подключения</h3>
                    <p>
                      <span>7</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Количество линий PCI-E</h3>
                    <p>
                      <span>8</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъёмы дополнительного питания</h3>
                    <p>
                      <span>8 pin</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Потребляемая мощность</h3>
                    <p>
                      <span>115 Вт</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Видеопроцессор</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Штатная частота работы видеочипа</h3>
                    <p>
                      <span>1830 МГц</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Турбочастота</h3>
                    <p>
                      <span>2460 МГц</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Количество универсальных процессоров (ALU)</h3>
                    <p>
                      <span>3072</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Число текстурных блоков</h3>
                    <p>
                      <span>96</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Число блоков растеризации</h3>
                    <p>
                      <span>48</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Поддержка трассировки лучей</h3>
                    <p>
                      <span>есть</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Аппаратное ускорение трассировки лучей</h3>
                    <p>
                      <span>24</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тензорные ядра</h3>
                    <p>
                      <span>96</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Видеопамять</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Объем видеопамяти</h3>
                    <p>
                      <span>8 Гб</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип памяти</h3>
                    <p>
                      <span>GDDR6</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разрядность шины памяти</h3>
                    <p>
                      <span>128 бит</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип памяти</h3>
                    <p>
                      <span>272 Гбайт/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип памяти</h3>
                    <p>
                      <span>17000 МГц</span>
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
                    <h3>Низкопрофильная карта(Low Profile)</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество занимаемых слотов расширения</h3>
                    <p>
                      <span>2</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина видеокарты Ширина видеокарты</h3>
                    <p>
                      <span>249.9 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Ширина видеокарты</h3>
                    <p>
                      <span>123.5 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Толщина видеокарты</h3>
                    <p>
                      <span>40.2 мм</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
