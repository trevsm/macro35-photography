import styled from "styled-components";
import { mushrooms } from "../assets";
import Page from "../partials/Page";
import Spacer from "../partials/Spacer";
import { Content } from "../styles";
import { device } from "../styles/media";

const Top = styled.div`
  position: relative;
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    img {
      width: 100%;
      height: auto;
      border-radius: 30px;
      :nth-child(1) {
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
      }
    }
  }
  ${device({
    mobileStyles: /*css*/ `
        .image-gallery {
          grid-template-columns: repeat(1, 1fr);
        }
      `,
    tabletStyles: /*css*/ `
        .image-gallery {
          grid-template-columns: repeat(3, 1fr);
          img {
            :nth-child(1) {
              grid-row: 1;
              grid-column: 1;
            }
          }
        }
      `,
  })}
`;

export default function FeaturedExhibit() {
  return (
    <Page header={{ staticBg: true }}>
      <Top>
        <Content>
          <div className="left">
            <img src="" alt="" />
            <p className="pretag">Our Mysterious World:</p>
            <h1>Uncover the Microcosm</h1>
            <p className="date">10.01.22</p>
          </div>
          <div className="description">
            The microcosm is a fascinating and often overlooked world, full of
            beauty and wonder. From the tiniest microorganisms to the intricate
            structures of the smallest plants and animals, the microcosm is a
            realm of endless possibility and discovery. Our new exhibit,
            &quot;Uncover the microcosm,&quot; celebrates this incredible world
            by showcasing the work of 10 artists who have captured its beauty in
            their art.
            <br />
            <br />
            The exhibit will be on display from December 4, 2022 through January
            8, 2023, and we invite you to come and explore the incredible world
            of the microcosm for yourself. From the intricate patterns of a
            single cell to the breathtaking complexity of a flower&apos;s
            pollen, &quot;Uncover the microcosm&quot; is an exhibit that will
            leave you in awe of the beauty and wonder of the world within the
            world.
          </div>
          <Spacer s={4} />
          <div className="image-gallery">
            {Object.keys(mushrooms).map((key) => (
              <img key={key} src={mushrooms[key]} alt={key} />
            ))}
          </div>
          <Spacer s={4} />
        </Content>
      </Top>
    </Page>
  );
}
