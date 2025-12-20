import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <Head>
        <title>Aventura del Principito · WhatsApp</title>
        <meta name="description" content="Vive la aventura interactiva del Principito directamente en WhatsApp." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-[#081226] text-white font-sans text-center py-20 px-4 transition-all duration-500">

        {/* Toggle Theme */}
        <button
          className="fixed top-5 right-5 text-3xl hover:scale-110 transition"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <h1 className="text-4xl font-bold mb-6 animate-fadeIn">✨ El Principito — Aventura por WhatsApp</h1>
        <p className="max-w-xl mx-auto text-lg opacity-90 mb-6 animate-fadeInSlow">
          Explora planetas y vive la historia.
        </p>

        <a
          href="https://wa.me/14484188925?text=jugar%20principito"
          className="inline-block bg-yellow-300 text-black text-xl px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition animate-pulse"
        >
          Jugar en WhatsApp
        </a>

        <section className="mt-16 animate-fadeInSlow">
          <h2 className="text-3xl font-semibold mb-6">📱 Cómo funciona</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Image src="/mockup1.webp" width={260} height={520} alt="Mockup 1" />
            <Image src="/mockup2.webp" width={260} height={520} alt="Mockup 2" />
            <Image src="/mockup3.webp" width={260} height={520} alt="Mockup 3" />
          </div>
        </section>

        <section className="mt-20 animate-fadeInSlow">
          <h2 className="text-3xl font-semibold mb-4">📲 Escanéalo para jugar</h2>
          <Image
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwa.me%2F14484188925%3Ftext%3Djugar%2520principito`}
            width={220}
            height={220}
            alt="QR Principito"
            className="mx-auto rounded-xl shadow-xl"
          />
        </section>

        <footer className="text-center py-10 text-sm opacity-60 mt-20">
          © 2025 Aventura del Principito — TextQuest
        </footer>

      </main>
    </>
  );
}
