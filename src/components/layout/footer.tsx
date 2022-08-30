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
    <footer className="bg-neutral-950 py-14">
      <div className="container grid grid-cols-1 justify-items-center">
        <div className="flex justify-center">
          <Link to="/" aria-label="Homepage">
            <img src="/assets/shared/desktop/logo-white.svg" alt="" />
          </Link>
        </div>

        <ul className="mt-8 flex justify-center gap-3.5">
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
        <ul className="mt-12 flex flex-col items-center gap-5">
          <NavlinkItem href="/">Home</NavlinkItem>
          <NavlinkItem href="/stories">Stories</NavlinkItem>
          <NavlinkItem href="/features">Features</NavlinkItem>
          <NavlinkItem href="/pricing">Pricing</NavlinkItem>
        </ul>

        <div className="mt-28 w-[10.75rem]">
          <Link to="/" className="ternary-button">
            Get Invited
          </Link>
        </div>
        <p className="mt-9 text-[0.9375rem] leading-[1.25rem] text-surface/50 text-center">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
