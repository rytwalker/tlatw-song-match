import { useState, useRef } from "react";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import { useSongs } from "../context/SongContext";
import { RoundButton } from "../components/Button/Button";
import { PlayIcon } from "../components/icons/PlayIcon";
import { SpotifyIcon } from "../components/icons/SpotifyIcon";

function SongInfo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();
  const { songs } = useSongs();
  console.log(songs);
  console.log(ref);
  function playSample() {
    if (playing) {
      ref!.current.audioEl?.current.pause();
    } else {
      ref!.current.audioEl?.current.play();
    }
    setPlaying(!playing);
  }
  return (
    <>
      {songs &&
        songs.map((song) => (
          <Container key={song.id}>
            <ArtworkContainer
              background={song.albumThumbnail}
            ></ArtworkContainer>
            <SongInformation>
              <h3>{song.name}</h3>
              <h4>THE LIGHTHOUSE AND THE WHALER</h4>
              <h4>{song.album}</h4>
              <ListenOnSpotify href={song.spotifyUrl} target="_blank">
                <SpotifyIcon />
                <div>Listen on Spotify</div>
              </ListenOnSpotify>
            </SongInformation>
            <RoundButton onClick={playSample}>
              <ReactAudioPlayer
                src={song.previewUrl}
                autoPlay={playing}
                ref={ref}
              />
              <Play />
            </RoundButton>
          </Container>
        ))}
    </>
  );
}

const Container = styled.div`
  max-width: 560px;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.textColorInverted};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  margin: 0 auto 30px;

  @media (min-width: 768px) {
    height: 140px;
    padding: 16px;
    margin: 0 auto 40px;
  }
`;

const ArtworkContainer = styled.div`
  height: 60px;
  width: 60px;
  background-color: #c4c4c4;
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  margin-right: 8px;

  @media (min-width: 768px) {
    height: 100px;
    width: 100px;
    margin-right: 18px;
  }
`;

const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0 0 2px;
    font-size: ${({ theme }) => theme.typeScale.helperText};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.typeScale.p};
    }
  }

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typeScale.copyrightText};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.typeScale.helperText};
    }
  }
`;

const ListenOnSpotify = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typeScale.copyrightText};
  margin-top: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.textColorInverted};
  transition: 0.2s color;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.typeScale.helperText};

    svg {
      margin-right: 8px;
      width: 22px;
      height: 22px;
    }
  }
`;

const Play = styled(PlayIcon)`
  border: 1px solid black;
  height: 40px;
  width: 40px;
  svg {
    height: 40px;
    width: 40px;
  }
`;

export default SongInfo;
