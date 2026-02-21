export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight text-lg">Atlas Digital Lab</div>
          <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#work" className="hover:text-zinc-900">Work</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium text-zinc-700">
              Websites for small businesses • Fast & mobile-friendly
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Get a professional website that brings you customers.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-zinc-600">
              Atlas Digital Lab builds clean, modern websites for local businesses.
              Simple pricing, quick turnaround, and monthly support available.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                View Pricing
              </a>
              <a
                href="#contact"
                className="rounded-lg border px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Start Now
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border bg-white p-4">
                <div className="text-2xl font-bold">1–7</div>
                <div className="text-zinc-600">days delivery</div>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="text-2xl font-bold">Mobile</div>
                <div className="text-zinc-600">first design</div>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="text-2xl font-bold">SEO</div>
                <div className="text-zinc-600">setup included</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Free Quote</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Tell us about your business. We’ll reply fast.
            </p>

            <form className="mt-6 grid gap-3">
              <input
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Name"
              />
              <input
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Business name"
              />
              <input
                className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Email or phone"
              />
              <textarea
                className="min-h-[120px] w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="What do you need? (website, updates, SEO, etc.)"
              />
              <a
                href="mailto:atlasdigitallabgroup@gmail.com?subject=Atlas%20Digital%20Lab%20Quote%20Request"
                className="rounded-lg bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
              >
                Email Us To Start
              </a>
              <p className="text-xs text-zinc-500">
                Or call/text: <span className="font-medium text-zinc-800">(832) 705-0313</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Everything you need to look professional online and get more leads.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Website Design", desc: "Modern pages that look great on mobile and desktop." },
            { title: "SEO Setup", desc: "Basic SEO + indexing so customers can find you on Google." },
            { title: "Monthly Support", desc: "Edits, updates, and help when you need it." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Simple Pricing</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Clear packages. No confusion. Monthly hosting/support available.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Basic</h3>
              <p className="mt-2 text-3xl font-bold">$99</p>
              <p className="text-sm text-zinc-600">setup</p>
              <p className="mt-4 text-sm font-semibold">$50/month</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• 1–3 pages</li>
                <li>• Mobile-friendly</li>
                <li>• Contact section</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90">
                Choose Basic
              </a>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm ring-2 ring-zinc-900">
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-2 text-3xl font-bold">$199</p>
              <p className="text-sm text-zinc-600">setup</p>
              <p className="mt-4 text-sm font-semibold">$75/month</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Up to 5 pages</li>
                <li>• SEO setup</li>
                <li>• Faster updates</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90">
                Choose Pro
              </a>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="mt-2 text-3xl font-bold">$299+</p>
              <p className="text-sm text-zinc-600">setup</p>
              <p className="mt-4 text-sm font-semibold">$100/month</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Custom build</li>
                <li>• Analytics</li>
                <li>• Ongoing improvements</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full rounded-lg bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90">
                Choose Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
        <p className="mt-2 text-zinc-600">
          (We’ll add 3 demo sites next: restaurant, service business, and salon.)
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Restaurant Demo", "Service Business Demo", "Shop / Salon Demo"].map((title) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">{title}</div>
              <div className="mt-2 text-sm text-zinc-600">Coming soon</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Let’s build your website.</h2>
          <p className="mt-2 max-w-2xl text-zinc-200">
            Email us and we’ll get you started today.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
              href="mailto:atlasdigitallabgroup@gmail.com?subject=Atlas%20Digital%20Lab%20Quote%20Request"
            >
              Email Atlas Digital Lab
            </a>
            <a
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              href="tel:+18327050313"
            >
              Call (832) 705-0313
            </a>
          </div>

          <footer className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-300">
            © {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.
          </footer>
        </div>
      </section>
    </main>
  );
}