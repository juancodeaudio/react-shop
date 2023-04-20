import "../styles/NotFound.scss";

function NotFound() {
  return (
    <>
      <h1 className="notFound">UPS!</h1>
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
        <a href="/" className="more-link">
          Visit the original article
        </a>
      </div>
    </>
  );
}

export { NotFound };
