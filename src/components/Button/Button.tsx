import styled from "styled-components";

const Button = styled.button`
  font-size: ${({ theme }) => theme.typeScale.h3};
  padding: 8px 24px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-family: inherit;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;

  @media (min-width: 769px) {
    width: auto;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.primary};
`;

export const RoundButton = styled(Button)`
  height: 50px;
  width: 50px;
  border: transparent;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;
