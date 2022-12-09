import styles from "../styles/partials.module.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { routes } from "../routes";

export default function Header() {
  const routeLinks = useMemo(
    () =>
      routes.map((route) =>
        route.name ? (
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        ) : null
      ),
    [routes]
  );

  return (
    <header className={styles.header}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>{routeLinks}</nav>
    </header>
  );
}
