import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image'
import '../css/SocialCTA.css'

const socials = [
  {
    name: "Instagram",
    icon: faInstagram,
    handle: "@ywaytoolucky_",
    url: "https://instagram.com/yourbrand",
    hoverColor: "#E1306C",
  },
  {
    name: "TikTok",
    icon: faTiktok,
    handle: "@waytoolucky_",
    url: "https://tiktok.com/@yourbrand",
    hoverColor: "#010101",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    handle: "Lucky Tea",
    url: "https://facebook.com/yourbrand",
    hoverColor: "#1877F2",
  },
];

export default function SocialCTA() {
  return (
    <section className="social-cta">
        <div className="flex items-center justify-center gap-2">

        <h2 className="headline">Follow along for the good stuff</h2>
        <Image width={60} height={60} alt="Clover Logo" src="/assets/clover.png" />
        </div>
      

      <div className="social-buttons">
        {socials.map(({ name, icon, handle, url, hoverColor }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{ "--hover-color": hoverColor }}
          >
            <FontAwesomeIcon icon={icon} className="social-icon" />
            <span className="social-info">
              <span className="social-name">{name}</span>
              <span className="social-handle">{handle}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}