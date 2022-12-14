import { useState } from "react";
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
    transparentBg?: boolean;
  };
  offsetHeader?: boolean;
  children: React.ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useState(0);

  const mainStyle =
    header?.offset == undefined ? { paddingTop: headerHeight + "px" } : {};

  const setHeight = header?.offset ? setHeaderHeight : () => null;

  return (
    <div className="App">
      <Header
        setHeaderHeight={setHeaderHeight}
        background={header?.transparentBg ? "transparent" : "grey"}
      />
      <Main style={mainStyle}>{children}</Main>
      <Footer />
    </div>
  );
}
