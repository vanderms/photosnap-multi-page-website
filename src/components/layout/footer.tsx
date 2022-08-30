import React from "react";
import { Link } from "react-router-dom";

const SocialLinkItem: React.FC<{
  href: string;
  aria: string;
}> = (props) => (
  <li>
    <a
      href={`https://${props.href}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.aria}
      className="social-media-icon"
    ></a>
  </li>
);

const NavlinkItem: React.FC<{ href: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <li>
      <Link to={props.href} className="text-footer hover:opacity-30">
        {props.children}
      </Link>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-14 md:py-16">
      <div className="container footer-grid">
        <div className="flex justify-center [grid-area:lg]">
          <Link to="/" aria-label="Homepage">
            <img src="/assets/shared/desktop/logo-white.svg" alt="" />
          </Link>
        </div>

        <ul className="mt-8 flex justify-center gap-3.5 [grid-area:sl] md:mt-[4.5rem] xl:self-end">
          <SocialLinkItem
            href="www.facebook.com"
            aria="facebook"
          ></SocialLinkItem>
          <SocialLinkItem
            href="www.youtube.com"
            aria="youtube"
          ></SocialLinkItem>
          <SocialLinkItem
            href="www.twitter.com"
            aria="twitter"
          ></SocialLinkItem>
          <SocialLinkItem
            href="www.pinterest.com"
            aria="pinterest"
          ></SocialLinkItem>
          <SocialLinkItem
            href="www.instagram.com"
            aria="instagram"
          ></SocialLinkItem>
        </ul>
        <ul className="mt-12 flex flex-col items-center gap-5 [grid-area:nl] md:items-start md:flex-row 
        md:mt-8 xl:flex-col xl:mt-0 xl:gap-[1.125rem]">
          <NavlinkItem href="/">Home</NavlinkItem>
          <NavlinkItem href="/stories">Stories</NavlinkItem>
          <NavlinkItem href="/features">Features</NavlinkItem>
          <NavlinkItem href="/pricing">Pricing</NavlinkItem>
        </ul>

        <div className="mt-28 w-[10.75rem] [grid-area:ct] md:mt-0 md:justify-self-end">
          <Link to="/" className="ternary-button">
            <span>Get An Invite</span>
          </Link>
        </div>
        <p className="mt-9 text-[0.9375rem] leading-[1.25rem] text-surface/50 text-center
          [grid-area:cp] md:mt-[4.5rem] md:justify-self-end xl:self-end xl:mt-0
        ">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
