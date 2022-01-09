import styled from "styled-components";
import SocialNav from "./SocialNav";

function Footer() {
  return (
    <StyledFooter>
      <SocialNav />
      <WebsiteLink href="thelighthouseandthewhaler.com" rel="nofollow noref">thelighthouseandthewhaler.com</WebsiteLink>
      <div>© 2020 The Lighthouse and the Whaler</div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding: 30px;
`;

const WebsiteLink = styled.a`
  color: white;
  display: inline-block;
  margin-bottom: 16px;
  text-decoration: none;
`;

export default Footer;
