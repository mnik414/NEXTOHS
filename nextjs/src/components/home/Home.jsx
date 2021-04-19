import style from "./home.module.css";
import Link from "next/link";
import { HomeCard } from "../../data";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      {HomeCard.map((c) => (
        <Card key={c.id} card={c} />
      ))}
    </div>
  );
}

export function Card({ card }) {
  console.log(card);
  return (
    <div className={style.homeWrapper}>
      <Link href={card.link}>
        <div className={style.homeCard}>
          <div className={style.homeCardTop}>
            <img className={style.homeCardImg} src={card.img} />
          </div>
          <div className={style.homeCardBottom}>
            <div className={style.homeCardTitle}>{card.title}</div>
            <div className={style.homeCardDisc}>{card.disc}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
