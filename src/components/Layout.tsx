import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  @media (min-width: 769px) {
    padding: 0;
  }
  @media (min-width: 1025px) {
    max-width: 1025px;
  }
`;
