import React from "react";
import { Link } from "react-router-dom";
import data from "@/data/layout/layout.json";

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
          {data.socialLinks.map((link) => (
            <li>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
                className="social-media-icon"
              ></a>
            </li>
          ))}
        </ul>
        <ul
          className="mt-12 flex flex-col items-center gap-5 [grid-area:nl] md:items-start md:flex-row 
        md:mt-8 xl:flex-col xl:mt-0 xl:gap-[1.125rem]"
        >
          {data.navLinks.map((link) => (
            <li>
              <Link to={link.to} className="text-footer hover:opacity-30">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-28 w-[10.75rem] [grid-area:ct] md:mt-0 md:justify-self-end">
          <Link to={data.footer.cta.to} className="ternary-button">
            <span>{data.footer.cta.text}</span>
          </Link>
        </div>
        <p
          className="mt-9 text-[0.9375rem] leading-[1.25rem] text-surface/50 text-center
          [grid-area:cp] md:mt-[4.5rem] md:justify-self-end xl:self-end xl:mt-0
        "
        >
          {data.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
