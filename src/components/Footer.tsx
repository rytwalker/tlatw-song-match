import styled from "styled-components";
import SocialNav from "./SocialNav";

function Footer() {
  return (
    <StyledFooter>
      <SocialNav />
      <div>© 2020 The Lighthouse and the Whaler</div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding: 30px;
`;

export default Footer;
