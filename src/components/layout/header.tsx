import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "@/data/layout/layout.json";

const navlinks = data.navLinks.filter((x) => x.label != "home");

export const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<{ open: boolean }>({
    open: false,
  });

  const location = useLocation();
  useEffect(() => {
    setSidebar({ open: false });
  }, [location]);

  return (
    <header className="h-[4.5rem] ">
      <h1 className="sr-only">{data.header.title}</h1>
      <a href="#main" className="sr-only">
        Skip nav
      </a>
      <nav className="fixed bg-surface top-0 left-0 w-full h-[4.5rem] z-[99]">
        <div className="container h-full flex items-center justify-between">
          <Link to="/" aria-label="Homepage">
            <img src="/assets/shared/desktop/logo.svg" alt="" />
          </Link>
          <button
            aria-label="open menu on mobile"
            className="p-2 md:hidden"
            aria-pressed={sidebar.open}
            onClick={() => setSidebar((prev) => ({ open: !prev.open }))}
          >
            <img
              src={`/assets/shared/mobile/${
                sidebar.open ? "close.svg" : "menu.svg"
              }`}
              alt=""
            />
          </button>
          <div
            className={`fixed bg-surface w-full flex flex-col top-[4.5rem] p-8 items-center z-[98] gap-5
             ${sidebar.open ? "right-0 transition-all" : "right-[-100%]"}
            md:contents
             `}
          >
            <ul className="flex flex-col items-center gap-5 w-full md:flex-row md:w-max md:gap-9 md:mr-1">
              {navlinks.map((link) => (
                <li>
                  <Link className="text-nav" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="opacity-20 w-full h-0 border-b border-x-neutral-950 md:hidden"></div>
            <div className="w-full md:w-[9.875rem]">
              <Link to={data.header.cta.to} className="primary-button">
                {data.header.cta.text}
              </Link>
            </div>
          </div>
        </div>
        {sidebar.open && (
          <div
            className="fixed w-full h-screen bg-neutral-950/50 z-[97]"
            onClick={() => setSidebar({ open: false })}
          ></div>
        )}
      </nav>
    </header>
  );
};
