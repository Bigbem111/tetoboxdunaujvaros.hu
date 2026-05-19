export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Cookie Szabályzat</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Szolgáltató adatai</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    NAGY KÁLMÁN e.v.<br />
    Székhely: [SZÉKHELY KÉSŐBB KITÖLTENDŐ]<br />
    Adószám: 92064137-1-27<br />
    Nyilvántartási szám: 62326636<br />
    Telefon: +36 70 401 4662<br />
    E-mail: info@tetoboxdunaujvaros.hu<br />
    Weboldal: https://tetoboxdunaujvaros.hu
  </p>
</div>

<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Cookie használat</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    A weboldal technikai szükségességű sütiket használhat az oldal megfelelő működéséhez. A jelenlegi alapverzió nem használ
    Google Analytics-et, Meta Pixelt, TikTok Pixelt, remarketing vagy profilalkotó sütiket. A látogató a böngésző
    beállításaiban bármikor törölheti vagy letilthatja a sütiket.
  </p>
</div>

      </section>
    </main>
  );
}
