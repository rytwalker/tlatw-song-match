import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Heading>THE LIGHTHOUSE AND THE WHALER SONG MATCH</Heading>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  /* text-align: center; */
  padding: 2rem 0 4rem;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;

  /* display: fixed; */
  width: 100%;
  height: auto;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  margin-left: 40px;
  font-size: ${({ theme }) => theme.typeScale.h3};
  /* text-align: center; */
  span {
    display: block;
  }

  @media (min-width: 769px) {
    font-size: ${({ theme }) => theme.typeScale.h1};
  }
`;
