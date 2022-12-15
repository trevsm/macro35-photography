import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Main = styled.main``;

export default function Page({
  header,
  children,
}: {
  header?: {
    offset?: boolean;
  };
  offsetHeader?: boolean;
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const [headerHeight, setHeaderHeight] = useState(0);

  const mainStyle =
    header?.offset == undefined ? { paddingTop: headerHeight + "px" } : {};

  const setHeight = !header?.offset ? setHeaderHeight : () => null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header setHeaderHeight={setHeight} />
      <Main style={mainStyle}>{children}</Main>
      <Footer />
    </div>
  );
}
