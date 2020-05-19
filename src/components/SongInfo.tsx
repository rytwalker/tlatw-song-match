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
        songs.map((song, index) => (
          <OuterWrapper key={song.id}>
            <Ranking>{index + 1}.</Ranking>
            <Container>
              <ArtworkContainer
                background={song.albumThumbnail}
              ></ArtworkContainer>
              <SongInformation>
                <h3>{song.name}</h3>
                <h4>THE LIGHTHOUSE AND THE WHALER</h4>
                <h4>{song.album}</h4>
                <ListenOnSpotify>
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
                <PlayIcon />
              </RoundButton>
            </Container>
          </OuterWrapper>
        ))}
    </>
  );
}

const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
`;

const Ranking = styled.div`
  font-size: ${({ theme }) => theme.typeScale.h1};
  color: ${({ theme }) => theme.textColor};
  margin-right: 20px;
  font-weight: 700;
`;

const Container = styled.div`
  max-width: 560px;
  width: 100%;
  height: 140px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.textColorInverted};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;

const ArtworkContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: #c4c4c4;
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  margin-right: 1.8rem;
`;

const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typeScale.p};
  }

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typeScale.helperText};
  }
`;

const ListenOnSpotify = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typeScale.helperText};
  margin-top: 16px;

  svg {
    margin-right: 8px;
  }
`;

export default SongInfo;
