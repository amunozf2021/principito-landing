
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aventura del Principito · WhatsApp</title>
        <meta name="description" content="Vive la aventura interactiva del Principito directamente en WhatsApp." />
      </Head>

      <main className="min-h-screen bg-[#0a0f2c] text-white font-sans">
        <header className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">✨ El Principito — Aventura por WhatsApp</h1>
          <a href="https://wa.me/14173085432?text=jugar%20principito"
             className="mt-6 inline-block bg-yellow-300 text-black text-xl px-6 py-3 rounded-lg shadow-lg">
             Jugar en WhatsApp
          </a>
        </header>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold">📱 Cómo funciona</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <Image src="/mockup1.webp" width="300" height="600" alt="mock1"/>
            <Image src="/mockup2.webp" width="300" height="600" alt="mock2"/>
            <Image src="/mockup3.webp" width="300" height="600" alt="mock3"/>
          </div>
        </section>
      </main>
    </>
  );
}
