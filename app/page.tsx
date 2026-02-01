/* page.tsx */

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-logo-text">Atlas Digital Lab</h1>

        <p className="contact-info">
          Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a>
          <br />
          Phone: <a href="tel:+18327050313">(832) 705-0313</a>
        </p>

        <button
          className="hero-button"
          onClick={() => window.location.href = 'mailto:atlasdigitallabgroup@gmail.com'}
        >
          Contact Us
        </button>
      </section>
    </main>
  )
}
