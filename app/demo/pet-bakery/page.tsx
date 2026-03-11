"use client";

export default function PetBakeryDemo() {
  const PHONE = "(936) 278-2221";
  const PHONE_LINK = "tel:9362782221";
  const EMAIL = "info@bayoubarkery.com";
  const EMAIL_LINK = "mailto:info@bayoubarkery.com";

  return (
    <main style={{ background: "#f6efe7", color: "#1c1714" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(rgba(21,16,12,0.50), rgba(21,16,12,0.60)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center",
              background: "rgba(24,18,14,0.42)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "30px",
              padding: "42px 28px",
              color: "white",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              Premium Pet Bakery Concept
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 7vw, 76px)",
                lineHeight: 1.02,
                margin: "0 0 18px 0",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Organic treats that feel as special as they should.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 26px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.88)",
                margin: "0 auto 28px auto",
                maxWidth: "760px",
              }}
            >
              A cleaner, warmer, more premium website concept for a pet bakery
              brand built around trust, custom orders, and memorable gifting.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#shop"
                style={{
                  background: "linear-gradient(135deg,#f3c27c,#e89d67)",
                  color: "#201710",
                  textDecoration: "none",
                  padding: "16px 24px",
                  borderRadius: "14px",
                  fontWeight: 800,
                }}
              >
                View Treats
              </a>

              <a
                href={EMAIL_LINK}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  textDecoration: "none",
                  padding: "16px 24px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                Custom Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "-52px auto 0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              title: "Small-batch baked",
              text: "A more elevated layout that makes the bakery feel handcrafted and premium.",
            },
            {
              title: "Custom celebrations",
              text: "Birthday boxes, personalized treats, and special occasion ordering made clear.",
            },
            {
              title: "Built for trust",
              text: "Stronger story, cleaner visuals, and easier conversion for first-time buyers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 18px 50px rgba(34,20,8,0.10)",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#5d5147",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section
        id="shop"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "90px 20px 30px",
        }}
      >
        <div style={{ maxWidth: "760px", marginBottom: "26px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#ead9c7",
              color: "#5b4532",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Shop Favorites
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,52px)",
              lineHeight: 1.06,
              margin: "0 0 14px 0",
            }}
          >
            Signature treats presented like a premium brand.
          </h2>

          <p
            style={{
              margin: 0,
              color: "#67584d",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Instead of a plain template feel, this concept makes the bakery look
            boutique, trustworthy, and giftable.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              name: "Sweet Potato Crunch Bites",
              tag: "Best Seller",
              text: "A cleaner product block that highlights ingredients, trust, and repeat-order appeal.",
            },
            {
              name: "Pumpkin Twist Treats",
              tag: "Seasonal Favorite",
              text: "Warm branding and stronger product presentation for a more premium shop feel.",
            },
            {
              name: "Birthday Treat Box",
              tag: "Custom Order",
              text: "Built to push higher-value celebration orders instead of just basic treat browsing.",
            },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: "white",
                borderRadius: "26px",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(42,24,9,0.08)",
              }}
            >
              <div
                style={{
                  height: "220px",
                  backgroundImage:
                    "linear-gradient(rgba(22,14,10,0.18), rgba(22,14,10,0.18)), url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: "22px" }}>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    padding: "7px 10px",
                    borderRadius: "999px",
                    background: "#f2e4d4",
                    color: "#6a4c34",
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  {item.tag}
                </div>

                <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
                  {item.name}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#63554a",
                    lineHeight: 1.75,
                    fontSize: "16px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "50px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            borderRadius: "28px",
            minHeight: "440px",
            backgroundImage:
              "linear-gradient(rgba(25,18,12,0.26), rgba(25,18,12,0.32)), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          style={{
            background: "#fffaf4",
            borderRadius: "28px",
            padding: "34px",
            boxShadow: "0 18px 45px rgba(39,22,7,0.08)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#ead9c7",
              color: "#5b4532",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Brand Story
          </div>

          <h2
            style={{
              fontSize: "clamp(30px,4vw,46px)",
              lineHeight: 1.08,
              margin: "0 0 14px 0",
            }}
          >
            Built around better ingredients and a more memorable experience.
          </h2>

          <p
            style={{
              color: "#64564b",
              fontSize: "17px",
              lineHeight: 1.85,
              marginBottom: "16px",
            }}
          >
            This section should feel warm, polished, and real — not like a
            generic template. It gives the bakery a more emotional story and
            makes buyers trust the brand faster.
          </p>

          <p
            style={{
              color: "#64564b",
              fontSize: "17px",
              lineHeight: 1.85,
              marginBottom: 0,
            }}
          >
            For a business like Bayou Barkery, the site should sell not just the
            treats, but the feeling: thoughtful, special, local, and worthy of
            repeat orders.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "20px 20px 50px",
        }}
      >
        <div style={{ maxWidth: "720px", marginBottom: "22px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#ead9c7",
              color: "#5b4532",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Customer Love
          </div>

          <h2
            style={{
              fontSize: "clamp(30px,4.5vw,48px)",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            A cleaner trust section that feels premium.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "My dog loved the treats and the whole brand felt so thoughtful and premium.",
            "The presentation was beautiful. It felt more like a boutique experience than a regular pet site.",
            "This kind of layout makes the bakery feel trustworthy, warm, and worth ordering from.",
          ].map((quote, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 14px 34px rgba(34,20,8,0.07)",
              }}
            >
              <div
                style={{
                  color: "#df9f53",
                  fontSize: "22px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  margin: 0,
                  color: "#5c4f45",
                  fontSize: "16px",
                  lineHeight: 1.8,
                }}
              >
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "10px 20px 80px",
        }}
      >
        <div
          style={{
            borderRadius: "30px",
            padding: "36px",
            background:
              "linear-gradient(135deg, #2f2219 0%, #4a3326 100%)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <h2
              style={{
                fontSize: "clamp(30px,4.5vw,48px)",
                lineHeight: 1.08,
                margin: "0 0 12px 0",
              }}
            >
              Need a more premium website for your bakery brand?
            </h2>
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.84)",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              This concept is designed to feel warmer, stronger, and more custom
              than a standard template site.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={EMAIL_LINK}
              style={{
                background: "linear-gradient(135deg,#f3c27c,#e89d67)",
                color: "#201710",
                textDecoration: "none",
                padding: "16px 22px",
                borderRadius: "14px",
                fontWeight: 800,
              }}
            >
              Email Custom Order
            </a>

            <a
              href={PHONE_LINK}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                textDecoration: "none",
                padding: "16px 22px",
                borderRadius: "14px",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
Why this one feels better

This version is much closer to the home-styling vibe: