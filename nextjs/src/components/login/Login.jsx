import styles from "./login.module.css";

export default function Login() {
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
            <input placeholder="نام کاربری" className={styles.loginInput} />
            <input placeholder="رمز عبور" className={styles.loginInput} />
            <button className={styles.loginButton}>ورود</button>
            <span className={styles.loginForget}>بازیابی رمز عبور؟</span>
            <button className={styles.loginRegisterButton}>ثبت نام</button>
          </div>
        </div>
      </div>
    </div>
  );
}