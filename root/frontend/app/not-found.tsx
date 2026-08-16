import Image from "next/image";
export default function notFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/nya-logo.png"
            alt="Nava Youth Association Logo"
            width={52}
            height={52}
            className="h-12 w-12 object-contain rounded-full"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#1C3F36] leading-tight">
              Nava Youth Association
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#D95D39] uppercase">
              Pathikonda
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            404 - Page Not Found
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The page you are looking for does not exist. Please check the URL or return to the homepage.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-14  w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/"
          >
            Go to Home
          </a>
        </div>
      </main>
    </div>
  );
}   