import styled from "styled-components";
import Page from "../partials/Page";
import { Content } from "../styles";
import { device } from "../styles/media";
import Spacer from "../partials/Spacer";
import FeaturedCard from "../components/FeaturedCard";

import Mushrooms from "../assets/mushrooms2.png";
import Typewriter from "../assets/typewriter.png";
import Bear from "../assets/bear.png";
import Woodlands from "../assets/woodlands.png";
import Camera from "../assets/camera.png";
import { useNavigate } from "react-router-dom";

const Top = styled.div`
  position: relative;
  min-height: 500px;
  padding-top: 100px;

  background: url(${Mushrooms});
  background-size: cover;
  background-position: center top;
  color: white;

  h1,
  p {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 20px;
  }
  p:last-of-type {
    line-height: 2;
  }

  .tag {
    max-width: 500px;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-size: 20px;
    padding: 1rem 2rem;
    letter-spacing: 1px;
    border: 3px solid white;
    color: #2a2753;
    border-radius: 100px;
    box-shadow: 0 0 0 white, 0 0 0 white;
    transition: all 0.2s ease;
  }

  button:hover {
    animation: pulse 1s infinite forwards;
    text-decoration: underline;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 white, 0 0 0 white;
    }
    50% {
      box-shadow: 0 0 4px white, 0 0 8px white;
    }
    100% {
      box-shadow: 0 0 0 white, 0 0 0 white;
    }
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

const Center = styled.div`
  .pretag {
  }
  .description {
    max-width: 850px;
  }
  .upcoming {
    font-size: 24px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
`;

const GetNotified = styled.div`
  background: black;
  color: white;
  .content {
    padding: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    p {
      max-width: 400px;
    }
    form {
      display: flex;
      font-size: 20px;
      button,
      input {
        border: none;
        border-radius: 10px;
        padding: 0.5rem 1rem;
      }
      input {
        margin-right: 0.5rem;
      }
    }
    div {
      max-width: 500px;
    }
  }
`;

export default function Root() {
  const featured = [
    {
      title: "Automata",
      start: new Date(2022, 10, 1),
      end: new Date(2022, 10, 25),
      image: Camera,
    },
    {
      title: "Toy Chest",
      start: new Date(2022, 11, 15),
      end: new Date(2022, 11, 31),
      image: Bear,
    },
    {
      title: "Office Space",
      start: new Date(2023, 1, 1),
      end: new Date(2023, 1, 31),
      image: Typewriter,
    },
    {
      title: "Woodlands",
      start: new Date(2023, 3, 15),
      end: new Date(2023, 3, 31),
      image: Woodlands,
    },
  ];

  const navigate = useNavigate();

  return (
    <Page header={{ offset: false }}>
      <Top>
        <Content>
          <p>NEW</p>
          <h1>
            <i>
              Uncover <br /> The <br /> Microcosm
            </i>
          </h1>
          <p className="tag">
            With a camera, we can uncover and explore this detailed world that
            exists within the larger world around us.
          </p>
          <button onClick={() => navigate("/featured")}>Enter Exhibit</button>
        </Content>
        <div className="shadow"></div>
      </Top>
      <Spacer s={4} />
      <Center>
        <Content>
          <p className="pretag">Keep Reading</p>
          <h2>Online & Studio Exhibits</h2>
          <p className="description">
            We release new exhibits every month. Check back often to see
            what&lsquo;s new. At the moment, we offer both online and in-studio
            exhibits. All exhibits are available both online AND in-person Thank
            you for your interest, and we hope you enjoy.
          </p>
          <Spacer s={3} />
          <p className="upcoming">Upcoming</p>
          <div className="cards">
            {featured.map((f, index) => (
              <FeaturedCard
                key={index}
                title={f.title}
                start={f.start}
                end={f.end}
                image={f.image}
              />
            ))}
          </div>
        </Content>
      </Center>
      <Spacer s={4} />
      <GetNotified>
        <Content>
          <div>
            <h2>Get Notified</h2>
            <p>
              Join our mailing list to get notified about upcoming exhibits and
              exciting new works.
            </p>
          </div>
          <div>
            <Spacer />
            <form>
              <input type="email" placeholder="Email" />
              <button>Sign Up</button>
            </form>
            <p>We promise not to spam you. You can unsubscribe at any time.</p>
          </div>
        </Content>
      </GetNotified>
    </Page>
  );
}
