import styles from "../styles/pages.module.css";

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h1>Not Found</h1>
      <p>
        <i>Sorry, the page you are looking for does not exist.</i>
      </p>
    </div>
  );
}
