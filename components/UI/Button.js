import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}> {children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
