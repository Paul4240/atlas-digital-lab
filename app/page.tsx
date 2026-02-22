export default function Home() {
  const features = [
    {
      title: "Mobile-First Design",
      desc: "Looks sharp on phones, tablets, and desktops—where your customers actually browse.",
    },
    {
      title: "Lead-Ready Setup",
      desc: "Clear calls-to-action, contact section, and conversion-focused layout built in.",
    },
    {
      title: "Basic SEO Foundation",
      desc: "Clean structure, metadata, and best-practice setup to help you show up in search.",
    },
    {
      title: "Fast Turnaround",
      desc: "Most sites launch in 3–7 days once we have your info, logo, and a few photos.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Quick Call",
      desc: "We learn your business, goals, and the look you want. Simple, fast, and clear.",
    },
    {
      step: "02",
      title: "Build + Review",
      desc: "We design your site, send a review link, then polish it with your feedback.",
    },
    {
      step: "03",
      title: "Launch + Support",
      desc: "We publish it, connect your domain, and keep it updated with ongoing care.",
    },
  ];

  const portfolio = [
    { title: "Local Contractor", tag: "Service Business", note: "Modern homepage + contact flow" },
    { title: "Barbershop", tag: "Appointment-Driven", note: "Pricing + gallery + CTA buttons" },
    { title: "Cleaning Company", tag: "Lead Gen", note: "Simple quote funnel + trust sections" },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      monthly: "$50/mo",
      subtitle: "Clean online presence",
      items: [
        "1–3 page website",
        "Mobile-friendly layout",
        "Contact section + email link",
        "Basic SEO setup",
        "Launch help",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      price: "$499",
      monthly: "$75/mo",
      subtitle: "Best for most small businesses",
      items: [
        "Up to 5 pages",
        "Better conversion layout",
        "Basic analytics setup",
        "Speed + performance cleanup",
        "2 revision rounds",
      ],
      highlight: true,
    },
    {
      name: "Pro",
      price: "$799",
      monthly: "$99/mo",
      subtitle: "Built to generate leads",
      items: [
        "Up to 8 pages",
        "Portfolio / gallery section",
        "Lead-focused structure",
        "SEO foundation + indexing checklist",
        "Analytics installed",
        "3 revision rounds",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "How fast can you launch?",
      a: "Most sites launch in 3–7 days once we have your business info, logo, and photos. Rush options are possible.",
    },
    {
      q: "What do I need to provide?",
      a: "Business name, services, service area, phone/email, logo (if you have one), and a few photos. If you don’t have photos, we can use clean placeholders to start.",
    },
    {
      q: "What does monthly maintenance include?",
      a: "Hosting support, updates, security checks, small text edits, and keeping things running smooth. (Big changes or new pages can be quoted.)",
    },
    {
      q: "Do you help connect my domain?",
      a: "Yes. We’ll help connect your domain so your site goes live on your real web address.",
    },
  ];

  return (
    <main className="page">
      {/* Top Bar */}
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="logoMark" aria-hidden="true" />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandTag">Websites for small businesses</div>
            </div>
          </div>

          <nav className="nav">
            <a className="navLink" href="#services">Services</a>
            <a className="navLink" href="#pricing">Pricing</a>
            <a className="navLink" href="#work">Work</a>
            <a className="navLink" href="#contact">Contact</a>
          </nav>

          <a className="btn btnPrimary" href="#contact">Get a Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <h1 className="headline">
              Get a professional website that brings you customers.
            </h1>
            <p className="subhead">
              Atlas Digital Lab builds modern, mobile-friendly websites for local businesses.
              Simple process, clear pricing, and ongoing support.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary" href="#pricing">View Pricing</a>
              <a className="btn btnGhost" href="#contact">Contact Us</a>
            </div>

            <div className="trustRow" aria-label="Trust highlights">
              <div className="trustPill">3–7 day launch</div>
              <div className="trustPill">Mobile-first</div>
              <div className="trustPill">SEO foundation</div>
              <div className="trustPill">Ongoing support</div>
            </div>

            <div className="miniStats">
              <div className="miniStat">
                <div className="miniStatNum">3–7</div>
                <div className="miniStatLabel">days to launch</div>
              </div>
              <div className="miniStat">
                <div className="miniStatNum">24h</div>
                <div className="miniStatLabel">response time</div>
              </div>
              <div className="miniStat">
                <div className="miniStatNum">100%</div>
                <div className="miniStatLabel">mobile-friendly</div>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="heroCard" id="contact">
            <div className="cardTitle">Free Quote</div>
            <div className="cardSub">
              Tell us what you need and we’ll reply within 24 hours.
            </div>

            <div className="formGrid">
              <div className="field">
                <label className="label">Name</label>
                <div className="fakeInput">Your name</div>
              </div>
              <div className="field">
                <label className="label">Business</label>
                <div className="fakeInput">Business name</div>
              </div>
              <div className="field full">
                <label className="label">Email</label>
                <div className="fakeInput">you@email.com</div>
              </div>
              <div className="field full">
                <label className="label">Message</label>
                <div className="fakeTextarea">What do you want your website to do?</div>
              </div>
            </div>

            <div className="cardCtas">
              <a
                className="btn btnPrimary btnFull"
                href="mailto:hello@atlasdigitallab.com?subject=Website%20Quote%20Request&body=Name:%0ABusiness:%0AEmail:%0AWhat%20do%20you%20need%3F%0A"
              >
                Email to Start
              </a>
              <div className="tinyNote">
                Or email us directly:{" "}
                <a className="link" href="mailto:hello@atlasdigitallab.com">
                  hello@atlasdigitallab.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">What we do</h2>
            <p className="muted">
              We focus on clean design, clear messaging, and a layout built to turn visitors into leads.
            </p>
          </div>

          <div className="grid4">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="cardTop">
                  <div className="iconDot" aria-hidden="true" />
                  <div className="cardHeading">{f.title}</div>
                </div>
                <p className="cardText">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section alt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Simple process</h2>
            <p className="muted">No tech headaches. We keep it easy and move fast.</p>
          </div>

          <div className="grid3">
            {process.map((p) => (
              <div key={p.step} className="stepCard">
                <div className="stepNum">{p.step}</div>
                <div className="stepTitle">{p.title}</div>
                <p className="stepText">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section" id="work">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Sample work</h2>
            <p className="muted">
              We can start with clean templates and customize to match your brand and industry.
            </p>
          </div>

          <div className="grid3">
            {portfolio.map((w) => (
              <div key={w.title} className="workCard">
                <div className="workThumb" aria-hidden="true">
                  <div className="workThumbInner" />
                </div>
                <div className="workBody">
                  <div className="workTop">
                    <div className="workTitle">{w.title}</div>
                    <div className="badge">{w.tag}</div>
                  </div>
                  <div className="workNote">{w.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="centerCta">
            <a className="btn btnPrimary" href="#contact">Request a Quote</a>
            <a className="btn btnGhost" href="#pricing">See Packages</a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section alt" id="pricing">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Pricing</h2>
            <p className="muted">
              Clear packages with setup + monthly support. We can adjust details after we talk.
            </p>
          </div>

          <div className="pricingGrid">
            {pricing.map((p) => (
              <div key={p.name} className={`priceCard ${p.highlight ? "highlight" : ""}`}>
                {p.highlight && <div className="ribbon">Most Popular</div>}
                <div className="priceName">{p.name}</div>
                <div className="priceSub">{p.subtitle}</div>

                <div className="priceRow">
                  <div className="priceBig">{p.price}</div>
                  <div className="priceSmall">
                    setup
                    <div className="priceMonthly">{p.monthly} maintenance</div>
                  </div>
                </div>

                <ul className="list">
                  {p.items.map((it) => (
                    <li key={it} className="listItem">
                      <span className="check" aria-hidden="true">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <a className={`btn ${p.highlight ? "btnPrimary" : "btnGhost"} btnFull`} href="#contact">
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>

          <div className="finePrint">
            Note: Hosting/domain costs depend on your provider. We’ll guide you through setup.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">FAQ</h2>
            <p className="muted">Quick answers to the common questions.</p>
          </div>

          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} className="faqItem">
                <summary className="faqQ">{f.q}</summary>
                <div className="faqA">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <div className="brandSmall">
              <div className="logoMark" aria-hidden="true" />
              <div>
                <div className="brandName">Atlas Digital Lab</div>
                <div className="muted">Professional websites for small businesses.</div>
              </div>
            </div>
          </div>

          <div className="footerRight">
            <a className="link" href="mailto:hello@atlasdigitallab.com">hello@atlasdigitallab.com</a>
            <div className="muted small">
              Response time: usually within 24 hours.
            </div>
            <div className="muted small">
              © {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}