import styled from "styled-components";

interface SpacerProps {
  s?: number;
}

const Spacer = styled.div<SpacerProps>`
  height: ${({ s = 2 }) => s}rem;
`;

export default Spacer;
