import styled from "styled-components";
import { RoundButton } from "../components/Button/Button";
import { PlayIcon } from "../components/icons/PlayIcon";
import { SpotifyIcon } from "../components/icons/SpotifyIcon";

function SongInfo() {
  return (
    <OuterWrapper>
      <Ranking>1.</Ranking>
      <Container>
        <ArtworkContainer></ArtworkContainer>
        <SongInformation>
          <h3>CLOSER</h3>
          <h4>THE LIGHTHOUSE AND THE WHALER</h4>
          <h4>MONT ROYAL</h4>
          <ListenOnSpotify>
            <SpotifyIcon />
            <div>Listen on Spotify</div>
          </ListenOnSpotify>
        </SongInformation>
        <RoundButton>
          <PlayIcon />
        </RoundButton>
      </Container>
    </OuterWrapper>
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
  background: #c4c4c4;
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
