"use client";

import React from "react";

export default function RoofingDemo() {
  const PHONE = "(346) 365-7906";
  const PHONE_LINK = "tel:3463657906";

  return (
    <main className="page">

      {/* NAVBAR */}

      <div className="nav">
        <div className="container navInner">
          <div className="brand">
            Atlas Roofing Demo
          </div>

          <div className="navCtas">
            <a href={PHONE_LINK} className="pill primary">
              Call {PHONE}
            </a>
            <a href={PHONE_LINK} className="pill">
              Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}

      <section className="hero container">

        <div className="heroLeft">

          <h1>
            Houston Roof Replacement & Repair
          </h1>

          <p>
            Fast inspections, honest pricing, and quality roof installs.
            Trusted by homeowners across Houston.
          </p>

          <div className="ctaRow">
            <a href={PHONE_LINK} className="btn primary">
              Call Now
            </a>

            <a href={PHONE_LINK} className="btn">
              Get Free Estimate
            </a>
          </div>

          <div className="stat">
  <strong>24hr</strong>{" "}
  Emergency Repairs
</div>

<div className="stat">
  <strong>10+ Years</strong>{" "}
  Roofing Experience
</div>

<div className="stat">
  <strong>Free</strong>{" "}
  Roof Inspections
</div>

        </div>

        <div className="heroRight">
          <div className="heroCard">
            <h3>Free Roof Inspection</h3>

            <p>
              Call or text us and we’ll schedule a same-day roof inspection.
            </p>

            <a href={PHONE_LINK} className="btn primary full">
              Call {PHONE}
            </a>
          </div>
        </div>

      </section>

      {/* SERVICES */}

      <section className="container section">

        <h2>Roofing Services</h2>

        <div className="grid">

          <div className="card">
            <h3>Roof Replacement</h3>
            <p>
              Full roof replacement using high-quality shingles built to last.
            </p>
          </div>

          <div className="card">
            <h3>Roof Repair</h3>
            <p>
              Leak detection, storm damage repair, and emergency fixes.
            </p>
          </div>

          <div className="card">
            <h3>Storm Damage</h3>
            <p>
              Insurance claim support and fast storm damage repairs.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="container section">

        <div className="ctaBlock">

          <h2>Need a Roof Inspection?</h2>

          <p>
            Call now and schedule your free inspection today.
          </p>

          <a href={PHONE_LINK} className="btn primary big">
            Call {PHONE}
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="container footer">
        Atlas Digital Lab Roofing Demo
      </footer>


      <style jsx>{`

        .page{
          min-height:100vh;
          background: radial-gradient(circle at top,#0f2b4c,#07111f);
          color:white;
          font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;
        }

        .container{
          max-width:1100px;
          margin:auto;
          padding:20px;
        }

        @media (max-width: 700px){

  .navInner{
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .navCtas{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .navCtas a{
    width: 100%;
    text-align: center;
  }

}

        .nav{
          border-bottom:1px solid rgba(255,255,255,.1);
          backdrop-filter:blur(10px);
        }

        .navInner{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
        }

        .brand{
          font-weight:800;
        }

        .navCtas{
          display:flex;
          gap:10px;
        }

        .pill{
          padding:10px 14px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.2);
          text-decoration:none;
          color:white;
          font-weight:700;
          background:rgba(255,255,255,.06);
        }

        .hero{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:30px;
          padding-top:40px;
        }

        h1{
          font-size:48px;
          margin:0;
        }

        p{
          opacity:.85;
          line-height:1.5;
        }

        .ctaRow{
          display:flex;
          gap:12px;
          margin-top:20px;
        }

        .btn{
          padding:14px 18px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.2);
          text-decoration:none;
          color:white;
          font-weight:800;
          background:rgba(255,255,255,.06);
        }

        .primary{
          background:linear-gradient(135deg,#2eb4ff,#00d2aa);
          color:#07111f;
        }

        .heroStats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
          margin-top:20px;
        }

        .stat{
          background:rgba(255,255,255,.05);
          padding:12px;
          border-radius:10px;
          font-size:13px;
        }

        .heroCard{
          background:rgba(0,0,0,.35);
          padding:20px;
          border-radius:16px;
        }

        .full{
          width:100%;
        }

        .section{
          margin-top:40px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          margin-top:20px;
        }

        .card{
          background:rgba(255,255,255,.06);
          padding:20px;
          border-radius:16px;
        }

        .ctaBlock{
          background:rgba(255,255,255,.06);
          padding:30px;
          border-radius:16px;
          text-align:center;
        }

        .big{
          margin-top:15px;
          display:inline-block;
        }

        .footer{
          margin-top:40px;
          opacity:.7;
          font-size:12px;
          text-align:center;
        }

        /* MOBILE */

        @media(max-width:900px){

          .hero{
            grid-template-columns:1fr;
          }

          .grid{
            grid-template-columns:1fr;
          }

          .heroStats{
            grid-template-columns:1fr;
          }

          .navInner{
            flex-direction:column;
            align-items:flex-start;
          }

          .navCtas{
            width:100%;
            flex-direction:column;
          }

          .pill{
            width:100%;
            text-align:center;
          }

          .ctaRow{
            flex-direction:column;
          }

          .btn{
            width:100%;
            text-align:center;
          }

          h1{
            font-size:36px;
          }

        }

      `}</style>

    </main>
  );
}