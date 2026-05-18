export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Adatkezelési Tájékoztató</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">GDPR tájékoztató kapcsolatfelvételhez, foglaláshoz és bérléshez.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        <div className="rounded border border-yellow-200 bg-yellow-50 p-5 text-sm font-semibold leading-7 text-yellow-900">
          A [KAPCSOS ZÁRÓJELBEN] szereplő adatokat a vállalkozás létrehozása után kell kitölteni.
          Ez egy előkészített, szerkeszthető munkaváltozat.
        </div>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">1. Adatkezelő adatai</h2>
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
          <h2 className="text-2xl font-black uppercase text-[#063f83]">2. Kezelt adatok köre</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Név, telefonszám, e-mail cím, lakcím, személyi igazolvány száma, rendszám, autó típusa, bérlési időszak.</li>
              <li>A kapcsolatfelvétel során önként megadott egyéb információk.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">3. Az adatkezelés célja</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Ajánlatadás, kapcsolatfelvétel, foglalás kezelése, bérleti szerződés teljesítése, számlázás és jogviták rendezése.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">4. Az adatkezelés jogalapja</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Szerződés teljesítése vagy szerződéskötést megelőző lépések.</li>
              <li>Jogi kötelezettség teljesítése.</li>
              <li>Jogos érdek érvényesítése.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">5. Adatmegőrzés</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>A bérleti szerződéshez kapcsolódó adatokat a szerződés megszűnését követően legfeljebb 1 évig őrizzük meg, kivéve ha jogszabály hosszabb megőrzési időt ír elő.</li>
              <li>A számlázási adatokat a számviteli jogszabályok szerint kell megőrizni.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">6. Adattovábbítás</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Az adatokat kizárólag a szolgáltatás működtetéséhez szükséges partnerek részére továbbíthatjuk, például könyvelő, számlázóprogram, tárhelyszolgáltató vagy e-mail szolgáltató részére.</li>
              <li>Marketing célból személyes adatot nem adunk tovább.</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">7. Érintetti jogok</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Az érintett kérheti adataihoz való hozzáférést, azok helyesbítését, törlését vagy az adatkezelés korlátozását.</li>
              <li>Panasz tehető a Nemzeti Adatvédelmi és Információszabadság Hatóságnál.</li>
          </ul>
        </section>

      </section>
    </main>
  );
}
