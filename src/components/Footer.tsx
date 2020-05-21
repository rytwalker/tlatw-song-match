import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <nav>Social Nav</nav>
      <div>© 2020 The Lighthouse and the Whaler</div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding: 30px;
`;

export default Footer;