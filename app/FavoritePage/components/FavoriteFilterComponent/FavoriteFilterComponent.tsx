import React from "react";
import styles from "./styles.module.css";
export default function FavoriteFilterComponent() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["h1"]}>Избранное</h1>
        <p>1 позиция</p>
      </div>
      <p className={styles["show-p"]}>Показать:</p>
      <div className={styles["wrapper"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "124px",
          }}
        >
          <input
            type="checkbox"
            name="assemblings"
            style={{ marginRight: "8px" }}
          />
          <p>Сборки</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "124px",
            }}
          >
            <input
              type="checkbox"
              name="assemblings"
              style={{ marginRight: "8px" }}
            />
            <p>Комплектующие</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                name="allProducts"
                style={{ marginRight: "8px" }}
              />
              <p>Все товары</p>
            </div>

            <div className={styles["buttons-container"]}>
              <button>Оформить заказ</button>
              <button>Добавить в конфигуратор</button>
              <button style={{ color: "#f38383" }}>Удалить</button>
            </div>
          </div>
          <p>Сортировать: Сначала новые</p>
        </div>
      </div>
    </>
  );
}
