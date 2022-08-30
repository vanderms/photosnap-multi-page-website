import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className="sr-only">Photosnap Website</h1>
      <a href="#main" className="sr-only">
        Skip nav
      </a>
      <nav>
        <a href="/" aria-label="Homepage">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
        </a>
      </nav>
    </header>
  );
};
