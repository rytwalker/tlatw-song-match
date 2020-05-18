import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import { SongMatchProvider } from "../context/SongMatchContext";
import SongMatchForm from "../components/SongMatchForm";
import SongInfo from "../components/SongInfo";

export default function Home() {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  return (
    <SongMatchProvider>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <LoadingContainer>
          <Logo opacity />
        </LoadingContainer>
      ) : (
        <Layout>
          <main>
            <Heading>
              THE LIGHTHOUSE AND THE WHALER <span>SONG MATCH</span>
            </Heading>
            <SongMatchForm />
            <SongInfoContainer>
              <SongInfo />
              <SongInfo />
              <SongInfo />
              <SongInfo />
              <SongInfo />
            </SongInfoContainer>
          </main>
        </Layout>
      )}
    </SongMatchProvider>
  );
}
const SongInfoContainer = styled.div`
  margin: 30px auto;
  width: 100%;
`;
const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.typeScale.h3};
  text-align: center;
  span {
    display: block;
  }

  @media (min-width: 769px) {
    font-size: ${({ theme }) => theme.typeScale.h1};
  }
`;

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
