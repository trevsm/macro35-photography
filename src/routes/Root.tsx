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

  h1 {
    font-family: "Merriweather", serif;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    margin: 0;
  }

  p {
    font-size: 25px;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-size: 20px;
    padding: 1rem;
    letter-spacing: 1px;
    box-shadow: 0 0 0 2px white;
  }

  .content {
    padding: 3rem 6rem;
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
    box-shadow: inset 0 0 200px rgba(1, 1, 1, 0.8);
    margin: 0 auto;
  }

  ${device({
    mobileStyles: /*css*/ `
      h1 {
        font-size: 40px;
        line-height: 60px;
      }
      p {
        font-size: 20px;
      }
      button {
        font-size: 16px;
        padding: 1rem;
      }
    `,
    tabletStyles: /*css*/ `
      .content {
        padding: 3rem 2rem;
      }
    `,
  })}
`;
export default function Root() {
  return (
    <Page header={{ offset: false, transparentBg: true }}>
      <Top>
        <Content>
          <p>NEW</p>
          <h1>
            <i>
              Uncover <br /> The <br /> Microcosm
            </i>
          </h1>
          <button>View Exhibit</button>
        </Content>
        <div className="shadow"></div>
      </Top>
      <Content>
        <h2>Subheading</h2>
      </Content>
    </Page>
  );
}
