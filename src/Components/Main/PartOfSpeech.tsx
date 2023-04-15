import Definition from "./Definition";

export default function PartOfSpeech() {
  return (
    <div className="mt-8">
      <h2 className="font-bold italic text-lg before:bg-border-color relative before:w-[calc(100%_-_56px)] before:h-[1px] before:absolute before:top-4  before:left-14 sm:text-xl dark:text-white dark:before:bg-border-color-dark">
        noun
      </h2>
      <h3 className=" text-moderate-gray mt-8 sm:text-xl">Meaning</h3>
      <ul
        className="list-disc marker:text-strong-purple
        ml-3 mt-4
      "
      >
        <Definition />
        <Definition />
        <Definition />
      </ul>

      <div>
        <div className="flex gap-4 mt-6 items-center">
          <h3 className=" text-moderate-gray sm:text-xl">Synonyms</h3>
          <div className="flex flex-wrap">
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              accomplished
            </span>
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              all right
            </span>
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              decent
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <h3 className=" text-moderate-gray sm:text-xl">Antonyms</h3>
          <div className="flex flex-wrap">
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              accomplished
            </span>
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              all right
            </span>
            <span className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer">
              decent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
