import React from "react";
import Image from "next/image";
import FooterStyled from "../components.styled/Footer.styled";
import Spikes from "./Spikes";

const Footer = ({
  id,
  className,
  children,
  bgImage = "/assets/blue-skies-bg.png",
}) => {
  return (
    <FooterStyled id={id} className={` ${className || ""}`} bgImage={bgImage}>
      <div className="wrapper">
        <h2 className="footer__title">ZALTICK</h2>

        <p className="footer__text">Wanna get in touch?</p>

        <a className="footer__cta" href="mailto:zaltickgames@gmail.com">
          Contact Us
        </a>

        <div className="footer__socials">
          <a
            className="social"
            href="https://twitter.com/ZaltickGames"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/twitter.svg"
              alt="twitter"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>

      <Spikes flip="v" />
    </FooterStyled>
  );
};

export default Footer;
