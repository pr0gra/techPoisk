import Link from "next/link";
import styles from "./CatalogPopUpColumn.module.css";

interface CatalogPopUpColumnProps {
  array: string[];
}

export function CatalogPopUpColumn({ array }: CatalogPopUpColumnProps) {
  return (
    <div className={styles["catalog-pop-up-column"]}>
      {array.map((item, index) => {
        return (
          <Link className={styles["link"]} href={"/"} key={index}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
