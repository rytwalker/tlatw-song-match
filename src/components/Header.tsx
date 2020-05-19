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
  padding: 2rem 0 4rem;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.primary};

  /* display: fixed; */
  width: 100%;
  height: auto;
`;
