import { useState } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";
import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import { SongMatchProvider } from "../context/SongMatchContext";
import SongMatchForm from "../components/SongMatchForm";
import SongInfo from "../components/SongInfo";
import { SongProvider } from "../context/SongContext";
import AnimatedLayout from "../components/AnimatedLayout";
import Modal from "../components/Modal/Modal";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);
  const transition = useTransition(results, null, {
    from: {
      opacity: 0,
      position: "absolute",
      transform: "translateY(200%)",
      zIndex: 1,
    },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-200%)" },
    config: config.slow,
  });

  return (
    <SongMatchProvider>
      <SongProvider>
        <Head>
          <title>The Lighthouse and the Whaler Song Match</title>
          <meta
            name="description"
            content="Find your favorite The Lighthouse and the Whaler song based on parameters provided by Spotify."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading ? (
          <LoadingContainer>
            <Logo opacity />
          </LoadingContainer>
        ) : (
          <Layout>
            <Main>
              {transition.map(({ item, props, key }) => {
                return item ? (
                  <AnimatedLayout style={props} key={key}>
                    <SongInfo />
                  </AnimatedLayout>
                ) : (
                  <AnimatedLayout style={props} key={key}>
                    {/* <Heading>
                      THE LIGHTHOUSE AND THE WHALER <span>SONG MATCH</span>
                    </Heading> */}
                    <SongMatchForm setResults={setResults} />
                  </AnimatedLayout>
                );
              })}
            </Main>
          </Layout>
        )}
      </SongProvider>
    </SongMatchProvider>
  );
}

const Main = styled.main`
  position: relative;
  min-height: 80vh;
`;

const AnimatedContainer = styled(animated.div)`
  margin: 0 auto;
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
