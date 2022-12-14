import styled from "styled-components";
import Page from "../partials/Page";
import { Content } from "../styles";
import { device } from "../styles/media";

const Top = styled.div`
  position: relative;
  min-height: 500px;
  padding-top: 100px;

  --blue: #70b4de;
  --purple: #873b8f;

  background: var(--blue);
  background: -webkit-linear-gradient(bottom, var(--blue), var(--purple));
  background: -moz-linear-gradient(bottom, var(--blue), var(--purple));
  background: linear-gradient(to top, var(--blue), var(--purple));

  color: white;

  .content {
    position: relative;
    z-index: 1;
  }

  .shadow {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 200px rgba(1, 1, 1, 0.3);
    margin: 0 auto;
  }

  ${device({
    tabletStyles: /*css*/ `
      background-size: cover;
    `,
  })}
`;

export default function Root() {
  return (
    <Page header={{ offset: false, transparentBg: true }}>
      <Top>
        <Content>
          <h1>Home</h1>
        </Content>
        <div className="shadow"></div>
      </Top>
      <Content>
        <h2>Subheading</h2>
      </Content>
    </Page>
  );
}
