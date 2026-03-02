// app/demo/roofing/page.tsx

const MAIN_PHONE = "8327050313";
const MAIN_PRETTY = "(832) 705-0313";

const SALES_PHONE = "3463657906";
const SALES_PRETTY = "(346) 365-7906";

const EMAIL = "hello@atlasdigitallab.com";

export default function RoofingDemo() {
  return (
    <main className="page">
      <header className="top">
        <div className="brand">Houston Elite Roofing</div>

        <div className="topBtns">
          <a href={`tel:${MAIN_PHONE}`} className="btn soft">
            Call {MAIN_PRETTY}
          </a>
          <a href={`tel:${SALES_PHONE}`} className="btn primary">
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="left">
          <h1>
            Roofing that feels <span>premium</span> — and gets calls.
          </h1>
          <p>
            Fast response. Honest pricing. Clean workmanship.
            Built to convert visitors into real leads.
          </p>

          <div className="ctaRow">
            <a href={`tel:${MAIN_PHONE}`} className="btn primary">
              Call Main
            </a>
            <a href={`tel:${SALES_PHONE}`} className="btn soft">
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="formCard">
          <h3>Get a Free Estimate</h3>

          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
          >
            <input name="name" placeholder="Name" />
            <input name="company" placeholder="Company Name" />
            <input name="phone" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
            />
            <button type="submit" className="btn primary full">
              Email to Start
            </button>
          </form>

          <div className="quick">
            <a href={`tel:${MAIN_PHONE}`}>Main: {MAIN_PRETTY}</a>
            <a href={`tel:${SALES_PHONE}`}>Sales: {SALES_PRETTY}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Houston Elite Roofing — Demo
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #0b2a4a 0%, #0b1426 60%, #070b14 100%);
          color: #eaf2ff;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .brand {
          font-weight: 900;
          font-size: 18px;
        }

        .topBtns {
          display: flex;
          gap: 10px;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 30px;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 40px;
        }

        h1 {
          font-size: 48px;
          line-height: 1.05;
          margin-bottom: 20px;
        }

        h1 span {
          color: #19d3ff;
        }

        p {
          opacity: 0.85;
          margin-bottom: 25px;
        }

        .ctaRow {
          display: flex;
          gap: 12px;
        }

        .formCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 25px;
          border-radius: 16px;
          backdrop-filter: blur(8px);
        }

        .formCard h3 {
          margin-bottom: 15px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.25);
          color: white;
        }

        .quick {
          margin-top: 15px;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
        }

        .footer {
          text-align: center;
          padding: 30px;
          border-top: 1px solid rgba(255,255,255,0.08);
          opacity: 0.8;
        }

        .btn {
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          display: inline-block;
        }

        .primary {
          background: linear-gradient(135deg, #19d3ff, #4b7bff);
          color: #071022;
        }

        .soft {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .full {
          width: 100%;
          border-radius: 12px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}