export default function MetalCardsDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">

      <header className="top">
        <div className="brand">Metal Business Cards Demo</div>

        <div className="topBtns">
          <a href={`tel:${MAIN_PHONE}`} className="btn soft">
            Main {MAIN_PRETTY}
          </a>

          <a href={`tel:${SALES_PHONE}`} className="btn primary">
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section className="hero">

        <h1>
          Make your first impression feel <span>expensive</span>.
        </h1>

        <p>
          Premium engraved metal business cards designed for high-end brands.
        </p>

        <div className="ctaRow">
          <a href={`tel:${SALES_PHONE}`} className="btn primary">
            Call / Text to Order
          </a>

          <a
            href={`mailto:${EMAIL}?subject=Metal Cards Quote`}
            className="btn soft"
          >
            Email for Quote
          </a>
        </div>

      </section>

      <style>{`

      .page{
        min-height:100vh;
        background: radial-gradient(circle at 20% 0%, #141b2a 0%, #07090f 60%, #05060a 100%);
        color:#eaf2ff;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
      }

      .top{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px 30px;
        border-bottom:1px solid rgba(255,255,255,0.08);
      }

      .brand{
        font-weight:900;
      }

      .hero{
        max-width:1000px;
        margin:0 auto;
        padding:80px 30px;
      }

      h1{
        font-size:50px;
        margin-bottom:20px;
      }

      h1 span{
        color:#19d3ff;
      }

      p{
        opacity:0.85;
        margin-bottom:30px;
      }

      .ctaRow{
        display:flex;
        gap:12px;
      }

      .btn{
        padding:12px 18px;
        border-radius:999px;
        text-decoration:none;
        font-weight:700;
        font-size:14px;
      }

      .primary{
        background:linear-gradient(135deg,#19d3ff,#4b7bff);
        color:#071022;
      }

      .soft{
        background:rgba(255,255,255,0.08);
        color:white;
        border:1px solid rgba(255,255,255,0.15);
      }

      `}</style>

    </main>
  );
}