import WhatsappIcon from '/public/images/socials/whatsapp.svg';
import FacebookIcon from '/public/images/socials/facebook.svg';
import LinkedInIcon from '/public/images/socials/linkedin.svg';
import InstagramIcon from '/public/images/socials/instagram.svg';
import GithubIcon from '/public/images/socials/github.svg';
import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
} from '../data/personal/social-media.data';

export function SocialIcons() {
  const socialIconStyle = `
    w-6 h-6 
    text-white fill-current 
    object-contain cursor-pointer 
    transition-all group-hover:scale-110 
    group-hover:text-primary group-focus:text-primary
  `;

  const linkStyle = `
    group outline-none
  `;

  return (
    <>
      <a
        href={GITHUB_LINK}
        target="blank"
        aria-label="Github link"
        className={linkStyle}
      >
        <GithubIcon className={socialIconStyle} />
      </a>
      <a
        href={WHATSAPP_LINK}
        target="blank"
        aria-label="Whatsapp link"
        className={linkStyle}
      >
        <WhatsappIcon className={socialIconStyle} />
      </a>
      <a
        href={LINKEDIN_LINK}
        target="blank"
        aria-label="LinkedIn link"
        className={linkStyle}
      >
        <LinkedInIcon className={socialIconStyle} />
      </a>
      <a
        href={FACEBOOK_LINK}
        target="blank"
        aria-label="Facebook link"
        className={linkStyle}
      >
        <FacebookIcon className={socialIconStyle} />
      </a>
      <a
        href={INSTAGRAM_LINK}
        target="blank"
        aria-label="Instagram link"
        className={linkStyle}
      >
        <InstagramIcon className={socialIconStyle} />
      </a>
    </>
  );
}
