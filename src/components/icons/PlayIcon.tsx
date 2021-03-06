import styled from "styled-components";

export const PlayIcon = () => {
  return (
    <StyledPlayIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </StyledPlayIcon>
  );
};

const StyledPlayIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
