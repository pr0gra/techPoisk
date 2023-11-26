import Link from 'next/link';
import styles from './SearchProcessors.module.css'

interface Props{
  demoBase: any
}

export function SearchProcessors({demoBase}:Props) {
  return <div className={styles["search-processors"]}>
    {demoBase.map((elem:any, index:number)=>{
      return <Link href={`/${elem?.id}`} className={styles['product-row']}>
        <p className={styles['text']}>{elem?.id}</p>
        <p className={styles['text']}>{elem?.manufacturer?.name}</p>
        <p className={styles['text']}>{elem?.offers[0]?.shop?.name}</p>
      </Link>
    })}
  </div>;
}
