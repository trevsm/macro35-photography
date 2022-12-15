import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { routes } from "../routes";
import { Content } from "../styles";
import styled from "styled-components";
import { device } from "../styles/media";
import { main } from "../assets";

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
  .burger {
    display: none;
    scale: 0.7;
    cursor: pointer;
  }

  .current {
    opacity: 0.6;
    pointer-events: none;
  }

  ${device({
    tabletStyles: `
        .burger {
          display: flex;
        }
        nav {
          display: none;
        }
      `,
  })}
`;

const FixedContainer = styled.div.attrs({ className: "fixed" })`
  position: fixed;
  top: 0;
  z-index: 2;
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5rem 2rem;
    font-size: 25px;
  }
  a {
    padding: 1rem;
    text-decoration: none;
    color: black;
  }
  ${device({
    tabletStyles: `
        opacity: 1 !important;
      `,
  })}
`;

export default function Header({
  setHeaderHeight,
  staticBg,
}: {
  setHeaderHeight: (height: number) => void;
  staticBg?: boolean;
}) {
  const { pathname } = useLocation();

  const routeLinks = useMemo(
    () =>
      routes.map((route) =>
        route.name ? (
          <Link
            key={route.path}
            to={route.path}
            className={pathname === route.path ? "current" : ""}
          >
            {route.name}
          </Link>
        ) : null
      ),
    [routes, pathname]
  );

  const [showModal, setShowModal] = useState(true);

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

  useEffect(() => {
    if (showModal) setShowModal(false);
  }, [pathname]);

  const staticBackground = {
    background: "#000000eb",
  };

  return (
    <>
      {showModal && (
        <ModalContainer style={{ opacity: 0 }}>
          <button onClick={() => setShowModal(false)}>x</button>
          {routeLinks}
        </ModalContainer>
      )}
      <HeaderContainer>
        <FixedContainer
          ref={headerRef}
          style={staticBg ? staticBackground : {}}
        >
          <Content>
            <Link to="/" className="logo">
              MACRO35
            </Link>
            <div className="burger" onClick={() => setShowModal(true)}>
              <img src={main.MenuIcon} alt="menu" />
            </div>
            <nav>{routeLinks}</nav>
          </Content>
        </FixedContainer>
      </HeaderContainer>
    </>
  );
}
