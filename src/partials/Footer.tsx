import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content } from "../styles";
import { routes } from "../routes";
import { useMemo } from "react";
import Spacer from "./Spacer";

const StyledFooter = styled.footer`
  background: #282828;
  width: 100%;
  * {
    color: white;
  }
  .links,
  .location,
  .contact {
    padding: 2rem;
    min-width: 250px;
  }

  .content {
    position: relative;
    padding: 5rem 0;
    padding-bottom: 8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .flex {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: fit-content;
  }

  h4 {
    border-bottom: 1px solid white;
    width: fit-content;
    text-transform: uppercase;
  }
  .links {
    a {
      text-decoration: none;
      margin-bottom: 0.5rem;
    }
    display: flex;
    flex-direction: column;
  }
  .copyright,
  .logo {
    position: absolute;
  }

  .copyright {
    bottom: 0;
    padding: 2rem;
  }

  .logo {
    top: 0;
    left: 0;
    padding: 2rem;
  }
`;

export default function Footer() {
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
    <StyledFooter>
      <Content>
        <div className="flex">
          <div className="logo">MACRO35</div>
          <div className="links">
            <h4>Links</h4>
            {routeLinks}
          </div>
          <div className="right">
            <div className="location">
              <h4>Studio Location</h4>
              <p>
                123 Glover Lane <br />
                Miniville, UT 83015 <br />
                <a href="https://goo.gl/maps"> View on Map</a>
              </p>
            </div>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <p>
              Tel: +1 (801) 901-2345 <br />
              Fax: +1 (801) 901-2345 <br />
              Email: hello@macro35.com <br />
            </p>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Macro35. All rights reserved.
          </div>
        </div>
      </Content>
    </StyledFooter>
  );
}
