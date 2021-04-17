import style from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.homeWrapper}>
        <Link href="./ergonomic">
          <div className={style.homeCard}>
            <div className={style.homeCardTop}>
              <img className={style.homeCardImg} src="./img/ergonomic/1.jpg" />
            </div>
            <div className={style.homeCardBottom}>
              <div className={style.homeCardTitle}>
                ارزیابی پوسچرهای ارگونومیک
              </div>
              <div className={style.homeCardDisc}>
                با استفاده از این بخش این امکان را دارید که به چندین روش ارزیابی
                پوسچر انجام دهید
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
