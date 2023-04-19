import "../styles/NotFound.scss";

function NotFound() {
  return (
    <>
      <h1>404 Error Page #2</h1>
      <p className="zoom-area">
        <b>Page</b> not found.
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          className="more-link"
        >
          Visit the original article
        </a>
      </div>
    </>
  );
}

export { NotFound };
