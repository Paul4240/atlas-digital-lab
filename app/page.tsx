export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Atlas Digital Lab
        </h1>

        <p className="text-xl text-zinc-600 mb-8">
          Professional websites for small businesses.
          Fast setup. Simple pricing. Ongoing support.
        </p>

        <div className="space-y-4">
          <p className="text-lg">
            We build modern, mobile-friendly websites that help local
            businesses stand out and grow online.
          </p>

          <p className="text-lg">
            Starting at $299 setup + $50/month maintenance.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="mailto:hello@atlasdigitallab.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>

        <p className="mt-6 text-zinc-600">
          Or email us directly at{" "}
          <a
            href="mailto:hello@atlasdigitallab.com"
            className="text-blue-600 underline"
          >
            hello@atlasdigitallab.com
          </a>
        </p>

      </div>
    </main>
  );
}