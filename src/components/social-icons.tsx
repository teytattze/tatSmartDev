import WhatsappIcon from '/public/social-icons/whatsapp.svg';
import FacebookIcon from '/public/social-icons/facebook.svg';
import LinkedInIcon from '/public/social-icons/linkedin.svg';
import InstagramIcon from '/public/social-icons/instagram.svg';
import GithubIcon from '/public/social-icons/github.svg';

export function SocialIcons() {
  const socialIconStyle = `
    w-6 h-6 
    text-offwhite fill-current 
    object-contain cursor-pointer 
    transition-all group-hover:scale-110 
    group-hover:text-primary group-focus:text-primary
  `;

  return (
    <>
      <a
        href="https://github.com/teytattze"
        target="blank"
        aria-label="Github link"
        className="group outline-none"
      >
        <GithubIcon className={socialIconStyle} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=60167178068"
        target="blank"
        aria-label="Whatsapp link"
        className="group outline-none"
      >
        <WhatsappIcon className={socialIconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/tat-tze-tey-530238216/"
        target="blank"
        aria-label="LinkedIn link"
        className="group outline-none"
      >
        <LinkedInIcon className={socialIconStyle} />
      </a>
      <a
        href="https://www.facebook.com/tattze.tey"
        target="blank"
        aria-label="Facebook link"
        className="group outline-none"
      >
        <FacebookIcon className={socialIconStyle} />
      </a>
      <a
        href="https://www.instagram.com/tattzetey/"
        target="blank"
        aria-label="Instagram link"
        className="group outline-none"
      >
        <InstagramIcon className={socialIconStyle} />
      </a>
    </>
  );
}
