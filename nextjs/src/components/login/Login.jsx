import { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";

const ENDPOINT = "http://localhost:4000/login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    if (!username || !password) return;

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
        <div className={styles.loginTop}>
          <Link href="./home">
            <h3 className={styles.loginLogo}>NEXTOHS</h3>
          </Link>
          <span className={styles.loginDesc}>
            برای ورود نام کاربری و رمز خود را وارد کنید
          </span>
        </div>
        <div className={styles.loginBottom}>
          <div className={styles.loginBox}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="usernameInput"
              placeholder="نام کاربری"
              className={styles.loginInput}
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="passwordInput"
              placeholder="رمز عبور"
              className={styles.loginInput}
            />
            <button onClick={login} className={styles.loginButton}>
              ورود
            </button>
            <span className={styles.loginForget}>بازیابی رمز عبور؟</span>
            <Link href="./register">
              <button className={styles.loginRegisterButton}>ثبت نام</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
