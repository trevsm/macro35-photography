import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef } from "react";
import { routes } from "../routes";
import { Content } from "../styles";
import styled from "styled-components";

const HeaderContainer = styled.header`
  .fixed {
    width: 100%;
    background: transparent;
    transition: background 0.2s ease;
  }
  .scrolled.fixed {
    background: #000000eb !important;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
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
  staticBg,
}: {
  setHeaderHeight: (height: number) => void;
  staticBg?: boolean;
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

    if (window.scrollY > 100) {
      headerRef.current?.classList.add("scrolled");
    }

    return () => {
      // watch window for scroll  events
      window.addEventListener("scroll", () => {
        if (staticBg) return;
        // if the window is scrolled down more than 100px
        if (window.scrollY > 100) {
          // add the class 'scrolled' to the header
          headerRef.current?.classList.add("scrolled");
        } else if (headerRef.current?.classList.contains("scrolled")) {
          // remove the class 'scrolled' from the header
          headerRef.current?.classList.remove("scrolled");
        }
      });
    };
  }, []);

  const staticBackground = {
    background: "#000000eb",
  };

  return (
    <HeaderContainer>
      <FixedContainer ref={headerRef} style={staticBg ? staticBackground : {}}>
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
