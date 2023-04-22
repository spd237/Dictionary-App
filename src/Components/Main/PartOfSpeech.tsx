import Definition from "./Definition";
import { nanoid } from "nanoid";

interface DefinitionType {
  definition: string;
  example?: string;
}
interface PartOfSpeechProps {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
  setWord: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function PartOfSpeech({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
  setWord,
}: PartOfSpeechProps) {
  const definitionsElements = definitions.map((definition) => {
    return (
      <Definition
        key={nanoid()}
        definition={definition.definition}
        example={definition.example}
      />
    );
  });

  return (
    <div className="mt-8">
      <h2 className="font-bold italic text-lg before:bg-border-color relative before:w-[calc(100%_-_80px)] before:h-[1px] before:absolute before:top-4  before:right-0 sm:text-xl dark:text-white dark:before:bg-border-color-dark">
        {partOfSpeech}
      </h2>
      <h3 className=" text-moderate-gray mt-8 sm:text-xl">Meaning</h3>
      <ul
        className="list-disc marker:text-strong-purple
        ml-3 mt-4
      "
      >
        {definitionsElements}
      </ul>

      <div>
        {synonyms.length > 0 && (
          <div className="flex gap-4 mt-6 items-center">
            <h3 className=" text-moderate-gray sm:text-xl">Synonyms</h3>
            <div className="flex flex-wrap">
              {synonyms?.map((synonym) => {
                return (
                  <span
                    className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer"
                    onClick={(e) =>
                      setWord((e.target as HTMLSpanElement).textContent!)
                    }
                  >
                    {synonym}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {antonyms.length > 0 && (
          <div className="flex gap-4 mt-4">
            <h3 className=" text-moderate-gray sm:text-xl">Antonyms</h3>
            <div className="flex flex-wrap">
              {antonyms?.map((antonym) => {
                return (
                  <span
                    className=" text-moderate-purple font-bold ml-4 sm:text-lg hover:underline hover:cursor-pointer"
                    onClick={(e) =>
                      setWord((e.target as HTMLSpanElement).textContent!)
                    }
                  >
                    {antonym}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
