import "./style-Footer.css";
import footerLogo from "../pictures/nottombraider-github-logo.jpg";

export const Footer = () => {
  return (
    <footer className="footer flex space-between">
      <a
        href="https://community-z.com/events/react-rsschool-2021"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="footer-rsschool-logo"
          src="https://rs.school/images/rs_school_js.svg"
          alt="RS School logo"
        />
      </a>
      <a
        href="https://github.com/nottombraider/react-game"
        rel="noreferrer"
        target="_blank"
      >
        <img className="footer-logo" src={footerLogo} alt="GitHub" />
      </a>
    </footer>
  );
};
