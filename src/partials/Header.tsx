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
}: {
  setHeaderHeight: (height: number) => void;
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
  }, []);

  useEffect(() => {
    if (showModal) setShowModal(false);
  }, [pathname]);

  return (
    <>
      {showModal && (
        <ModalContainer style={{ opacity: 0 }}>
          <button onClick={() => setShowModal(false)}>x</button>
          {routeLinks}
        </ModalContainer>
      )}
      <HeaderContainer>
        <FixedContainer ref={headerRef}>
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
