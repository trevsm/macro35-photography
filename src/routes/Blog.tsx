import styled from "styled-components";
import { posts } from "../assets";
import PostCard from "../components/PostCard";
import Page from "../partials/Page";
import Spacer from "../partials/Spacer";
import { Content } from "../styles";
import { device } from "../styles/media";

const Main = styled.main`
  .content {
    .featured,
    .previous {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  ${device({
    desktopStyles: /*css*/ `
      .content {
        .featured, .previous {
          justify-content: start;
        }
      }
      `,
  })}
`;

export default function Blog() {
  const featured = [
    {
      title: "Conquer Framing & Lenses",
      description:
        "Learn how to frame your shots and choose the right lens for the job.",
      image: posts.Blog,
    },
    {
      title: "Investing in the Right Gear",
      description: "Learn how to choose the right gear for your needs.",
      image: posts.Antique,
    },
  ];

  const previous = [
    {
      title: "Lets talk business",
      description: "Learn how to actually make money with your photography.",
      image: posts.Beach,
    },
    {
      title: "Finding Inspiration: Part 2",
      description: "Learn how to find inspiration in your everyday life.",
      image: posts.Mushrooms1,
    },
    {
      title: "Finding Inspiration: Part 1",
      description: "Getting inspiration is tough, but it's not impossible.",
      image: posts.Cosmos,
    },
    {
      title: "How should I get started?",
      description: "Learn how to get started with macro photography.",
      image: posts.Alaska,
    },
  ];
  return (
    <Page>
      <Main>
        <Content>
          <h2>Featured</h2>
          <div className="featured">
            {featured.map((post) => (
              <PostCard {...post} key={post.image} />
            ))}
          </div>
          <h2>Previous</h2>
          <div className="previous">
            {previous.map((post) => (
              <PostCard {...post} key={post.image} />
            ))}
          </div>
        </Content>
        <Spacer s={4} />
      </Main>
    </Page>
  );
}
