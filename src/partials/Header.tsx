import { Link } from "react-router-dom";
import { useMemo } from "react";
import { routes } from "../routes";
import { Content } from "../styles";
import styled from "styled-components";

const HeaderContainer = styled.header`
  .content {
    display: flex;
    justify-content: space-between;
  }
  nav a {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
`;

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
    <HeaderContainer>
      <Content>
        <div>
          <Link to="/">Logo</Link>
        </div>
        <nav>{routeLinks}</nav>
      </Content>
    </HeaderContainer>
  );
}
