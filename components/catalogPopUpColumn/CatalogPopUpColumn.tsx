import Link from "next/link";
import styles from "./CatalogPopUpColumn.module.css";

interface CatalogPopUpColumnProps {
  array: string[];
}

export function CatalogPopUpColumn({ array }: CatalogPopUpColumnProps) {
  return (
    <div className={styles["catalog-pop-up-column"]}> 
      {array.map((item) => {
        return (
          <>
            <Link className={styles["link"]} href={"/"}>
              {item}
            </Link>
          </>
        );
      })}
    </div>
  );
}
