"use client";

import { useState } from "react";

export default function RoofingDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function submitForm() {
    const subject = "Roof Estimate Request";

    const body = `
Name: ${name}
Company: ${company}
Phone: ${phone}

Message:
${message}
`;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="page">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <div className="brandTitle">Houston Elite Roofing</div>
          <div className="brandSub">Fast response • Honest pricing</div>
        </div>

        <div className="headerBtns">
          <a className="pill" href={`tel:${MAIN_PHONE}`}>
            Call {MAIN_PRETTY}
          </a>
          <a className="pill primary" href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="heroLeft">
          <h1>
            Roofing that feels <span className="accent">premium</span> — and
            gets calls.
          </h1>

          <p className="sub">
            Quality installs, honest pricing, and clean workmanship. Built to
            make contractors look professional and get more calls.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
              Call Office
            </a>
            <a className="btn" href={`tel:${SALES_PHONE}`}>
              Call Sales
            </a>
          </div>
        </div>

        {/* Estimate Form */}
        <div className="formCard">
          <h3>Get a Free Estimate</h3>

          <input
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            className="input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="textarea"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="btn primary full" onClick={submitForm}>
            Email to Start
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2>Roofing Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Roof Replacement</h3>
            <p>Full roof tear-offs and installs with premium materials.</p>
          </div>

          <div className="card">
            <h3>Roof Repairs</h3>
            <p>Fix leaks, flashing, and damaged shingles quickly.</p>
          </div>

          <div className="card">
            <h3>Storm Damage</h3>
            <p>Inspections and repair after hail or wind damage.</p>
          </div>

          <div className="card">
            <h3>Insurance Claims</h3>
            <p>Help working with adjusters and documentation.</p>
          </div>

          <div className="card">
            <h3>Metal Roofing</h3>
            <p>Long lasting premium metal roof installs.</p>
          </div>

          <div className="card">
            <h3>Gutters</h3>
            <p>Replacement and drainage solutions.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom">
        <h2>Need a roofing estimate?</h2>

        <div className="ctaRow">
          <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
            Call {MAIN_PRETTY}
          </a>

          <a className="btn" href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color: white;
          font-family: system-ui;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }

        .pill {
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.2);
          margin-left: 10px;
          text-decoration: none;
          color: white;
        }

        .pill.primary {
          background: linear-gradient(135deg,#2eb4ff,#22d3ee);
          color: black;
          border: none;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        h1 {
          font-size: 48px;
        }

        .accent {
          color: #22d3ee;
        }

        .sub {
          margin-top: 12px;
          opacity: .8;
        }

        .ctaRow {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.2);
          text-decoration: none;
          color: white;
        }

        .btn.primary {
          background: linear-gradient(135deg,#2eb4ff,#22d3ee);
          border: none;
          color: black;
        }

        .btn.full {
          width: 100%;
          margin-top: 10px;
        }

        .formCard {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 16px;
          padding: 20px;
        }

        .input, .textarea {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(0,0,0,.2);
          color: white;
        }

        .textarea {
          min-height: 100px;
        }

        .section {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          background: rgba(255,255,255,.05);
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.15);
        }

        .bottom {
          text-align: center;
          padding: 50px 20px;
        }

        @media (max-width:900px){
          .hero{
            grid-template-columns:1fr;
          }

          .grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </main>
  );
}