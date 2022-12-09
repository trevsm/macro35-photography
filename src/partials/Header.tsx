import styles from "../styles/partials.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/">home</a>
      </nav>
    </header>
  );
}
