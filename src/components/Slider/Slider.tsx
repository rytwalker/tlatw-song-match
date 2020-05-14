import { useState } from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

type Props = {
  title: string;
  min?: number;
  max?: number;
};

function Slider({ title, min = 0, max = 100 }: Props) {
  const [value, setValue] = useState(min);
  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  const Thumb = (props) => <StyledThumb {...props} />;
  return (
    <Container>
      <h3>
        {title}: <span>{value}</span>
      </h3>
      <StyledSlider
        min={min}
        max={max}
        defaultValue={min}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(val) => setValue(val)}
      />
      <Labels>
        <Label>{min}</Label>
        <Label>{max}</Label>
      </Labels>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    margin: 0 0 1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
  }
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 8px;
  position: relative;
`;

const StyledThumb = styled.div`
  position: absolute;
  top: -8px;
  height: 25px;
  width: 25px;
  line-height: 25px;
  border-radius: 50%;
  cursor: grab;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ index, theme }) =>
    index === 1 ? "#c5c5c5" : theme.colors.white};
`;

const Labels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Label = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

export default Slider;
