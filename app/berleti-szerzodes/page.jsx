export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Bérleti Szerződés Minta</h1>
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
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Bérbevevő adatai</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    Név: ______________________________<br />
    Lakcím: ____________________________<br />
    Telefonszám: _______________________<br />
    Személyi igazolvány száma: __________<br />
    Lakcímkártya száma: ________________<br />
    Rendszám: __________________________<br />
    Autó típusa: ________________________
  </p>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Bérleti tárgy</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    Thule Touring M tetőbox — 1. db / Thule Touring M tetőbox — 2. db / Thule Touring L tetőbox — 1 db<br />
    Egyéb: ______________________________
  </p>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Díjak és kaució</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    Napi díj: __________ Ft / nap<br />
    Minimum fizetendő bérleti díj: 8 000 Ft<br />
    Kaució: 30 000 Ft<br />
    Fizetési mód: készpénz / banki utalás / Revolut<br />
    Átadás: ______ év ____ hó ____ nap ____ óra ____ perc<br />
    Visszaadás: ______ év ____ hó ____ nap ____ óra ____ perc
  </p>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Felelősség és aláírás</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    A bérlő az eszközt rendeltetésszerűen használja, és a bérleti idő alatt teljes felelősséggel tartozik érte.
    A bérbeadó nem felel a tetőboxban elhelyezett tárgyakban keletkezett károkért.<br /><br />
    Kelt: Dunaújváros, ______ év ____ hó ____ nap<br />
    Bérbeadó aláírása: ____________________<br />
    Bérbevevő aláírása: ____________________
  </p>
</div>

      </section>
    </main>
  );
}
