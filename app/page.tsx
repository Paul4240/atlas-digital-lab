export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const SALES_PHONE = "3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  const formatPhone = (digits: string) => {
    const d = digits.replace(/\D/g, "").slice(0, 10);
    if (d.length !== 10) return digits;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const mainPretty = formatPhone(MAIN_PHONE);
  const salesPretty = formatPhone(SALES_PHONE);

  return (
    <main className="adl-page">
      {/* NAV */}
      <header className="adl-navWrap">
        <div className="adl-nav">
          <div className="adl-brand">
            <div className="adl-logo" />
            <div className="adl-brandText">
              <div className="adl-brandName">Atlas Digital Lab</div>
              <div className="adl-brandTag">Websites • SEO • Small Business Growth</div>
            </div>
          </div>

          <nav className="adl-links">
            <a className="adl-link" href="#services">Services</a>
            <a className="adl-link" href="#demos">Demos</a>
            <a className="adl-link" href="#pricing">Pricing</a>
          </nav>

          <div className="adl-navCtas">
            <a className="adl-pill" href={`tel:${MAIN_PHONE}`}>Call {mainPretty}</a>
            <a className="adl-pill adl-pillAlt" href={`tel:${SALES_PHONE}`}>Sales {salesPretty}</a>
            <a className="adl-primaryBtn" href={`mailto:${EMAIL}`}>Get a Quote</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="adl-hero">
        <div className="adl-left">
          <div className="adl-kicker">Fast turnaround • Mobile-first • Clear pricing</div>

          <h1 className="adl-h1">
            Websites that make <span>small businesses</span> look premium — and get calls.
          </h1>

          <p className="adl-sub">
            Clean, high-conversion websites built for real local businesses.
          </p>

          <div className="adl-ctaRow">
            <a className="adl-primaryBtn adl-big" href={`tel:${MAIN_PHONE}`}>
              Call {mainPretty}
            </a>
            <a className="adl-ghostBtn adl-big" href={`tel:${SALES_PHONE}`}>
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="adl-right">
          <div className="adl-mock">
            <div className="adl-mockTop">
              <span />
              <span />
              <span />
            </div>

            <div className="adl-mockBody">
              <div className="adl-mockTitle">High-conversion layout</div>
              <div className="adl-mockLine" />
              <div className="adl-mockLine adl-short" />

              <div className="adl-mockPills">
                <div className="adl-miniPill">Main: {mainPretty}</div>
                <div className="adl-miniPill adl-miniAlt">Sales: {salesPretty}</div>
              </div>

              <div className="adl-mockBoxRow">
                <div className="adl-mockBox" />
                <div className="adl-mockBox" />
                <div className="adl-mockBox" />
              </div>

              <div className="adl-mockCta" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="adl-section">
        <h2 className="adl-h2">What we do</h2>
        <p className="adl-sectionSub">
          Simple packages, clean design, and a clear path to getting customers.
        </p>

        <div className="adl-grid3">
          <div className="adl-card">
            <h3>Websites</h3>
            <p>Fast, modern sites that look expensive and load quick.</p>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div className="adl-card">
            <h3>SEO & Google Setup</h3>
            <p>Get found locally and build trust fast.</p>
            <ul>
              <li>Google Business profile help</li>
              <li>On-page SEO basics</li>
              <li>Performance + indexing ready</li>
            </ul>
          </div>

          <div className="adl-card">
            <h3>Branding</h3>
            <p>Clean logos, colors, and polish that makes you look legit.</p>
            <ul>
              <li>Logo refresh</li>
              <li>Color + typography</li>
              <li>Professional layout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="adl-section">
        <h2 className="adl-h2">Demos you can show clients</h2>
        <p className="adl-sectionSub">
          Use these as proof of quality when selling your services.
        </p>

        <div className="adl-grid2">
          <div className="adl-demoCard">
            <div className="adl-demoTop">
              <div>
                <h3>Metal Business Cards Demo</h3>
                <p>Looks like a real high-end brand page (finishes, packages, contact).</p>
              </div>
              <span className="adl-tag">Premium product-style</span>
            </div>
            <a className="adl-ghostBtn" href="/demo/metal-cards">Open Metal Cards Demo</a>
          </div>

          <div className="adl-demoCard">
            <div className="adl-demoTop">
              <div>
                <h3>Roofing Demo</h3>
                <p>Built to get calls: strong hero, trust blocks, and a simple quote path.</p>
              </div>
              <span className="adl-tag">Local service-style</span>
            </div>
            <a className="adl-ghostBtn" href="/demo/roofing">Open Roofing Demo</a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="adl-section">
        <h2 className="adl-h2">Simple pricing</h2>
        <p className="adl-sectionSub">
          Start clean. Upgrade when you want more features or a custom build.
        </p>

        <div className="adl-pricing">
          <div className="adl-priceCard">
            <h3>Starter</h3>
            <div className="adl-price">$299</div>
            <p className="adl-muted">Best for: quick online presence</p>
            <ul>
              <li>Single-page layout</li>
              <li>Mobile-first</li>
              <li>Contact section</li>
            </ul>
            <a className="adl-ghostBtn adl-full" href={`tel:${MAIN_PHONE}`}>Start Starter</a>
          </div>

          <div className="adl-priceCard adl-featured">
            <div className="adl-badge">Most popular</div>
            <h3>Pro</h3>
            <div className="adl-price">$499</div>
            <p className="adl-muted">Best for: more trust + structure</p>
            <ul>
              <li>High-conversion sections</li>
              <li>Service + trust blocks</li>
              <li>Everything in Starter</li>
            </ul>
            <a className="adl-primaryBtn adl-full" href={`tel:${SALES_PHONE}`}>Start Pro</a>
          </div>

          <div className="adl-priceCard">
            <h3>Elite</h3>
            <div className="adl-price">$799+</div>
            <p className="adl-muted">Best for: custom build + positioning</p>
            <ul>
              <li>Custom layout + sections</li>
              <li>Better branding polish</li>
              <li>Everything in Pro</li>
            </ul>
            <a className="adl-ghostBtn adl-full" href={`tel:${SALES_PHONE}`}>Call/Text to Plan</a>
          </div>
        </div>

        <div className="adl-bottomCtas">
          <div className="adl-softCard">
            Want us to build your next demo site for a specific niche?
          </div>
          <div className="adl-bottomBtns">
            <a className="adl-ghostBtn" href={`tel:${MAIN_PHONE}`}>Text {mainPretty}</a>
            <a className="adl-primaryBtn" href={`mailto:${EMAIL}`}>Email for Quote</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="adl-footer">
        <div>© 2026 Atlas Digital Lab — Websites • SEO • Branding</div>
        <div>Main: {mainPretty} • Sales: {salesPretty} • {EMAIL}</div>
      </footer>
    </main>
  );
}