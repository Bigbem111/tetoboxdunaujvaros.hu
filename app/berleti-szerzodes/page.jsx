export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white print:hidden">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Bérleti szerződés</h1>
          <p className="mt-4 text-zinc-300">Nyomtatható bérleti szerződés minta.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl bg-white px-6 py-10 shadow-sm print:shadow-none">
        <div className="space-y-7 text-sm leading-7 text-zinc-900">
          <div className="text-center">
            <h1 className="text-3xl font-black uppercase tracking-wide">BÉRLETI SZERZŐDÉS</h1>
            <p className="mt-3 font-semibold">Sorszám: 2026/_________________________</p>
          </div>

          <section>
            <h2 className="border-b-2 border-zinc-900 pb-1 text-lg font-black uppercase">BÉRBEADÓ ADATAI</h2>
            <div className="mt-3 grid gap-1">
              <p><strong>Név:</strong> NAGY KÁLMÁN e.v.</p>
              <p><strong>Székhely:</strong> 2459 Rácalmás</p>
              <p><strong>Adószám:</strong> 92064137-1-27</p>
              <p><strong>Nyilvántartási szám:</strong> 62326636</p>
              <p><strong>Telefonszám:</strong> +36 70 401 4662</p>
              <p><strong>E-mail:</strong> info@tetoboxdunaujvaros.hu</p>
              <p><strong>Weboldal:</strong> www.tetoboxdunaujvaros.hu</p>
            </div>
          </section>

          <section>
            <h2 className="border-b-2 border-zinc-900 pb-1 text-lg font-black uppercase">BÉRBEVEVŐ ADATAI</h2>
            <div className="mt-3 grid gap-3">
              <p><strong>Név:</strong><br />____________________________________________</p>
              <p><strong>Lakcím:</strong><br />____________________________________________</p>
              <p><strong>Személyi igazolvány szám:</strong><br />____________________________________________</p>
              <p><strong>Telefonszám:</strong><br />+36 _______________________________________</p>
              <p><strong>E-mail cím:</strong><br />___________________________@_______________</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase">1. A BÉRLET TÁRGYA</h2>
            <div className="mt-3 grid gap-3">
              <p><strong>Bérelt eszköz:</strong><br />____________________________________________</p>
              <p><strong>Típus / Méret:</strong><br />____________________________________________</p>
              <p><strong>Tartozékok:</strong><br />____________________________________________</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase">2. A BÉRLET IDŐTARTAMA</h2>
            <div className="mt-3 grid gap-3">
              <p><strong>Bérlés kezdete:</strong><br />2026 év ______ hó ______ nap ______ óra</p>
              <p><strong>Bérlés vége:</strong><br />2026 év ______ hó ______ nap ______ óra</p>
              <p><strong>Fizetendő napok száma:</strong> _________________</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase">3. DÍJAZÁS ÉS KAUCIÓ</h2>
            <div className="mt-3 grid gap-3">
              <p><strong>Teljes bérleti díj:</strong> __________________________ Ft</p>
              <p><strong>Kaució összege:</strong> ____________________________ Ft</p>
              <p><strong>Fizetés módja:</strong> készpénz / utalás</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase">4. BÉRLETI FELTÉTELEK</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A bérbeadó a bérleti tárgyat sérülésmentes állapotban adja át.</li>
              <li>A bérbevevő köteles a bérelt eszközt rendeltetésszerűen használni.</li>
              <li>A bérbevevő felel az eszközben keletkezett károkért, elvesztésért vagy nem rendeltetésszerű használatból eredő sérülésekért.</li>
              <li>A bérleti tárgy visszaadása késedelem esetén a bérbeadó jogosult további napi díjat felszámítani.</li>
              <li>A felszerelés és rögzítés a bérbeadó segítségével történik, azonban az utazás megkezdése előtt a bérbevevő köteles a rögzítést ellenőrizni.</li>
              <li>A bérbeadó az átadás és visszavétel során fényképes dokumentációt készíthet.</li>
              <li>Elveszett kulcs esetén a bérbevevő köteles a csere költségét megtéríteni.</li>
              <li>A kaució a sérülésmentes visszaadás után visszajár.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase">5. NYILATKOZAT</h2>
            <p className="mt-3">
              A bérbevevő kijelenti, hogy a bérleti feltételeket megismerte és elfogadja.
              A személyes adatok kezelése az adatvédelmi szabályok szerint történik.
            </p>
          </section>

          <section className="pt-4">
            <p><strong>Hely, Dátum:</strong> Rácalmás, 2026_________________</p>
            <div className="mt-14 grid grid-cols-2 gap-10 text-center">
              <div>
                <div className="border-t border-zinc-900 pt-2">Bérbeadó aláírása</div>
              </div>
              <div>
                <div className="border-t border-zinc-900 pt-2">Bérbevevő aláírása</div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
