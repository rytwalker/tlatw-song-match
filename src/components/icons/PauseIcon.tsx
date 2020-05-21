import styled from "styled-components";

export const PauseIcon = () => {
  return (
    <StyledPauseIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </StyledPauseIcon>
  );
};

const StyledPauseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
