import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Heading>
            THE LIGHTHOUSE AND THE WHALER <span>SONG MATCH</span>
          </Heading>
          <Sliders>
            <Slider title="energy" />
            <Slider title="dancability" />
            <Slider title="instrumentalness" />
            <Slider title="tempo" min={80} max={180} />
            <Slider title="happiness" />
            <Slider title="acousticness" />
          </Sliders>
        </main>
      </Layout>
    </>
  );
}

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 4rem;
  font-size: 4.8rem;
  text-align: center;
  span {
    display: block;
  }
`;

const Sliders = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 6rem;
`;
