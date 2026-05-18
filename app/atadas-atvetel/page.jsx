export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Átadás-Átvételi Lap</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">Átvételhez és visszaadáshoz használható ellenőrző lap.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        <div className="rounded border border-yellow-200 bg-yellow-50 p-5 text-sm font-semibold leading-7 text-yellow-900">
          A [KAPCSOS ZÁRÓJELBEN] szereplő adatokat a vállalkozás létrehozása után kell kitölteni.
          Ez egy előkészített, szerkeszthető munkaváltozat.
        </div>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">1. Átadáskor</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Bérelt eszköz: ____________________</li>
              <li>Eszköz állapota: sérülésmentes / karcos / egyéb</li>
              <li>Tartozékok: ____________________</li>
              <li>Kulcsok száma: ______ db</li>
              <li>Fotó készült: igen / nem</li>
          </ul>
        </section>

        <section className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black uppercase text-[#063f83]">2. Visszavételkor</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
              <li>Sérülés: nincs / van</li>
              <li>Hiány: nincs / van</li>
              <li>Tisztaság: megfelelő / tisztítás szükséges</li>
              <li>Kaució visszaadva: igen / nem / részben</li>
              <li>Megjegyzés: ____________________</li>
          </ul>
        </section>

      </section>
    </main>
  );
}
