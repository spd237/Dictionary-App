export default function Source({ source }: { source: string | undefined }) {
  return (
    <div className="flex flex-col mt-14 relative before:w-full before:h-[1px] before:absolute before:bg-border-color before:top-[-1.5rem] sm:flex-row sm:gap-5 dark:before:bg-border-color-dark">
      <span className=" underline text-moderate-gray hover:cursor-pointer">
        Source
      </span>
      <a href={source} className="underline dark:text-white" target={"_blank"}>
        {source}
      </a>
    </div>
  );
}
