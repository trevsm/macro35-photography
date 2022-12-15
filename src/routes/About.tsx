import styled from "styled-components";
import Page from "../partials/Page";
import Spacer from "../partials/Spacer";
import { Content } from "../styles";
import { main } from "../assets";

const Main = styled.main`
  .top {
    display: flex;
    justify-content: space-around;
    .description {
      max-width: 600px;
    }
  }
  img {
    width: 200px;
  }
  .map {
    background: #eee;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    .info {
      position: absolute;
      width: 100%;
      max-width: 300px;
      border-radius: 30px;
      right: 0;
      top: 0;
      margin: 20px;
      padding: 20px;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      h2 {
        margin: 0;
      }
    }
    iframe {
      display: flex;
      border: 0;
      width: 100%;
      height: 350px;
    }
  }
`;

export default function About() {
  return (
    <Page header={{ staticBg: true }}>
      <Main>
        <Spacer s={5} />
        <Content>
          <div className="top">
            <div>
              <img src={main.Profile} alt="" />
              <h2>Joseph Shmo</h2>
              <p>Macro Photographer</p>
            </div>
            <div className="description">
              <h2>Hello!</h2>
              <p>
                I am Joseph Shmo, the owner of Macro35 - a photography studio
                that specializes in capturing the beauty of the small things in
                life. With over 20 years of experience behind the lens, I have
                found that the world of the microcosm is full of wonder and
                beauty, and I am passionate about sharing it with others. We
                offer canvas and ink prints of our work, so please take a look
                and let us know what you think.
                <br /> <br />
                Thank you for considering my photography. I hope you enjoy it as
                much as I do!
              </p>
            </div>
          </div>
          <Spacer s={6} />
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14696.46111749081!2d-122.085533!3d37.421999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10f9269f9a35d50c!2sGoogle+Campus!5e0!3m2!1sen!2sus!4v1514081312613"
              allowFullScreen={false}
            ></iframe>
            <div className="info">
              <h2>Macro35</h2>
              <p>
                1234 Main St. <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
          <Spacer s={5} />
        </Content>
      </Main>
    </Page>
  );
}
