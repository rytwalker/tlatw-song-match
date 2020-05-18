import styled from "styled-components";
import Slider from "./Slider/Slider";
import Select from "./Select/Select";
import { useSongMatch } from "../context/SongMatchContext";
import { KEYS, MODES } from "../constants";
function SongMatchForm() {
  const { songMatchValues, setSongMatchValues } = useSongMatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(songMatchValues);
  }

  function handleChange(field, newValue) {
    setSongMatchValues({
      ...songMatchValues,
      [field]: newValue,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Select options={KEYS} title="key" />
        <Select options={MODES} title="mode" />
      </Sliders>
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}

const Sliders = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-bottom: 3rem;
  @media (min-width: 769px) {
    grid-gap: 6rem;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  border: transparent;
  border-radius: 4px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  width: 100%;

  @media (min-width: 769px) {
    width: auto;
  }
`;

export default SongMatchForm;
