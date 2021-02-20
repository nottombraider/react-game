export const Footer = () => {
  return (
    <footer className="flex space-between">
      <div>
        <span>2021 </span>
        <a href="https://github.com/nottombraider/react-game">
          <img
            className="footer-img"
            src="https://clipart.info/images/ccovers/1499794873github-logo-png.png"
            alt="GitHub"
          />{" "}
          @nottombraider
        </a>
      </div>

      <a href="https://community-z.com/events/react-rsschool-2021">
        <img
          className="footer-img"
          src="https://rs.school/images/rs_school_js.svg"
          alt="RS School logo"
        />
      </a>
    </footer>
  );
};
