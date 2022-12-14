import styled from "styled-components";
import { Content } from "../styles";

const StyledFooter = styled.footer`
  background: lightgreen;
  width: 100%;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Content>Footer</Content>
    </StyledFooter>
  );
}
