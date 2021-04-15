import styles from "./register.module.css";

export default function Register() {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>NEXTOHS</h3>
          <span className={styles.loginDesc}>
            برای ورود نام کاربری و رمز خود را وارد کنید
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input placeholder="نام کاربری" className={styles.loginInput} />
            <input placeholder="رمز عبور" className={styles.loginInput} />
            <button className={styles.loginButton}>ثبت نام</button>
            <button className={styles.loginRegisterButton}>
              ورود به اکانت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
