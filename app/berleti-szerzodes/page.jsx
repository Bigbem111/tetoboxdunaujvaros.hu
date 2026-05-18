export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Bérleti Szerződés Minta</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">Nyomtatható és később kitölthető szerződésminta.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        <div className="rounded border border-yellow-200 bg-yellow-50 p-5 text-sm font-semibold leading-7 text-yellow-900">
          A [KAPCSOS ZÁRÓJELBEN] szereplő adatokat a vállalkozás létrehozása után kell kitölteni.
          Ez egy előkészített, szerkeszthető munkaváltozat.
        </div>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">1. Bérbeadó</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Vállalkozás neve: [VÁLLALKOZÁS NEVE]</li>
              <li>Székhely: [SZÉKHELY]</li>
              <li>Adószám: [ADÓSZÁM]</li>
              <li>Nyilvántartási szám: [NYILVÁNTARTÁSI SZÁM]</li>
              <li>Telefonszám: +36 70 401 4662</li>
              <li>E-mail: info@tetoboxdunaujvaros.hu</li>
              <li>Weboldal: https://tetoboxdunaujvaros.hu</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">2. Bérbevevő adatai</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Név: ______________________________</li>
              <li>Lakcím: ____________________________</li>
              <li>Telefonszám: _______________________</li>
              <li>Személyi igazolvány száma: __________</li>
              <li>Rendszám: __________________________</li>
              <li>Autó típusa: ________________________</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">3. Bérelhető eszközök</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>S méretű tetőbox</li>
              <li>L méretű tetőbox</li>
              <li>XL méretű tetőbox</li>
              <li>Tetőcsomagtartó</li>
              <li>Kerékpárszállító</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">4. Bérleti adatok</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Bérlés kezdete: ____________________</li>
              <li>Bérlés vége: _______________________</li>
              <li>Fizetendő bérleti díj: ______________</li>
              <li>Kaució: ____________________________</li>
              <li>Fizetési mód: készpénz / utalás / Revolut</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">5. Állapot és tartozékok</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Az eszköz átadáskor sérülésmentes / kisebb használati karcokkal rendelkezik / egyéb: ____________________</li>
              <li>Átadott kulcsok száma: ______ db</li>
              <li>Átadott rögzítőelemek / szerszámok: ____________________</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">6. Felelősség</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A bérlő a bérleti idő alatt teljes felelősséggel tartozik az eszközért.</li>
              <li>A bérlő köteles az eszközt rendeltetésszerűen használni és sérülésmentesen visszaadni.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">7. Aláírás</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Kelt: Dunaújváros, ____ év ____ hó ____ nap</li>
              <li>Bérbeadó aláírása: ____________________</li>
              <li>Bérbevevő aláírása: ____________________</li>
          </ul>
        </section>

      </section>
    </main>
  );
}
