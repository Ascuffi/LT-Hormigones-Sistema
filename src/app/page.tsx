export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-green-500">
          LT HORMIGONES
        </p>

        <h1 className="text-5xl font-bold">
          Sistema de Gestion
        </h1>

        <p className="mt-4 text-zinc-400">
          Gestion de acopios, stock, clientes y entregas
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <p className="text-lg font-medium">
            Sistema iniciado correctamente
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            LT Hormigones
          </p>
        </div>
      </div>
    </main>
  );
}