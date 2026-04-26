"use client";
import Link from "next/link";

export default function MobileAppDemoPage() {
  const PHONE = "8326845270";
  const PHONE_PRETTY = "(832) 684-5270";
  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">
      <section className="hero">
        <div className="heroCopy">
          <Link href="/" className="backLink">
            ← Back to Atlas
          </Link>

          <div className="kicker">MOBILE APP DEMO</div>

          <h1>A branded business app your customers can keep in their pocket.</h1>

          <p>
            This demo shows how a company app could help customers book, order,
            contact, view offers, and stay connected with the brand.
          </p>

          <div className="actions">
            <a href={`mailto:${EMAIL}`} className="goldBtn">
              Request an App Demo
            </a>
            <a href={`tel:${PHONE}`} className="darkBtn">
              Call / Text {PHONE_PRETTY}
            </a>
          </div>
        </div>

        <div className="phoneShell">
          <div className="phoneTop">
            <div>
              <div className="phoneTiny">PREMIUM LOCAL BUSINESS</div>
              <div className="phoneBrand">Atlas Demo Brand</div>
            </div>
            <a href={`tel:${PHONE}`} className="callPill">
              Call
            </a>
          </div>

          <div className="phoneBody">
            <div className="appKicker">BRANDED MOBILE APP</div>

            <h2>Built to impress customers and bring them back.</h2>

            <p>
              Booking, orders, offers, support, and loyalty in one clean mobile
              experience.
            </p>

            <a href={`mailto:${EMAIL}`} className="phoneCta">
              Launch This App
            </a>

            <div className="quickGrid">
              <div className="quickCard">
                <div className="dot" />
                <strong>Book</strong>
              </div>
              <div className="quickCard">
                <div className="dot" />
                <strong>Order</strong>
              </div>
              <div className="quickCard">
                <div className="dot" />
                <strong>Offers</strong>
              </div>
              <div className="quickCard">
                <div className="dot" />
                <strong>Support</strong>
              </div>
            </div>

            <div className="featureBox">
              <div className="appKicker">CUSTOMER RETENTION</div>
              <h3>Keep customers coming back.</h3>
              <p>
                Send offers, simplify reorders, and give customers a faster way
                to reach the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <div>
            <div className="kicker">WHAT THE APP CAN INCLUDE</div>
            <h2>Built around real business needs.</h2>
          </div>

          <p>
            Every business is different, but the goal stays the same: easier
            customer action, stronger brand trust, and better repeat business.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Booking / Requests</h3>
            <p>
              Let customers request appointments, quotes, consultations, or
              service calls.
            </p>
          </div>

          <div className="card">
            <h3>Products / Orders</h3>
            <p>
              Show services, products, packages, menus, or reorder options in a
              clean mobile layout.
            </p>
          </div>

          <div className="card">
            <h3>Offers / Loyalty</h3>
            <p>
              Give customers a reason to come back with rewards, promos, and
              exclusive app offers.
            </p>
          </div>

          <div className="card">
            <h3>One-Tap Contact</h3>
            <p>
              Make it simple to call, text, email, or request support from the
              app.
            </p>
          </div>
        </div>
      </section>

      <section className="pricingBox">
        <div>
          <div className="kicker">APP PACKAGES</div>
          <h2>Apps from $999</h2>
          <p>
            Start with a branded app demo or pair a full app build with a new
            website package.
          </p>
        </div>

        <a href={`mailto:${EMAIL}`} className="goldBtn">
          Request Pricing
        </a>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(216, 180, 79, 0.12), transparent 24%),
            linear-gradient(180deg, #060b14 0%, #08101b 50%, #050a12 100%);
          color: #f4efe4;
          font-family: Georgia, "Times New Roman", serif;
          padding: 28px 24px 80px;
          overflow-x: hidden;
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 430px;
          gap: 42px;
          align-items: center;
        }

        .heroCopy h1 {
          margin: 0 0 22px;
          font-size: clamp(48px, 7vw, 82px);
          line-height: 0.96;
          letter-spacing: -0.05em;
          max-width: 780px;
        }

        .heroCopy p,
        .sectionHead p,
        .pricingBox p,
        .card p {
          font-family: Arial, sans-serif;
          color: #bcc6d4;
          line-height: 1.7;
          font-size: 18px;
          margin: 0;
        }

        .heroCopy p {
          max-width: 650px;
          margin-bottom: 24px;
        }

        .backLink {
          display: inline-block;
          margin-bottom: 32px;
          color: #d8b44f;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-weight: 800;
        }

        .kicker,
        .appKicker {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 0.14em;
          font-weight: 900;
          color: #d8b44f;
          margin-bottom: 16px;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .goldBtn,
        .darkBtn,
        .phoneCta,
        .callPill {
          font-family: Arial, sans-serif;
          text-decoration: none;
          font-weight: 900;
        }

        .goldBtn {
          padding: 14px 18px;
          border-radius: 14px;
          background: linear-gradient(135deg, #e1c15f, #c89e2c);
          color: #111;
          box-shadow: 0 12px 34px rgba(216, 180, 79, 0.16);
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .darkBtn {
          padding: 14px 18px;
          border-radius: 14px;
          color: #f4efe4;
          background: rgba(255, 255, 255, 0.06);
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .phoneShell {
          border-radius: 38px;
          overflow: hidden;
          background: #0b0f17;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          width: 100%;
        }

        .phoneTop {
          padding: 22px;
          background: #171d28;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .phoneTiny {
          font-family: Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: #98a4b4;
          margin-bottom: 8px;
        }

        .phoneBrand {
          font-size: 28px;
          font-weight: 900;
          line-height: 1;
        }

        .callPill {
          background: #d8b44f;
          color: #111;
          padding: 13px 18px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .phoneBody {
          padding: 28px;
        }

        .phoneBody h2 {
          margin: 0;
          font-size: 42px;
          line-height: 0.96;
          letter-spacing: -0.05em;
        }

        .phoneBody p {
          font-family: Arial, sans-serif;
          color: #bcc6d4;
          font-size: 16px;
          line-height: 1.65;
          margin: 18px 0 22px;
        }

        .phoneCta {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #d8b44f;
          color: #111;
          border-radius: 999px;
          padding: 16px 18px;
          margin-bottom: 22px;
        }

        .quickGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .quickCard {
          font-family: Arial, sans-serif;
          background: #171d28;
          border-radius: 22px;
          padding: 16px;
          color: #f4efe4;
        }

        .dot {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: #d8b44f;
          margin-bottom: 12px;
        }

        .featureBox {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 20px;
        }

        .featureBox h3 {
          margin: 0 0 10px;
          font-size: 28px;
          line-height: 1.05;
        }

        .section {
          max-width: 1180px;
          margin: 90px auto 0;
        }

        .sectionHead {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 28px;
        }

        .sectionHead h2,
        .pricingBox h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 56px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.025)
          );
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 28px;
          line-height: 1.05;
        }

        .pricingBox {
          max-width: 1180px;
          margin: 90px auto 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.06),
            rgba(216, 180, 79, 0.08)
          );
          border-radius: 32px;
          padding: 34px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .page {
            padding: 20px 16px 64px;
          }

          .hero {
            display: flex;
            flex-direction: column;
            gap: 28px;
            align-items: stretch;
          }

          .heroCopy h1 {
            font-size: 46px;
            line-height: 0.95;
            max-width: 100%;
          }

          .heroCopy p {
            font-size: 17px;
          }

          .actions {
            flex-direction: column;
          }

          .goldBtn,
          .darkBtn {
            width: 100%;
          }

          .phoneShell {
            border-radius: 30px;
          }

          .phoneTop {
            padding: 18px;
          }

          .phoneBrand {
            font-size: 24px;
          }

          .phoneBody {
            padding: 22px;
          }

          .phoneBody h2 {
            font-size: 36px;
          }

          .section {
            margin-top: 64px;
          }

          .sectionHead {
            display: block;
          }

          .sectionHead p {
            margin-top: 18px;
            font-size: 17px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .pricingBox {
            margin-top: 64px;
            display: block;
            padding: 28px;
          }

          .pricingBox .goldBtn {
            margin-top: 22px;
          }
        }

        @media (max-width: 430px) {
          .heroCopy h1 {
            font-size: 40px;
          }

          .phoneBody h2 {
            font-size: 32px;
          }

          .quickGrid {
            grid-template-columns: 1fr 1fr;
          }

          .sectionHead h2,
          .pricingBox h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </main>
  );
}