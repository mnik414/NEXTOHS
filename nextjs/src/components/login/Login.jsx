import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const login = (e) => {
    console.log(username, password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTop}>
          <h3 className={styles.loginLogo}>NEXTOHS</h3>
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
              onChange={(e) => setPassword(e.target.value)}
              id="passwordInput"
              placeholder="رمز عبور"
              className={styles.loginInput}
            />
            <button onClick={login} className={styles.loginButton}>
              ورود
            </button>
            <span className={styles.loginForget}>بازیابی رمز عبور؟</span>
            <button className={styles.loginRegisterButton}>ثبت نام</button>
          </div>
        </div>
      </div>
    </div>
  );
}
