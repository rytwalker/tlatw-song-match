import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

function MySelect({ options, title, handleChange }) {
  const [selectValue, setSelectValue] = useState(options[0]);

  function setFormValue(values = null) {
    if (values) {
      handleChange(
        title,
        values.map((v) => v.value)
      );
    } else {
      // default to all keys
      handleChange(title, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    }
  }

  function setValue(value, actions) {
    switch (actions.action) {
      case "select-option":
        if (actions.option.label === "ANY") {
          setSelectValue([
            { label: actions.option.label, value: actions.option.value },
          ]);
          setFormValue();
          return;
        } else if (value[0].label === "ANY") {
          setSelectValue([...value.slice(1)]);
          setFormValue(value.slice(1));
          return;
        }
        setSelectValue(value);
        setFormValue(value);
        return;
      case "clear":
        setSelectValue([{ label: options[0].label, value: options[0].value }]);
        setFormValue();
        return;
      case "remove-value":
        if (actions.removedValue.label === "ANY" || !value) {
          setSelectValue([
            { label: options[0].label, value: options[0].value },
          ]);
          setFormValue();
          return;
        }
        setSelectValue(value);
        setFormValue(value);
        return;
      default:
        setSelectValue(value);
        setFormValue(value);
        break;
    }
  }
  return (
    <Container>
      <h3>{title}:</h3>
      <Select
        options={options}
        onChange={(value, actions) => setValue(value, actions)}
        name={title}
        isMulti
        defaultValue={selectValue}
        value={selectValue}
        theme={(theme) => ({
          ...theme,
        })}
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
    font-size: ${({ theme }) => theme.typeScale.heading3};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default MySelect;
