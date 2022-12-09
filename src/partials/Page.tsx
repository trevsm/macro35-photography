import { Content } from "../styles";
import Footer from "./Footer";
import Header from "./Header";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
