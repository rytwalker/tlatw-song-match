import { useEffect, useState } from "react";
import styled from "styled-components";
import { RoundButton } from "./Button/Button";
import { PlayIcon, PauseIcon } from "./icons";

function AudioPlayer({ url, id, currentTrackId, setCurrentTrackId }) {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);

  function handleAudioPlayerClick() {
    if (!playing) play();
    else pause();
  }

  function play() {
    track.play();
    setPlaying(true);
    setCurrentTrackId(id);
  }

  function pause() {
    track.pause();
    setPlaying(false);
    setCurrentTrackId(null);
  }

  useEffect(() => {
    setTrack(document.querySelector("#track" + id));
  }, []);

  // Stops track if another track in the list starts to play
  useEffect(() => {
    if (playing && currentTrackId && currentTrackId !== id) pause();
  }, [currentTrackId]);

  // Adds an onended method event to track so it changes back to pause state on ending of track
  useEffect(() => {
    if (track)
      track.onended = () => {
        pause();
      };
  }, [track]);

  return (
    <StyledAudioPlayer>
      <RoundButton onClick={handleAudioPlayerClick}>
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
