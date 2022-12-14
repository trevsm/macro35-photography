import styled from "styled-components";
import Spacer from "../partials/Spacer";

interface FeatureCardsProps {
  title: string;
  image: string; // imported image
  start: Date;
  end: Date;
}

const StyledCard = styled.div<{ image: string }>`
  position: relative;
  display: flex;
  overflow: hidden;

  height: 350px;
  width: 270px;
  min-width: 270px;
  border-radius: 30px;
  margin-right: 1rem;
  margin-bottom: 1rem;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: top;
  p,
  h3 {
    text-align: center;
  }

  h3 {
    font-family: "Merriweather", serf;
    font-size: 32px;
  }

  .main {
    position: relative;
    z-index: 1;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(calc(100% - 110px));
    transition: transform 0.25s ease;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      font-size: 24px;
    }

    button {
      font-size: 24px;
      margin: 5px 2.5rem;
      padding-left: 10px;
      text-align: left;
      box-shadow: 1px 1px 5px #00000036;
    }

    .bar {
      position: absolute;
      top: 10px;
      left: 0;
      right: 0;
      width: 40%;
      height: 5px;
      background: #6f6f6f45;
      margin: 0 auto;
      border-radius: 100px;
    }
  }

  :hover .main {
    transform: translateY(30px);
  }

  .tag {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 30px;
  }
`;

export default function FeaturedCard({
  title,
  image,
  start,
  end,
}: FeatureCardsProps) {
  return (
    <StyledCard image={image}>
      <div className="tag">{formatMonthDay(start)}</div>
      <div className="main">
        <div className="bar"></div>
        <div className="info"></div>
        <h3>{title}</h3>
        <p>Starts: {start.toLocaleDateString()}</p>
        <p>Ends: {end.toLocaleDateString()}</p>
        <Spacer s={1} />
        <button>Save Date</button>
        <button>View Location</button>
      </div>
    </StyledCard>
  );
}

export function formatMonthDay(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
