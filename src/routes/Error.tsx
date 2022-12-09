import { useRouteError } from "react-router-dom";
import styles from "../styles/pages.module.css";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className={styles.content}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
