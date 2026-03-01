"use client";

import { useState } from "react";

export default function MetalCardsDemo() {
  const [logo, setLogo] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="left">
          <h1>Make your first impression feel expensive.</h1>
          <p>
            Premium engraved metal business cards with deep detail, sharp
            typography, and luxury finishes.
          </p>

          <label className="uploadBtn">
            Upload Your Logo
            <input type="file" accept="image/*" onChange={handleUpload} hidden />
          </label>
        </div>

        <div className="preview">
          {logo ? (
            <img src={logo} alt="Logo Preview" />
          ) : (
            <div className="placeholder">Your Logo Preview</div>
          )}
        </div>
      </section>

      <section className="pricing">
        <div className="card">
          <h3>Starter</h3>
          <h2>$299</h2>
          <p>100 Cards · Single-sided</p>
        </div>

        <div className="card featured">
          <h3>Pro</h3>
          <h2>$499</h2>
          <p>200 Cards · Double-sided · QR option</p>
        </div>

        <div className="card">
          <h3>Elite</h3>
          <h2>$799</h2>
          <p>300 Cards · Custom branding</p>
        </div>
      </section>

      <style>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top left, #111827, #050505);
          color: white;
          padding: 80px 20px;
          font-family: system-ui, sans-serif;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 100px auto;
        }

        .left h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .left p {
          color: #cbd5e1;
          margin-bottom: 30px;
          font-size: 18px;
        }

        .uploadBtn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 10px;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          cursor: pointer;
          font-weight: 600;
        }

        .preview {
          display: flex;
          justify-content: center;
        }

        .placeholder {
          width: 300px;
          height: 180px;
          background: #111;
          border: 1px solid #333;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .preview img {
          max-width: 300px;
          border-radius: 12px;
          border: 1px solid #333;
        }

        .pricing {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .featured {
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          color: white;
          transform: scale(1.05);
        }

        .card h2 {
          font-size: 36px;
          margin: 10px 0;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .pricing {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}