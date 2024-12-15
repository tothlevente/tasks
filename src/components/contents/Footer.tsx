import packageJson from "../../../package.json";

export default function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <p>
          This website under MIT license, ad-free and does not use cookies.
        </p>
        <p>For more information please visit the project repository.</p>
        <p>Created by Levente in 2024</p>
        <p>v{packageJson.version}</p>
      </div>
      <div>
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tothlevente"
        >
          <i className="bi bi-person-circle"></i>
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tothlevente/to-do-list"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
}
