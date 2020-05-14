import styled from "styled-components";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
