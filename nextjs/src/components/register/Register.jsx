import Link from "next/link";
import { useState } from "react";
import styles from "./register.module.css";

const ENDPOINT = "http://localhost:4000/register";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const signUp = async (e) => {
    if (password != passwordAgain) {
      // notif
      console.log("mismath pw");
      return;
    }

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    }).catch((e) => {
      console.log(e);
    });

    console.log(
      await res.json().catch((e) => {
        console.log(e);
      })
    );
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <Link href="./home">
            <h3 className={styles.loginLogo}>NEXTOHS</h3>
          </Link>
          <span className={styles.loginDesc}>
            برای ورود نام کاربری و رمز خود را وارد کنید
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="نام کاربری"
              className={styles.loginInput}
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="ایمیل"
              className={styles.loginInput}
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="رمز عبور"
              className={styles.loginInput}
            />
            <input
              onChange={(e) => {
                setPasswordAgain(e.target.value);
              }}
              type="password"
              placeholder="رمزعبور دوباره"
              className={styles.loginInput}
            />
            <button onClick={signUp} className={styles.loginButton}>
              ثبت نام
            </button>
            <Link href="./login">
              <button className={styles.loginRegisterButton}>ورود</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
