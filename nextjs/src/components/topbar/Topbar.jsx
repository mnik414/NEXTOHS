import style from "./topbar.module.css";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className={style.topbarContainer}>
      <div className={style.topbarLeft}>
        <span className={style.logo}>
          <Link href="./home">
            <a>NEXTOHS</a>
          </Link>
        </span>
      </div>
      <div className={style.topbarRight}>
        <div className={style.topbarLinks}>
          <span className={style.topbarLink}>
            <Link href="./home">
              <a>صفحه اصلی</a>
            </Link>
          </span>
          <span className={style.topbarLink}>
            <Link href="#">
              <a>درباره ما</a>
            </Link>
          </span>
          <span className={style.topbarLink}>
            <Link href="./ergonomic">
              <a>ارگونومی</a>
            </Link>
          </span>
          <span className={style.topbarLink}>
            <Link href="./login">
              <a>ورود/ثبت نام</a>
            </Link>
          </span>
        </div>
        <div className={style.hamburgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

{
  /* 
        <nav className={style.mainNav}>
          <ul className={style.topbarMenu}>
            <li></li>
            <li>
              <Link href="#">
                <a></a>
              </Link>
            </li>
            <li>
              <Link href="./ergonomic">
                <a></a>
              </Link>
            </li>
            <li>
              <Link href="./login">
                <a></a>
              </Link>
            </li>
          </ul>
        </nav>
         */
}
