import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { animated } from "react-spring";
import Slider from "./Slider/Slider";
import Select from "./Select/Select";
import { PrimaryButton } from "./Button/Button";
import { useSongMatch } from "../context/SongMatchContext";
import { useSongs } from "../context/SongContext";
import { KEYS, MODES } from "../constants";

function SongMatchForm({ setResults }) {
  const { songMatchValues, setSongMatchValues } = useSongMatch();
  const { setSongs } = useSongs();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function covnvertValuesToDecimals(values) {
    return {
      energy: values.energy / 100,
      danceability: values.danceability / 100,
      instrumentalness: values.instrumentalness / 100,
      happiness: values.happiness / 100,
      acousticness: values.acousticness / 100,
      tempo: values.tempo,
      keys: values.key,
      mode: values.mode,
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);
      const apiUrl = "api/search";
      const response = await axios.post(
        apiUrl,
        covnvertValuesToDecimals(songMatchValues)
      );
      console.log(
        "🚀 ~ file: SongMatchForm.tsx ~ line 40 ~ handleSubmit ~ response",
        response
      );
      const newSongs = response.data.tracks.slice(0, 10).map((song) => {
        return {
          name: song.name,
          album: song.album.name,
          previewUrl: song.previewUrl,
          spotifyUrl: song.spotifyUrl,
          albumThumbnail: song.album.smallImageUrl,
          id: song.spotifyId,
        };
      });
      // console.log(response.data);
      setSongs(newSongs);
      setTimeout(() => {
        setResults(true);
      }, 1500);
    } catch (error) {
      setError(true);
      console.dir(error);
    }
  }

  function handleChange(field, newValue) {
    setSongMatchValues({
      ...songMatchValues,
      [field]: newValue,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Sliders>
        <Slider
          title="energy"
          value={songMatchValues.energy}
          handleChange={handleChange}
        />
        <Slider
          title="danceability"
          value={songMatchValues.danceability}
          handleChange={handleChange}
        />
        <Slider
          title="instrumentalness"
          value={songMatchValues.instrumentalness}
          handleChange={handleChange}
        />
        <Slider
          title="tempo"
          min={80}
          max={180}
          isRange
          value={songMatchValues.tempo}
          handleChange={handleChange}
        />
        <Slider
          title="happiness"
          value={songMatchValues.happiness}
          handleChange={handleChange}
        />
        <Slider
          title="acousticness"
          value={songMatchValues.acousticness}
          handleChange={handleChange}
        />
        <Select options={KEYS} title="key" handleChange={handleChange} />
        <Select options={MODES} title="mode" handleChange={handleChange} />
      </Sliders>
      <PrimaryButton type="submit">Submit</PrimaryButton>
      {submitting && (
        <Modal>
          {error ? "Something went wrong try again..." : "Computing Results.."}.
        </Modal>
      )}
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  margin-bottom: 30px;
`;

const Sliders = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    grid-gap: 60px;
  }
`;

const Modal = styled(animated.div)`
  position: absolute;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.primary};
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typeScale.h3};
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
`;

export default SongMatchForm;
