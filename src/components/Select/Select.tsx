import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

function MySelect({ options, title }) {
  const [selectValue, setSelectValue] = useState(options[0]);

  function setValue(value, actions) {
    switch (actions.action) {
      case "select-option":
        if (actions.option.label === "ANY") {
          setSelectValue([
            { label: actions.option.label, value: actions.option.value },
          ]);
          return;
        } else {
          if (value[0].label === "ANY") {
            setSelectValue([...value.slice(1)]);
            return;
          }
          setSelectValue(value);
          return;
        }
      case "clear":
        setSelectValue([{ label: options[0].label, value: options[0].value }]);
        return;
      case "remove-value":
        if (actions.removedValue.label === "ANY" || !value) {
          setSelectValue([
            { label: options[0].label, value: options[0].value },
          ]);
          return;
        }
        setSelectValue(value);
        return;
      default:
        setSelectValue(value);
        break;
    }
  }
  return (
    <Container>
      <h3>{title}:</h3>
      <Select
        options={options}
        onChange={(value, actions) => setValue(value, actions)}
        name="hello"
        isMulti
        defaultValue={selectValue}
        value={selectValue}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  h3 {
    margin: 0 0 1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default MySelect;
