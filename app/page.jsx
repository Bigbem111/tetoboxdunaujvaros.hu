export default function TetoboxDunaujvarosWebsite() {
  const phoneDisplay = '+36 70 401 4662';
  const phoneHref = '+36704014662';
  const email = 'info@tetoboxdunaujvaros.hu';

  const roofBoxes = [
    {
      name: 'M méretű tetőbox',
      image: '/M-méret.jpg',
      size: 'Kb. 300–350 liter',
      description: 'Kisebb családoknak, rövidebb utakhoz, hétvégi kiránduláshoz.',
      price: '2 000 Ft / nap-tól',
      min: 'Minimum bérleti díj: 7 000 Ft',
    },
    {
      name: 'L méretű tetőbox',
      image: '/L-méret.jpg',
      size: 'Kb. 400 liter',
      description: 'Családi nyaraláshoz, hosszabb utakhoz, síeléshez.',
      price: '2 000 Ft / nap-tól',
      min: 'Minimum bérleti díj: 7 000 Ft',
    },
    {
      name: 'XL méretű tetőbox',
      image: '/XL-méret.jpg',
      size: 'Kb. 500–600 liter',
      description: 'Nagyobb csomagokhoz, hosszabb külföldi utakhoz, több fő részére.',
      price: '2 500 Ft / nap-tól',
      min: 'Minimum bérleti díj: 9 000 Ft',
    },
  ];

  const extras = [
    {
      title: 'Tetőcsomagtartó bérlés',
      image: '/Wingbar-evo.jpg',
      text: 'Ha nincs saját keresztrúd az autón, a tetőboxhoz tetőcsomagtartó is bérelhető. Autótípus alapján egyeztetjük a kompatibilitást.',
      price: '1 500 Ft / nap-tól',
    },
    {
      title: 'Kerékpárszállító bérlés',
      image: '/Kerékpárszállító.jpg',
      text: 'Kerékpárok szállításához tetőre vagy vonóhorogra szerelhető megoldások, előzetes egyeztetés alapján.',
      price: '2 000 Ft / nap-tól',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section
        id="fooldal"
        className="relative min-h-[760px] overflow-hidden text-white md:min-h-[860px]"
      >
        <img
          src="/tengerparti-hero.png"
          alt="Autó tetőboxszal tengerparton"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />

        <section className="relative z-10 bg-zinc-950/80 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-3 text-sm font-semibold md:flex-row">
            <p>Tetőbox bérlés Dunaújvárosban és környékén</p>
            <a href={`tel:${phoneHref}`} className="text-lg font-black tracking-wide text-white">
              Hívjon: {phoneDisplay}
            </a>
          </div>
        </section>

        <header className="relative z-10 bg-transparent">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 md:flex-row">
            <a href="#fooldal" className="text-center md:text-left">
              <p className="text-3xl font-black uppercase tracking-tight text-white">Tetőbox bérlés</p>
              <p className="text-xl font-bold text-white">Dunaújváros</p>
            </a>

            <nav className="flex flex-wrap justify-center gap-8 text-sm font-black uppercase text-white">
              <a href="#fooldal" className="border-b-2 border-white pb-2 hover:border-b-2 hover:border-white">Főoldal</a>
              <a href="#tetoboxok-es-arak" className="pb-2 hover:border-b-2 hover:border-white">Tetőboxok és árak</a>
              <a href="#kiegeszito-berles" className="pb-2 hover:border-b-2 hover:border-white">Kiegészítő bérlés</a>
              <a href="#kapcsolat" className="pb-2 hover:border-b-2 hover:border-white">Kapcsolat</a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-20 md:pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black uppercase leading-tight tracking-tight md:text-7xl">
              Tetőbox bérlés Dunaújvárosban
            </h1>
            <p className="mt-10 text-3xl font-black leading-tight md:text-4xl">
              Hívjon: {phoneDisplay}
            </p>
            <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-white/90">
              Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés utazáshoz, nyaraláshoz és síeléshez.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${phoneHref}`} className="rounded bg-sky-700 px-8 py-4 text-center text-lg font-black uppercase text-white hover:bg-sky-800">
                Telefonos foglalás
              </a>
              <a href="#tetoboxok-es-arak" className="rounded border-2 border-white px-8 py-4 text-center text-lg font-black uppercase text-white hover:bg-white hover:text-zinc-900">
                Árak megtekintése
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 text-center font-black uppercase md:grid-cols-3">
          <p>✓ Tetőbox bérlés</p>
          <p>✓ Tetőcsomagtartó bérlés</p>
          <p>✓ Kerékpárszállító bérlés</p>
        </div>
      </section>

      <section id="tetoboxok-es-arak" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black uppercase text-sky-800 md:text-5xl">Tetőboxok és árak</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-sky-700" />
          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-600">
            Válassz méretet az utazáshoz. Ha nem vagy biztos benne, telefonon segítünk kiválasztani a megfelelő tetőboxot.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {roofBoxes.map((box) => (
            <article key={box.name} className="rounded border border-zinc-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-2xl font-black uppercase text-sky-800">{box.name}</h3>
              <p className="mt-2 font-bold text-zinc-700">Méret: {box.size}</p>
              <div className="mt-6 flex h-40 items-center justify-center">
                <img src={box.image} alt={box.name} className="max-h-full w-full object-contain" />
              </div>
              <p className="mt-4 min-h-[72px] leading-7 text-zinc-600">{box.description}</p>

              <div className="mt-6">
                <p className="text-3xl font-black text-sky-800">{box.price}</p>
                <p className="mt-2 font-bold text-zinc-600">{box.min}</p>
              </div>

              <a href={`tel:${phoneHref}`} className="mt-6 block rounded bg-yellow-300 px-5 py-4 text-center font-black uppercase text-zinc-900 hover:bg-yellow-400">
                Érdeklődés
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="kiegeszito-berles" className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black uppercase text-sky-800 md:text-5xl">Kiegészítő bérlés</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-sky-700" />
            <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-600">
              A tetőbox önmagában nem minden autóra szerelhető fel. Szükség esetén tetőcsomagtartó vagy kerékpárszállító is bérelhető.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {extras.map((item) => (
              <article key={item.title} className="grid overflow-hidden rounded border border-zinc-200 bg-white shadow-md md:grid-cols-2">
                <div className="flex min-h-[270px] items-center justify-center bg-white p-6">
                  <img src={item.image} alt={item.title} className="max-h-[230px] w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-2xl font-black uppercase text-sky-800">{item.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
                  <p className="mt-6 text-3xl font-black text-sky-800">{item.price}</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-500">Az ár a gépjármű típusától és a felszereléstől függően változhat.</p>
                  <a href={`tel:${phoneHref}`} className="mt-6 inline-block rounded bg-sky-700 px-6 py-3 text-center font-black uppercase text-white hover:bg-sky-800">
                    Telefonos egyeztetés
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black uppercase">Bérlés menete</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ['1', 'Telefonos egyeztetés'],
            ['2', 'Autótípus ellenőrzése'],
            ['3', 'Átvétel Dunaújvárosban'],
            ['4', 'Visszahozatal utazás után'],
          ].map(([number, text]) => (
            <div key={number} className="rounded border bg-white p-6 text-center shadow-sm">
              <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-2xl font-black text-white">{number}</p>
              <p className="mt-4 font-black uppercase">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kapcsolat" className="bg-zinc-900 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase">Kapcsolat</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Foglalás és időpontegyeztetés telefonon vagy emailben. Írd meg az autód típusát, évjáratát és az utazás időpontját.
            </p>

            <div className="mt-8 space-y-4 text-xl font-bold">
              <p>Telefon: <a href={`tel:${phoneHref}`} className="text-yellow-300">{phoneDisplay}</a></p>
              <p>Email: <a href={`mailto:${email}`} className="text-yellow-300">{email}</a></p>
              <p>Helyszín: Dunaújváros</p>
            </div>
          </div>

          <div className="rounded bg-white p-6 text-zinc-900">
            <h3 className="text-2xl font-black uppercase">Gyors üzenet minta</h3>
            <p className="mt-4 leading-7 text-zinc-700">
              Szia! Tetőboxot / tetőcsomagtartót / kerékpárszállítót szeretnék bérelni. Autó típusa: ... Időszak: ... Van saját keresztrudam: igen/nem.
            </p>
            <a href={`tel:${phoneHref}`} className="mt-6 block rounded bg-sky-700 px-6 py-4 text-center font-black uppercase text-white hover:bg-sky-800">
              Hívás most
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-6 text-center text-sm font-semibold text-zinc-400">
        © 2026 tetoboxdunaujvaros.hu — Tetőbox bérlés Dunaújváros
      </footer>
    </main>
  );
}
