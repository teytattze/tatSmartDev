import WhatsappIcon from '/public/social-icons/whatsapp.svg';
import FacebookIcon from '/public/social-icons/facebook.svg';
import LinkedInIcon from '/public/social-icons/linkedin.svg';
import InstagramIcon from '/public/social-icons/instagram.svg';
import GithubIcon from '/public/social-icons/github.svg';
import {
  PERSONAL_FACEBOOK_LINK,
  PERSONAL_GITHUB_LINK,
  PERSONAL_INSTAGRAM_LINK,
  PERSONAL_LINKEDIN_LINK,
  PERSONAL_WHATSAPP_LINK,
} from 'src/modules/personal/personal.const';

export function SocialIcons() {
  const socialIconStyle = `
    w-6 h-6 
    text-offwhite fill-current 
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
        href={PERSONAL_GITHUB_LINK}
        target="blank"
        aria-label="Github link"
        className={linkStyle}
      >
        <GithubIcon className={socialIconStyle} />
      </a>
      <a
        href={PERSONAL_WHATSAPP_LINK}
        target="blank"
        aria-label="Whatsapp link"
        className={linkStyle}
      >
        <WhatsappIcon className={socialIconStyle} />
      </a>
      <a
        href={PERSONAL_LINKEDIN_LINK}
        target="blank"
        aria-label="LinkedIn link"
        className={linkStyle}
      >
        <LinkedInIcon className={socialIconStyle} />
      </a>
      <a
        href={PERSONAL_FACEBOOK_LINK}
        target="blank"
        aria-label="Facebook link"
        className={linkStyle}
      >
        <FacebookIcon className={socialIconStyle} />
      </a>
      <a
        href={PERSONAL_INSTAGRAM_LINK}
        target="blank"
        aria-label="Instagram link"
        className={linkStyle}
      >
        <InstagramIcon className={socialIconStyle} />
      </a>
    </>
  );
}
