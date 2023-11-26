import React from "react";
import styles from "./style.module.css";
export const CaseDescription = () => {
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
                    <h3>Типоразмер корпуса</h3>
                    <p>
                      <span>Mid-Tower</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Форм-фактор совместимых плат</h3>
                    <p>
                      <span>E-ATX, Micro-ATX, Mini-ITX, SSI-CEB, ATX</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Форм-фактор совместимых блоков питания</h3>
                    <p>
                      <span>ATX</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Ориентация материнской платы</h3>
                    <p>
                      <span>Вертикально</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Встроенный БП</h3>
                    <p>
                      <span>нет</span>
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
                    <h3>Цвет подсветки</h3>
                    <p>
                      <span>многоцветная</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Источник подсветки</h3>
                    <p>
                      <span>вентилятор, корпус</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъем подключения посветки</h3>
                    <p>
                      <span>3-pin 5V-D-G (ARGB)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>
                Разъёмы и интерфейсы лицевой панели
              </h2>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Расположение лицевой панели</h3>
                    <p>
                      <span>сверху</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъёмы</h3>
                    <p>
                      <span>
                        3.5 мм jack, USB 2.0, USB 3.2x2, USB 3.2 Type-C
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Внешний вид</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Основной цвет</h3>
                      <p>
                        <span>белый</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Основной цвет</h3>
                      <p>
                        <span>белый</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Материал корпуса</h3>
                      <p>
                        <span>сталь, стекло</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Наличие окна на боковой стенке</h3>
                      <p>
                        <span>слева</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Материалы фронтальной панели</h3>
                      <p>
                        <span>закаленное сткело, металлическая сетка</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Охлаждение</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Вентиляторы в комплекте</h3>
                      <p>
                        <span>4 x 120 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Поддержка фронтальных вентиляторов</h3>
                      <p>
                        <span>2 x 140 или 3 x 120 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Поддержка тыловых вентиляторов</h3>
                      <p>
                        <span>1 x 140 или 1 x 120 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Поддержка верхних вентиляторов</h3>
                      <p>
                        <span>нет</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Поддержка нижних вентиляторов</h3>
                      <p>
                        <span>2 x 120 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Поддержка бововых вентиляторов</h3>
                      <p>
                        <span>нет</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Возможность установки СЖО</h3>
                      <p>
                        <span>есть</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Фронтальный монтажный размер радиатора СЖО</h3>
                      <p>
                        <span>120 мм, 140 мм, 240 мм, 280 мм, 360 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>верхний монтажный размер радиатора СЖО</h3>
                      <p>
                        <span>120 мм, 140 мм, 240 мм, 280 мм, 360 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Тыловой монтажный размер СЖО</h3>
                      <p>
                        <span>120 мм, 140 мм</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock} style={{ flex: "0.5" }}>
              {/* поставил такой флекс, так как был большое расстояние между
              блоками */}
              <h2 className={styles.DescriptionBlockTitle}>Совместимость</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Максимальная длина блока питания</h3>
                      <p>
                        <span>200 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Горизонтальные слоты расширения</h3>
                      <p>
                        <span>7</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Вертикальные слоты расширения</h3>
                      <p>
                        <span>3</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Максимальная длина видеокарты</h3>
                      <p>
                        <span>390 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Максимальная высота кулера</h3>
                      <p>
                        <span>190 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Количество отсеков 2.5 накопителей</h3>
                      <p>
                        <span>2 шт</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Размер и вес</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Длина</h3>
                      <p>
                        <span>465 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Ширина</h3>
                      <p>
                        <span>240 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Высота</h3>
                      <p>
                        <span>496 мм</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Bec</h3>
                      <p>
                        <span>10 кг</span>
                      </p>
                    </div>
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
