import styles from "../styles/pages.module.css";

import Footer from "./Footer";
import Header from "./Header";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
