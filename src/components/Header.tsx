import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  margin: 2rem 0 4rem;
  width: 100%;
`;
