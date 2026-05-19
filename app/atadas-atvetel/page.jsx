export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="bg-zinc-900 px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <a href="/" className="text-sm font-bold uppercase text-sky-300">← Vissza a főoldalra</a>
          <h1 className="mt-6 text-4xl font-black uppercase md:text-5xl">Átadás-Átvételi Lap</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-6 px-5 py-12">
        
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Átadáskor</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    Bérelt eszköz: Thule Touring M / Thule Touring L / egyéb: ____________________<br />
    Átadás dátuma: ______ év ____ hó ____ nap ____ óra ____ perc<br />
    Tetőbox állapota: sérülésmentes / karcos / repedt / egyéb: ____________________<br />
    Kulcsok száma: ______ db<br />
    Rögzítőelemek hiánytalanok: igen / nem<br />
    Fotó készült: igen / nem<br />
    Kaució átvéve: igen / nem, összege: __________ Ft
  </p>
</div>
<div className="rounded border border-zinc-200 bg-white p-7 shadow-sm">
  <h2 className="text-2xl font-black uppercase text-[#063f83]">Visszavételkor</h2>
  <p className="mt-5 leading-8 text-zinc-700">
    Visszavétel dátuma: ______ év ____ hó ____ nap ____ óra ____ perc<br />
    Sérülés: nincs / van, leírás: ____________________<br />
    Hiányzó tartozék: nincs / van, leírás: ____________________<br />
    Tisztaság: megfelelő / tisztítás szükséges<br />
    Késedelem: nincs / van<br />
    Kaució visszaadva: igen / nem / részben, összeg: __________ Ft<br />
    Bérbeadó aláírása: ____________________<br />
    Bérbevevő aláírása: ____________________
  </p>
</div>

      </section>
    </main>
  );
}
