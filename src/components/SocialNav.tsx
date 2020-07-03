import styled from "styled-components";
import { SpotifyIcon } from "./icons";
import { InstagramIcon } from "./icons/InstagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { AppleMusicIcon } from "./icons/AppleMusicIcon";
import { SoundcloudIcon } from "./icons/SoundcloudIcon";

function SocialNav() {
  return (
    <StyledSocialNav>
      <a
        href="https://instagram.com/thelighthouseandthewhaler"
        target="_blank"
        rel="noopen noreferrer"
      >
        <InstagramIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://facebook.com/thelighthouseandthewhaler"
        target="_blank"
        rel="noopen noreferrer"
      >
        <FacebookIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://twitter.com/tlatw"
        target="_blank"
        rel="noopen noreferrer"
      >
        <TwitterIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://www.youtube.com/user/thelandthew"
        target="_blank"
        rel="noopen noreferrer"
      >
        <YoutubeIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://open.spotify.com/artist/6ls5A8Wys9Swixpz4v6kj3?si=lhUpANMjSBmFuZW4X2tJTw"
        target="_blank"
        rel="noopen noreferrer"
      >
        <SpotifyIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://itunes.apple.com/us/artist/the-lighthouse-and-the-whaler/302376780"
        target="_blank"
        rel="noopen noreferrer"
      >
        <AppleMusicIcon height={20} width={20} color="#fafafa" />
      </a>
      <a
        href="https://soundcloud.com/lighthouse-and-the-whaler/"
        target="_blank"
        rel="noopen noreferrer"
      >
        <SoundcloudIcon height={20} width={20} color="#fafafa" />
      </a>
    </StyledSocialNav>
  );
}

const StyledSocialNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  padding: 16px 0;
  margin: 0 auto;
`;

export default SocialNav;
