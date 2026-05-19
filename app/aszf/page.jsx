export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Általános Szerződési Feltételek</h1>
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
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Szolgáltatás tárgya</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    A szolgáltató tetőbox bérbeadásával foglalkozik Dunaújvárosban és környékén. Jelenleg bérelhető eszközök:
    Thule Touring M tetőbox 2 db és Thule Touring L tetőbox 1 db. A tetőcsomagtartó és kerékpárszállító szolgáltatás
    később kerülhet bevezetésre vagy egyedi egyeztetés alapján válhat elérhetővé.
  </p>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Bérleti díj, fizetés, kaució</h2>
  <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-zinc-700">
    <li>Minimum fizetendő bérleti díj: 8 000 Ft.</li>
    <li>Fizetési módok: készpénz, banki utalás, Revolut.</li>
    <li>Tetőbox kaució: 30 000 Ft.</li>
    <li>A kaució sérülésmentes, tiszta és hiánytalan visszaadás esetén visszajár.</li>
    <li>Késedelmes visszahozatal esetén plusz napi bérleti díj számítható fel.</li>
    <li>Erősen szennyezett állapot esetén tisztítási díj számítható fel.</li>
  </ul>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Felelősség</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    A bérlő köteles az eszközt rendeltetésszerűen használni, a rögzítést ellenőrizni és a közlekedési szabályokat betartani.
    A bérlő felel a bérleti idő alatt keletkezett károkért. A szolgáltató nem felel a tetőboxban elhelyezett tárgyakban
    keletkezett károkért.
  </p>
</div>

      </section>
    </main>
  );
}
