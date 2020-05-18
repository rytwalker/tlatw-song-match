import styled from "styled-components";
import axios from "axios";
import Slider from "./Slider/Slider";
import Select from "./Select/Select";
import { PrimaryButton } from "./Button/Button";
import { useSongMatch } from "../context/SongMatchContext";
import { KEYS, MODES } from "../constants";
function SongMatchForm() {
  const { songMatchValues, setSongMatchValues } = useSongMatch();

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
      const response = await axios.post(
        "http://localhost:4000/api/search",
        covnvertValuesToDecimals(songMatchValues)
      );
      console.log(response.data);
    } catch (error) {
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
    <form onSubmit={handleSubmit} style={{ marginBottom: "3rem" }}>
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
    </form>
  );
}

const Sliders = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 30px;
  @media (min-width: 769px) {
    grid-gap: 60px;
  }
`;

export default SongMatchForm;
