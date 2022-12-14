import styled from "styled-components";
import Page from "../partials/Page";
import { Content } from "../styles";
import { device } from "../styles/media";
import Mushrooms from "../assets/mushrooms2.png";

const Top = styled.div`
  position: relative;
  min-height: 500px;
  padding-top: 100px;

  background: url(${Mushrooms});
  background-size: cover;
  background-position: center top;
  color: white;

  h1 {
    font-family: "Merriweather", serif;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    margin: 0;
  }
  h1,
  p {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 20px;
  }
  p:last-of-type {
    line-height: 2;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-size: 20px;
    padding: 0.75rem 1.25rem;
    letter-spacing: 1px;
    border: 3px solid white;
    color: #2a2753;
    border-radius: 100px;
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
    margin: 0 auto;
    box-shadow: inset 0 0 200px rgba(1, 1, 1, 0.8);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
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
              Uncover The <br /> Microcosm
            </i>
          </h1>
          <p>
            Discover the intricate details of the world around <br /> us through
            the lens of a camera
          </p>
          <button>Enter Exhibit</button>
        </Content>
        <div className="shadow"></div>
      </Top>
      <Content>
        <h2>Subheading</h2>
      </Content>
    </Page>
  );
}
