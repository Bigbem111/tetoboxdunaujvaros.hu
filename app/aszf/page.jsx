export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Általános Szerződési Feltételek</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés feltételei.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        <div className="rounded border border-yellow-200 bg-yellow-50 p-5 text-sm font-semibold leading-7 text-yellow-900">
          A [KAPCSOS ZÁRÓJELBEN] szereplő adatokat a vállalkozás létrehozása után kell kitölteni.
          Ez egy előkészített, szerkeszthető munkaváltozat.
        </div>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">1. Szolgáltató adatai</h2>
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
          <h2 className="text-2xl font-black uppercase text-[#063f83]">2. A szolgáltatás tárgya</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A szolgáltató tetőbox, tetőcsomagtartó és kerékpárszállító eszközök rövid távú bérbeadásával foglalkozik Dunaújvárosban és környékén.</li>
              <li>A bérelhető eszközök pontos köre, elérhetősége és díja az aktuális weboldalon vagy egyedi egyeztetés alapján kerül meghatározásra.</li>
              <li>A szolgáltató fenntartja a jogot, hogy az elérhető eszközök típusát, méretét vagy színét módosítsa, amennyiben az ügyfél részére azonos célra alkalmas eszközt biztosít.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">3. Foglalás</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Foglalás telefonon vagy e-mailben történik.</li>
              <li>A foglalás a felek visszaigazolását követően válik véglegessé.</li>
              <li>Foglaláshoz szükséges lehet az autó típusa, évjárata, tetőkialakítása és a tervezett bérlési időszak megadása.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">4. Bérleti díj és fizetés</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A bérleti díjak az aktuális árlista szerint érvényesek.</li>
              <li>Minimum fizetendő bérleti díj: 8 000 Ft.</li>
              <li>Fizetési módok: készpénz, banki utalás, Revolut.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">5. Kaució</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Tetőbox kaució: 30 000 Ft.</li>
              <li>Tetőcsomagtartó kaució: 15 000 Ft.</li>
              <li>Kerékpárszállító kaució: 25 000 Ft.</li>
              <li>A kaució sérülésmentes, tiszta és hiánytalan visszaadás esetén visszajár.</li>
              <li>Sérülés, hiány, késedelem vagy erős szennyezettség esetén a kaució részben vagy egészben visszatartható.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">6. Átvétel és visszaadás</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Az eszközök átvétele és visszaadása Dunaújvárosban, előre egyeztetett időpontban történik.</li>
              <li>A bérlő köteles az eszközt a megbeszélt időpontban visszahozni.</li>
              <li>Az eszközt tiszta, hiánytalan és sérülésmentes állapotban kell visszaszolgáltatni.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">7. Késedelmi díj és tisztítás</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Késedelmes visszahozatal esetén a szolgáltató plusz napi bérleti díjat számíthat fel.</li>
              <li>Erősen szennyezett állapotban visszahozott eszköz esetén tisztítási díj számítható fel.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">8. Felelősségi szabályok</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A bérlő köteles az eszközt rendeltetésszerűen használni, a megfelelő rögzítést ellenőrizni és a közlekedési szabályokat betartani.</li>
              <li>A bérlő felel a bérleti időszak alatt keletkezett károkért, ideértve a helytelen rögzítésből, túlterhelésből vagy szabálytalan használatból eredő károkat is.</li>
              <li>A szolgáltató nem felel a tetőboxban vagy szállítón elhelyezett tárgyakban keletkezett károkért.</li>
              <li>Lopás, súlyos sérülés vagy használhatatlanná válás esetén a bérlő köteles a tényleges kárt megtéríteni.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">9. Jogviták</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A felek a vitás kérdéseket elsődlegesen békés úton rendezik.</li>
              <li>A jelen feltételekben nem szabályozott kérdésekben a magyar jogszabályok irányadók.</li>
          </ul>
        </section>

      </section>
    </main>
  );
}
