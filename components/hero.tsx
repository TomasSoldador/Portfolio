import Image from "next/image";
export default function Hero() {
  return (
    <div className="bg-[#ECECEC] dark:bg-slate-950 flex flex-col items-center justify-center text-center lg:pb-72">
      <Image
        src="https://github.com/TomasSoldador.png"
        alt="Profile avatar"
        width={240}
        height={240}
        className="w-60 h-60 rounded-full object-cover bg-white mt-20"
      />
      <h1 className="text-7xl font-extrabold w-6/12 mt-16 text-slate-900 dark:text-slate-100">
        Hello, I&apos;m Tomás, Software
      </h1>
      <p className="text-lg text-gray-600 dark:text-slate-300 mt-16">
        Crafting elegant solutions with code, one project at a time.
      </p>
    </div>
  );
}
