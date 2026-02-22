export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="container">
          <p className="badge">Houston • Small Business Websites</p>

          <h1 className="title">Atlas Digital Lab</h1>
          <p className="subtitle">
            Professional websites for small businesses. Fast setup. Simple
            pricing. Ongoing support.
          </p>

          <div className="cards">
            <div className="card">
              <h2>What we do</h2>
              <p>
                We build modern, mobile-friendly websites that help local
                businesses stand out and get more customers.
              </p>
            </div>

            <div className="card">
              <h2>Pricing</h2>
              <ul>
                <li>
                  <strong>Starter:</strong> $299 setup + $50/month maintenance
                </li>
                <li>
                  <strong>Standard:</strong> $499 setup + $75/month maintenance
                </li>
                <li>
                  <strong>Pro:</strong> $799 setup + $99/month maintenance
                </li>
              </ul>
              <p className="small">
                (We can adjust pricing later — this just gives you a clean
                professional baseline.)
              </p>
            </div>
          </div>

          <div className="ctaRow">
            <a className="btn" href="mailto:hello@atlasdigitallab.com">
              Email Us
            </a>

            <a className="btnOutline" href="#contact">
              Contact Info
            </a>
          </div>
        </div>
      </header>

      <section className="section" id="contact">
        <div className="container">
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionText">
            Email us anytime:
            <a className="link" href="mailto:hello@atlasdigitallab.com">
              {" "}
              hello@atlasdigitallab.com
            </a>
          </p>
          <p className="sectionText small">
            Response time: usually within 24 hours.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="small">
            © {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}