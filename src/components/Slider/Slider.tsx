import { useState } from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

type Props = {
  title: string;
  min?: number;
  max?: number;
  isRange?: boolean;
  value?: string | number | number[] | string[];
  handleChange?: (field: string, newValue: any) => void;
};

function Slider({
  title,
  min = 0,
  max = 100,
  isRange = false,
  value,
  handleChange,
}: Props) {
  const [sliderValue, setSliderValue] = useState(value);
  function changeHandler(val) {
    setSliderValue(val);
    handleChange(title, val);
  }
  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  const Thumb = (props) => <StyledThumb {...props} />;
  return (
    <Container>
      <h3>
        {title}:{" "}
        <span>
          {isRange ? sliderValue[0] + " - " + sliderValue[1] : sliderValue}
        </span>
      </h3>
      <StyledSlider
        min={min}
        max={max}
        defaultValue={sliderValue}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(val) => changeHandler(val)}
        pearling={isRange}
        minDistance={10}
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
  color: ${({ theme }) => theme.textColor};

  h3 {
    margin: 0 0 10px;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typeScale.heading3};
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
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.primary};
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ index, theme }) =>
    index === 1 ? theme.colors.lightGrey : theme.textColor};
`;

const Labels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

export default Slider;
