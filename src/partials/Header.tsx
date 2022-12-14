import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef } from "react";
import { routes } from "../routes";
import { Content } from "../styles";
import styled from "styled-components";

const HeaderContainer = styled.header`
  .content {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
  }
  .fixed {
    width: 100%;
  }
  nav a {
    margin-left: 0.5rem;
    padding: 0.5rem;
    color: white;
    text-decoration: none;
  }
`;

const FixedContainer = styled.div.attrs({ className: "fixed" })`
  position: fixed;
  top: 0;
  z-index: 2;
`;

export default function Header({
  setHeaderHeight,
  background = "grey",
}: {
  setHeaderHeight: (height: number) => void;
  background?: string;
}) {
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

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <HeaderContainer>
      <FixedContainer style={{ background }} ref={headerRef}>
        <Content>
          <Link to="/" className="logo">
            MACRO35
          </Link>
          <nav>{routeLinks}</nav>
        </Content>
      </FixedContainer>
    </HeaderContainer>
  );
}
