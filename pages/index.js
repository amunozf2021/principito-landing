import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aventura del Principito · WhatsApp</title>
        <meta name="description" content="Vive la aventura interactiva del Principito directamente en WhatsApp." />
        <meta property="og:image" content="/mockup1.webp" />
      </Head>

      <main className="min-h-screen bg-[#0a0f2c] text-white font-sans">
        <header className="text-center py-20 bg-gradient-to-b from-[#0a0f2c] to-[#112b4a] px-4 relative">
          <button aria-label="Cambiar tema" className="absolute top-6 right-6 text-3xl cursor-pointer" onClick={() => toggleTheme()}>🌙</button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ El Principito — Aventura por WhatsApp</h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">Explora planetas y vive la historia.</p>
          <a href="https://wa.me/14173085432?text=jugar%20principito" className="btn mt-6 inline-block bg-[#ffd86b] text-black text-xl px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">Jugar en WhatsApp</a>
        </header>

        <section className="py-16 text-center px-4">
          <h2 className="text-3xl font-semibold">📱 Cómo funciona</h2>
          <p className="max-w-xl mx-auto mt-2 mb-8 text-lg opacity-80">Interactúa con el bot directamente en WhatsApp.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Image src="/mockup1.webp" width={300} height={600} className="rounded-2xl shadow-xl" alt="Mockup 1" />
            <Image src="/mockup2.webp" width={300} height={600} className="rounded-2xl shadow-xl" alt="Mockup 2" />
            <Image src="/mockup3.webp" width={300} height={600} className="rounded-2xl shadow-xl" alt="Mockup 3" />
          </div>
        </section>

        <section className="py-16 text-center px-4 bg-[#0c1538]">
          <h2 className="text-3xl font-semibold">⭐ Qué hace especial esta aventura</h2>
          <p className="max-w-xl mx-auto mt-2 text-lg opacity-80">IA conversacional, decisiones y mundos ilustrados.</p>
        </section>

        <section className="py-16 text-center px-4">
          <h2 className="text-3xl font-semibold">📲 Escanéalo para jugar</h2>
          <p className="max-w-xl mx-auto text-lg opacity-80 mt-2">Apunta la cámara y entra directamente al juego.</p>
          <Image src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwa.me%2F14173085432%3Ftext%3Djugar%2520principito`} width={220} height={220} alt="QR Principito" className="mx-auto mt-6 rounded-xl shadow-xl" />
        </section>

        <footer className="text-center py-10 text-sm opacity-60">© 2025 Aventura del Principito — TextQuest</footer>
      </main>

      <script dangerouslySetInnerHTML={{ __html: `function toggleTheme(){document.body.classList.toggle('light');document.body.classList.toggle('dark');}` }} />
    </>
  );
}
