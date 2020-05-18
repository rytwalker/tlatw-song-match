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

  @media (min-width: 769px) {
    width: auto;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.primary};
`;

export const RoundButton = styled(Button)`
  height: 100px;
  width: 100px;
  border: transparent;
  border-radius: 50%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
`;
