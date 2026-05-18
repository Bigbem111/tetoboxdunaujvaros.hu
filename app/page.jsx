export default function Home() {
  const phoneDisplay = "+36 70 401 4662";
  const phoneHref = "+36704014662";
  const email = "info@tetoboxdunaujvaros.hu";

  const references = [
    {
      name: 'N. Krisztián',
      text: 'Rendkívül korrekt és segítőkész Kálmán! A foglalás gyors és egyszerű volt, az átvételnél mindenről részletes tájékoztatást kaptunk.',
    },
    {
      name: 'J. István',
      text: 'Korrekt, segítőkész kiszolgálás. Több éve ide járunk, meg vagyunk elégedve.',
    },
    {
      name: 'B. Péter',
      text: 'Korrekt, pontos ügyintézés, barátságos kiszolgálás.',
    },
  ];

  return (
    <main className="font-sans">
      <section
        className="relative min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10">
          <div className="flex justify-between bg-black/70 px-6 py-4 text-sm font-bold">
            <div>Tetőbox bérlés Dunaújvárosban és környékén</div>
            <div>Hívjon: {phoneDisplay}</div>
          </div>

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">
            <div>
              <h1 className="text-4xl font-black uppercase">Tetőbox bérlés</h1>
              <p className="text-2xl font-bold">Dunaújváros</p>
            </div>

            <div className="flex gap-8 text-lg font-bold uppercase">
              <a href="#arak">Tetőboxok és árak</a>
              <a href="#kiegeszitok">Kiegészítő bérlés</a>
              <a href="#galeria">Galéria</a>
              <a href="#kapcsolat">Kapcsolat</a>
            </div>
          </nav>

          <div className="mx-auto max-w-7xl px-6 pt-24">
            <h2 className="max-w-4xl text-7xl font-black uppercase leading-none">
              Tetőbox bérlés Dunaújvárosban
            </h2>

            <p className="mt-10 text-3xl font-black">
              Hívjon: {phoneDisplay}
            </p>

            <p className="mt-6 max-w-3xl text-xl leading-9">
              Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés utazáshoz,
              nyaraláshoz és síeléshez.
            </p>

            <div className="mt-10 flex gap-5 pb-24">
              <a
                href={`tel:${phoneHref}`}
                className="rounded bg-sky-700 px-10 py-5 text-xl font-black uppercase"
              >
                Telefonos foglalás
              </a>

              <a
                href="#arak"
                className="rounded border-2 border-white px-10 py-5 text-xl font-black uppercase"
              >
                Árak megtekintése
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="arak" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black uppercase text-sky-700">
            Tetőboxok és árak
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ['S méret', '8 000 Ft-tól', '/s-box.jpg'],
              ['L méret', '10 000 Ft-tól', '/l-box.jpg'],
              ['XL méret', '12 000 Ft-tól', '/xl-box.jpg'],
            ].map(([title, price, img]) => (
              <div key={title} className="overflow-hidden rounded bg-zinc-50 shadow">
                <img src={img} alt={title} className="h-64 w-full object-contain bg-white p-6" />
                <div className="p-6">
                  <h3 className="text-3xl font-black uppercase text-sky-700">{title}</h3>
                  <p className="mt-5 text-4xl font-black">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kiegeszitok" className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black uppercase text-sky-700">
            Kiegészítő bérlés
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded bg-white p-8 shadow">
              <img src="/wingbar.jpg" alt="Tetőcsomagtartó" className="mx-auto h-64 object-contain" />
              <h3 className="mt-6 text-4xl font-black uppercase text-sky-700">
                Tetőcsomagtartó bérlés
              </h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Ha nincs saját keresztrúda az autón, a tetőboxhoz tetőcsomagtartó is bérelhető.
              </p>
              <p className="mt-6 text-5xl font-black text-sky-700">1 500 Ft / nap-tól</p>
            </div>

            <div className="rounded bg-white p-8 shadow">
              <img src="/bike.jpg" alt="Kerékpárszállító" className="mx-auto h-64 object-contain" />
              <h3 className="mt-6 text-4xl font-black uppercase text-sky-700">
                Kerékpárszállító bérlés
              </h3>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Kerékpárok szállításához tetőre vagy vonóhorogra szerelhető megoldások.
              </p>
              <p className="mt-6 text-5xl font-black text-sky-700">2 000 Ft / nap-tól</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black uppercase text-sky-700">
            Galéria
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {['/g1.jpg','/g2.jpg','/g3.jpg','/g4.jpg'].map((img) => (
              <img key={img} src={img} className="h-72 w-full rounded object-cover shadow" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black uppercase text-sky-700">
            Referenciák
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {references.map((item) => (
              <div key={item.name} className="rounded bg-white p-8 text-center shadow">
                <div className="text-5xl">👤</div>
                <p className="mt-6 text-lg leading-8 text-zinc-700">{item.text}</p>
                <p className="mt-6 text-xl font-black text-sky-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kapcsolat" className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black uppercase">Kapcsolat</h2>

          <div className="mt-10 space-y-4 text-2xl font-bold">
            <p>Telefon: {phoneDisplay}</p>
            <p>Email: {email}</p>
            <p>Nyitvatartás: minden nap 15:00–18:00</p>
            <p>Dunaújváros és környéke</p>
          </div>

          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps?q=Duna%C3%BAjv%C3%A1ros&output=embed"
              className="h-[400px] w-full rounded"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
