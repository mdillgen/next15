import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-slate-300 ~rounded-0.5/2">
          <h1 className="~my-1.5/3 ~text-xs/xl5 ~leading-xs/xl5">Tailwindcss Fluid is awesome!</h1>
        </div>
      </main>
    </div>
  );
}
