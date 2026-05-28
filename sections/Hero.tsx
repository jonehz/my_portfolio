export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sky-400">Hello, I&apos;m</p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Phan Ngoc Vuong
        </h1>

        <h2 className="mb-6 text-2xl text-gray-300 md:text-4xl">
          Fullstack Web Developer
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-400">
          I build modern and responsive web applications using
          React.js, Next.js, Node.js and MongoDB.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600"
          >
            View Projects
          </a>

          <a
            href="/portfolio/public/Phan Ngọc Vương CV.pdf"
            download
            className="rounded-lg border border-gray-600 px-6 py-3 font-medium transition hover:border-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}