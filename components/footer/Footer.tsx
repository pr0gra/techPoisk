import styles from "./Footer.module.css";
import Link from "next/link";

import telegramImg from "../../assets/icons/telegram.svg";
import youtubeImg from "../../assets/icons/youtube.svg";
import techPoiskLogoDark from "../../assets/icons/tech-poisk-logo-dark.svg";
import Image from "next/image";

export function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["main"]}>
        <div className={styles["left-part"]}>
          <div className={styles["column"]}>
            <Link className={styles["link"]} href="/">
              О компании
            </Link>
            <Link className={styles["link"]} href="/">
              Контакты
            </Link>
            <Link className={styles["link"]} href="/">
              Партнёрам
            </Link>
          </div>

          <div className={styles["column"]}>
            <Link className={styles["link"]} href="/">
              Политика конфиденциальности
            </Link>
            <Link className={styles["link"]} href="/">
              Обратная связь
            </Link>
            <Link className={styles["link"]} href="/">
              Оплата и доставка
            </Link>
          </div>

          <div className={styles["icons-container"]}>
            <Image src={telegramImg} alt="" />
            <Image src={youtubeImg} alt="" />
          </div>
        </div>
        <div className={styles["right-part"]}>
          <Image
            className={styles["logo-image"]}
            src={techPoiskLogoDark}
            alt=""
          />
          <p className={styles["tech-poisk-subtitle"]}>
            Покупай лучшие комплектующие за <br /> лучшую цену в кратчайший срок
          </p>
        </div>
      </div>
      <div className={styles["copyright"]}>
        <p className={styles["copyright-text"]}>
          © 2023–2024 Компания TechPoisk. Все права защищены. <br />
          Администрация Сайта не несет ответственности за размещаемые
          Пользователями материалы (в т.ч. информацию и изображения), их
          содержание и качество.
        </p>
      </div>
    </div>
  );
}
