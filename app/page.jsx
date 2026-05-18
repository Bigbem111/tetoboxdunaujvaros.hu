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
      min: 'Minimum bérleti díj: 8 000 Ft',
    },
    {
      name: 'L méretű tetőbox',
      image: '/L-méret.jpg',
      size: 'Kb. 400 liter',
      description: 'Családi nyaraláshoz, hosszabb utakhoz, síeléshez.',
      price: '2 000 Ft / nap-tól',
      min: 'Minimum bérleti díj: 8 000 Ft',
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

  const gallery = [
    '/galeria-1.jpg',
    '/galeria-2.jpg',
    '/galeria-3.jpg',
    '/galeria-4.jpg',
  ];

  const references = [
    {
      name: 'N. Krisztián',
      text: 'Rendkívül korrekt és segítőkész Kálmán! A foglalás gyors és egyszerű volt, az átvételnél mindenről részletes tájékoztatást kaptunk. A bérelt felszerelés hibátlan állapotban volt, az egész nyaralás sokkal kényelmesebb volt. Biztosan innen fogunk újra bérelni!',
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

  const benefits = [
    ['🛡️', 'Biztonságos', 'Tetőboxaink kiváló minőségű anyagokból készülnek.'],
    ['👌', 'Könnyű használat', 'Egyszerű rögzítés és használat az utazás előtt.'],
    ['🧳', 'Nagy tárolókapacitás', 'Több hely a bőröndöknek és sportfelszereléseknek.'],
    ['🚗', 'Minden autóhoz', 'Segítünk kiválasztani a megfelelő rögzítést.'],
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section id="fooldal" className="relative min-h-[760px] overflow-hidden text-white md:min-h-[860px]">
        <img
          src="/tengerparti-hero.png"
          alt="Autó tetőboxszal tengerparton"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <section className="relative z-10 bg-zinc-950/85 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-3 text-sm font-semibold md:flex-row">
            <p>Tetőbox bérlés Dunaújvárosban és környékén</p>
            <a href={`tel:${phoneHref}`} className="text-2xl font-black tracking-wide text-white">
              Hívjon: {phoneDisplay}
            </a>
          </div>
        </section>

        <header className="relative z-10 bg-transparent">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 md:flex-row">
            <a href="#fooldal" className="text-center md:text-left">
              <p className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">Tetőbox bérlés</p>
              <p className="text-xl font-black text-white md:text-2xl">Dunaújváros</p>
            </a>

            <nav className="flex flex-wrap justify-center gap-8 text-sm font-black uppercase text-white md:text-base">
              <a href="#fooldal" className="border-b-2 border-white pb-2">Főoldal</a>
              <a href="#tetoboxok-es-arak" className="pb-2 hover:border-b-2 hover:border-white">Tetőboxok és árak</a>
              <a href="#kiegeszito-berles" className="pb-2 hover:border-b-2 hover:border-white">Kiegészítő bérlés</a>
              <a href="#galeria" className="pb-2 hover:border-b-2 hover:border-white">Galéria</a>
              <a href="#berlesi-feltetelek" className="pb-2 hover:border-b-2 hover:border-white">Feltételek</a>
              <a href="#kapcsolat" className="pb-2 hover:border-b-2 hover:border-white">Kapcsolat</a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 md:pt-36">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase leading-tight tracking-tight drop-shadow-xl md:text-7xl lg:text-8xl">
              Tetőbox bérlés Dunaújvárosban
            </h1>
            <p className="mt-10 text-3xl font-black leading-tight drop-shadow-lg md:text-5xl">
              Hívjon: {phoneDisplay}
            </p>
            <p className="mt-8 max-w-3xl text-xl font-bold leading-9 text-white drop-shadow md:text-2xl">
              Tetőbox, tetőcsomagtartó és kerékpárszállító bérlés utazáshoz, nyaraláshoz és síeléshez.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <a href={`tel:${phoneHref}`} className="rounded bg-sky-700 px-10 py-5 text-center text-lg font-black uppercase text-white shadow-lg hover:bg-sky-800">
                Telefonos foglalás
              </a>
              <a href="#tetoboxok-es-arak" className="rounded border-2 border-white px-10 py-5 text-center text-lg font-black uppercase text-white shadow-lg hover:bg-white hover:text-zinc-900">
                Árak megtekintése
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="tetoboxok-es-arak" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black uppercase text-[#063f83]">Tetőboxok és árak</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#063f83]" />
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-700">
            Válassz méretet az utazáshoz. Ha nem vagy biztos benne, telefonon segítünk kiválasztani a megfelelő tetőboxot.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {roofBoxes.map((box) => (
            <article key={box.name} className="rounded border border-zinc-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-xl font-black uppercase text-[#063f83]">{box.name}</h3>
              <p className="mt-2 font-bold text-zinc-700">Méret: {box.size}</p>
              <div className="mt-5 flex h-36 items-center justify-center">
                <img src={box.image} alt={box.name} className="max-h-full w-full object-contain" />
              </div>
              <p className="mt-4 min-h-[68px] text-sm leading-6 text-zinc-600">{box.description}</p>
              <p className="mt-5 text-2xl font-black text-[#063f83]">{box.price}</p>
              <p className="mt-1 text-sm font-bold text-zinc-600">{box.min}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kiegeszito-berles" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black uppercase text-[#063f83]">Kiegészítő bérlés</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#063f83]" />
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {extras.map((item) => (
            <article key={item.title} className="grid items-center gap-5 rounded border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_1.1fr]">
              <div className="flex h-48 items-center justify-center">
                <img src={item.image} alt={item.title} className="max-h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase leading-tight text-[#063f83]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-700">{item.text}</p>
                <p className="mt-5 text-2xl font-black text-[#063f83]">{item.price}</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-zinc-500">Az ár a gépjármű típusától és a felszereléstől függően változhat.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl border-t border-zinc-200 px-5 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase text-sky-700">Galéria</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={image} className="flex h-44 items-center justify-center overflow-hidden rounded border border-zinc-200 bg-zinc-100">
              <img src={image} alt={`Galéria kép ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="referenciak" className="mx-auto max-w-7xl border-t border-zinc-200 px-5 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase text-sky-700">Referenciák</h2>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {references.map((item) => (
            <article key={item.name} className="rounded border border-zinc-200 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-sky-700 text-3xl text-sky-700">♙</div>
              <p className="mt-5 min-h-[120px] text-sm leading-6 text-zinc-700">“{item.text}”</p>
              <div className="mt-4 text-yellow-400">★★★★★</div>
              <p className="mt-2 font-black text-sky-700">{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-zinc-200 px-5 py-10">
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map(([icon, title, text]) => (
            <div key={title} className="grid grid-cols-[48px_1fr] gap-4">
              <div className="text-4xl text-sky-700">{icon}</div>
              <div>
                <h3 className="font-black uppercase text-[#063f83]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="berlesi-feltetelek" className="border-t border-zinc-200 bg-zinc-50 py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black uppercase text-sky-700">Bérlési feltételek</h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-sky-700" />
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-700">
              Az alábbi feltételek minden tetőbox, tetőcsomagtartó és kerékpárszállító bérlésre vonatkoznak.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-black uppercase text-[#063f83]">Alap feltételek</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  'Foglalás telefonon vagy emailben történik.',
                  'A bérlés minden esetben kaució ellenében történik.',
                  'Minimum bérleti díj: 8 000 Ft.',
                  'Átvétel Dunaújvárosban, előre egyeztetett időpontban.',
                  'Az eszközöket tiszta és sérülésmentes állapotban kérjük visszahozni.',
                  'Segítünk a megfelelő felszerelés kiválasztásában és felszerelésében.',
                  'Az autóval való kompatibilitást minden esetben előzetesen ellenőrizzük.',
                  'Fizetési módok: készpénz, banki utalás, Revolut.',
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded bg-white p-4 text-sm font-semibold leading-6 text-zinc-700 shadow-sm ring-1 ring-zinc-200">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-sky-700 text-center text-xs font-black leading-5 text-white">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black uppercase text-[#063f83]">Kaució</h3>
                <div className="mt-5 space-y-3">
                  {[
                    ['Tetőbox', '30 000 Ft'],
                    ['Tetőcsomagtartó', '15 000 Ft'],
                    ['Kerékpárszállító', '25 000 Ft'],
                  ].map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between border-b border-zinc-200 pb-3 last:border-0 last:pb-0">
                      <span className="font-bold text-zinc-700">{label}</span>
                      <span className="text-xl font-black text-sky-700">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black uppercase text-[#063f83]">Késés és tisztítás</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  Késedelmes visszahozatal esetén plusz napi bérleti díj kerül felszámításra.
                  Erősen szennyezett állapotban visszahozott eszköz esetén tisztítási díj számítható fel.
                </p>
              </div>
            </div>
          </div>
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
              <p>Nyitvatartás: minden nap 15:00–18:00</p>
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


      <section id="terkep" className="border-t border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-black uppercase text-sky-700">Nyitvatartás és elérhetőség</h2>
              <div className="mt-3 h-1 w-16 bg-sky-700" />
              <div className="mt-8 space-y-5 text-lg font-bold text-zinc-800">
                <p>📍 Dunaújváros és környéke</p>
                <p>🕒 Minden nap: 15:00–18:00</p>
                <p>📞 <a href={`tel:${phoneHref}`} className="text-sky-700 hover:underline">{phoneDisplay}</a></p>
                <p>✉️ <a href={`mailto:${email}`} className="text-sky-700 hover:underline">{email}</a></p>
              </div>
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                Az átvétel és visszahozatal minden esetben előre egyeztetett időpontban történik.
              </p>
            </div>
            <div className="overflow-hidden rounded border border-zinc-200 shadow-sm">
              <iframe
                title="Tetőbox bérlés Dunaújváros térkép"
                src="https://www.google.com/maps?q=Duna%C3%BAjv%C3%A1ros&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-6 text-center text-sm font-semibold text-zinc-400">
        © 2026 tetoboxdunaujvaros.hu — Tetőbox bérlés Dunaújváros
      </footer>
    </main>
  );
}
