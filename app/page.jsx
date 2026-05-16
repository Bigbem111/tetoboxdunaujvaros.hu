export default function Home() {
  const boxes = [
    {
      name: 'Tetőbox M',
      size: '320L',
      ideal: '2-3 fő részére',
      price: '2 990 Ft / nap',
    },
    {
      name: 'Tetőbox L',
      size: '450L',
      ideal: 'Családi nyaralásokhoz',
      price: '3 990 Ft / nap',
    },
    {
      name: 'Tetőbox XL',
      size: '600L',
      ideal: 'Síeléshez és hosszú utakhoz',
      price: '4 990 Ft / nap',
    },
  ];

  const faq = [
    {
      q: 'Milyen autókra szerelhető?',
      a: 'A legtöbb tetősínnel, fixponttal vagy megfelelő keresztrúddal rendelkező autóra felszerelhető. Foglalás előtt segítünk az ellenőrzésben.',
    },
    {
      q: 'A felszerelés benne van az árban?',
      a: 'Igen, a felszerelés és az alap használati útmutatás díjmentes.',
    },
    {
      q: 'Kell kaució?',
      a: 'Igen, a kaució összege típustól függően 20 000 – 50 000 Ft.',
    },
    {
      q: 'Mennyi idő alatt lehet átvenni?',
      a: 'Akár aznap is, előzetes egyeztetés alapján.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tetőbox24</h1>
            <p className="text-sm text-gray-500">Tetőbox bérlés Dunaújváros</p>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#boxok" className="text-sm hover:text-black">Boxok</a>
            <a href="#arak" className="text-sm hover:text-black">Árak</a>
            <a href="#foglalas" className="text-sm hover:text-black">Foglalás</a>
            <a href="#kapcsolat" className="text-sm hover:text-black">Kapcsolat</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border px-4 py-2 text-sm text-gray-600">
              Gyors • Egyszerű • Megbízható
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Tetőbox bérlés
              <span className="block text-gray-400">utazáshoz, síeléshez, nyaraláshoz</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Modern, biztonságos tetőboxok Dunaújvárosban. Gyors foglalás,
              felszerelés segítséggel és rugalmas átvétellel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#foglalas" className="rounded-2xl bg-black px-6 py-4 text-white transition hover:scale-105">
                Foglalás indítása
              </a>
              <a href="tel:+36301234567" className="rounded-2xl border px-6 py-4 transition hover:bg-gray-100">
                Hívás most
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border bg-gray-100 p-10 shadow-xl">
              <div className="flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 text-center text-gray-500">
                Ide kerülhet saját tetőboxos fotó
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-3xl font-bold">24h</p><p className="mt-1 text-sm text-gray-500">Gyors foglalás</p></div>
                <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-3xl font-bold">+50</p><p className="mt-1 text-sm text-gray-500">Elégedett ügyfél</p></div>
                <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-3xl font-bold">4.9★</p><p className="mt-1 text-sm text-gray-500">Google értékelés</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
          {['Ingyenes felszerelés', 'Rugalmas átvétel', 'Prémium tetőboxok', 'Gyors foglalás'].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="boxok" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Tetőbox kínálat</p>
          <h3 className="mt-4 text-4xl font-bold">Válaszd ki a megfelelőt</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {boxes.map((box) => (
            <div key={box.name} className="rounded-[32px] border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex aspect-video items-center justify-center rounded-3xl bg-gray-100 text-gray-400">Box fotó</div>
              <h4 className="mt-6 text-2xl font-bold">{box.name}</h4>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Térfogat: {box.size}</p>
                <p>{box.ideal}</p>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="text-2xl font-bold">{box.price}</p>
                <a href="#foglalas" className="rounded-2xl bg-black px-5 py-3 text-white">Foglalás</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="arak" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Árlista</p>
          <h3 className="mt-4 text-4xl font-bold">Egyszerű, átlátható árak</h3>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8"><p className="text-lg text-gray-400">Hétvége</p><p className="mt-4 text-4xl font-bold">7 990 Ft</p><p className="mt-3 text-gray-400">Péntek–vasárnap</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8"><p className="text-lg text-gray-400">1 hét</p><p className="mt-4 text-4xl font-bold">19 990 Ft</p><p className="mt-3 text-gray-400">Legnépszerűbb választás</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8"><p className="text-lg text-gray-400">2 hét</p><p className="mt-4 text-4xl font-bold">34 990 Ft</p><p className="mt-3 text-gray-400">Hosszabb utazásokhoz</p></div>
          </div>
        </div>
      </section>

      <section id="foglalas" className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[32px] border bg-gray-50 p-10 md:p-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Foglalás</p>
            <h3 className="mt-4 text-4xl font-bold">Kérj gyors visszahívást</h3>
            <p className="mt-6 text-lg text-gray-600">
              Írd meg milyen autóra és milyen időszakra keresel tetőboxot,
              és segítünk kiválasztani a megfelelő típust.
            </p>
          </div>

          <form className="mt-10 grid gap-6 md:grid-cols-2" action="mailto:info@tetobox24.hu" method="post" encType="text/plain">
            <input name="nev" type="text" placeholder="Név" className="rounded-2xl border bg-white px-5 py-4 outline-none" />
            <input name="telefon" type="tel" placeholder="Telefonszám" className="rounded-2xl border bg-white px-5 py-4 outline-none" />
            <input name="auto" type="text" placeholder="Autó típusa" className="rounded-2xl border bg-white px-5 py-4 outline-none" />
            <input name="idopont" type="text" placeholder="Utazás időpontja" className="rounded-2xl border bg-white px-5 py-4 outline-none" />
            <textarea name="megjegyzes" placeholder="Megjegyzés" className="min-h-[140px] rounded-2xl border bg-white px-5 py-4 outline-none md:col-span-2" />
            <button className="rounded-2xl bg-black px-6 py-4 text-white transition hover:scale-[1.02] md:w-fit">
              Ajánlatkérés elküldése
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">GYIK</p>
          <h3 className="mt-4 text-4xl font-bold">Gyakori kérdések</h3>
        </div>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-3xl border p-8">
              <h4 className="text-xl font-semibold">{item.q}</h4>
              <p className="mt-3 leading-relaxed text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kapcsolat" className="bg-gray-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Kapcsolat</p>
            <h3 className="mt-4 text-4xl font-bold">Foglalj egyszerűen</h3>
            <div className="mt-8 space-y-4 text-lg text-gray-700">
              <p>📍 Dunaújváros</p>
              <p>📞 +36 30 123 4567</p>
              <p>✉️ info@tetobox24.hu</p>
            </div>
          </div>
          <div className="rounded-[32px] border bg-white p-10 shadow-sm">
            <h4 className="text-2xl font-bold">Miért minket válassz?</h4>
            <div className="mt-8 space-y-6 text-gray-600">
              <div><p className="font-semibold text-black">Prémium eszközök</p><p className="mt-2">Modern, biztonságos és rendszeresen ellenőrzött tetőboxok.</p></div>
              <div><p className="font-semibold text-black">Segítünk a választásban</p><p className="mt-2">Nem kell tudnod milyen box kell az autódra — segítünk.</p></div>
              <div><p className="font-semibold text-black">Gyors ügyintézés</p><p className="mt-2">Foglalás akár még az indulás előtti napon is.</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xl font-bold">Tetőbox24</p>
            <p className="mt-1 text-sm text-gray-500">Tetőbox bérlés Dunaújváros és környéke</p>
          </div>
          <p className="text-sm text-gray-500">© 2026 Tetőbox24 — Minden jog fenntartva.</p>
        </div>
      </footer>
    </main>
  );
}
