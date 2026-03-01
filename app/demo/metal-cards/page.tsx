"use client"
import { useState } from "react"

export default function MetalCardsDemo() {
  const [logo, setLogo] = useState<string | null>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setLogo(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

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

        <div className="previewCard">
          {logo ? (
            <img src={logo} alt="Logo Preview" className="previewLogo" />
          ) : (
            <span className="previewPlaceholder">
              Your Logo Preview
            </span>
          )}
        </div>
      </section>

      <section className="pricing">
        <div className="card">
          <h3>Starter</h3>
          <div className="price">$299</div>
          <p>100 Cards · Single-sided</p>
        </div>

        <div className="card pro">
          <h3>Pro</h3>
          <div className="price">$499</div>
          <p>200 Cards · Double-sided · QR option</p>
        </div>

        <div className="card">
          <h3>Elite</h3>
          <div className="price">$799</div>
          <p>300 Cards · Custom branding</p>
        </div>
      </section>

      <style jsx>{`
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
          margin: 0 auto 120px auto;
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
          padding: 14px 28px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .uploadBtn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 200, 255, 0.4);
        }

        .previewCard {
          width: 360px;
          height: 220px;
          border-radius: 16px;
          background: linear-gradient(145deg, #1c1c1f, #111114);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.8),
            0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .previewLogo {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.4));
        }

        .previewPlaceholder {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
          letter-spacing: 1px;
        }

        .pricing {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .card {
          padding: 40px;
          border-radius: 20px;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .pro {
          background: linear-gradient(145deg, #06b6d4, #3b82f6);
          color: white;
          transform: scale(1.05);
        }

        .price {
          font-size: 36px;
          font-weight: 700;
          margin: 15px 0;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .previewCard {
            margin: 0 auto;
          }

          .pricing {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}