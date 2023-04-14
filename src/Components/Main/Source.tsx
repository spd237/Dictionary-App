export default function Source() {
  return (
    <footer className="flex flex-col mt-14 relative before:w-full before:h-[1px] before:absolute before:bg-border-color before:top-[-1.5rem] sm:flex-row sm:gap-5 dark:before:bg-border-color-dark">
      <span className=" underline text-moderate-gray hover:cursor-pointer">
        Source
      </span>
      <a
        href="https://en.wiktionary.org/wiki/keyboard"
        className="underline dark:text-white"
      >
        https://en.wiktionary.org/wiki/keyboard
      </a>
    </footer>
  );
}
