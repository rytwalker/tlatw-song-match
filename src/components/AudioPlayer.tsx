import { useEffect, useState } from "react";
import styled from "styled-components";
import { RoundButton } from "./Button/Button";
import { PlayIcon, PauseIcon } from "./icons";

function AudioPlayer({ url, id }) {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  function handlePlay() {
    !playing ? track.play() : track.pause();
    setPlaying(!playing);
  }

  useEffect(() => {
    setTrack(document.querySelector("#track" + id));
  }, []);

  return (
    <StyledAudioPlayer>
      <RoundButton onClick={handlePlay}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </RoundButton>
      <audio id={"track" + id}>
        <source src={url} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Preview>Preview</Preview>
    </StyledAudioPlayer>
  );
}

const StyledAudioPlayer = styled.div`
  margin-left: auto;
`;

const Preview = styled.div`
  text-align: center;
  font-weight: 700;
  margin-top: 4px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typeScale.finePrint};

  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;
export default AudioPlayer;
