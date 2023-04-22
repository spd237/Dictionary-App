import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { nanoid } from "nanoid";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import PartOfSpeech from "./Components/Main/PartOfSpeech";
import Source from "./Components/Main/Source";
import Word from "./Components/Main/Word";
import useLocalStorage from "./hooks/useLocalStorage";
import emoji from "./assets/emoji.png";

interface DefinitionType {
  definition: string;
  example?: string;
}

interface MeaningType {
  partOfSpeech: string;
  definitions: DefinitionType[];
  antonyms: string[];
  synonyms: string[];
}

interface DataType {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: MeaningType[];
  sourceUrls: string[];
}

function App() {
  const [font, setFont] = useLocalStorage("font", "Sans Serif");
  const [word, setWord] = useState<string | undefined>("keyboard");
  const [wordData, setWordData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      if (error) setError(false);
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data: DataType[] = await response.json();
        setLoading(false);
        if (Array.isArray(data)) {
          setWordData(data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [word]);

  const audioUrl = wordData
    ?.at(0)
    ?.phonetics.filter((phonetic) => phonetic.audio)
    .at(0)?.audio;
  const audio = new Audio(audioUrl);

  const partsOfSpeech = wordData?.at(0)?.meanings.map((meaning) => {
    return (
      <PartOfSpeech
        key={nanoid()}
        partOfSpeech={meaning.partOfSpeech}
        definitions={meaning.definitions}
        synonyms={meaning.synonyms}
        antonyms={meaning.antonyms}
        setWord={setWord}
      />
    );
  });

  return (
    <>
      <div
        className={`min-h-[100vh] p-6 lg:max-w-4xl lg:mx-auto lg:pt-10 font-${font}`}
      >
        <Header font={font} setFont={setFont} />
        <main>
          <InputField setWord={setWord} />

          {loading ? (
            <div className=" flex justify-center pt-10">
              <Oval
                height={80}
                width={80}
                color="#A445ED"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loading}
                ariaLabel="oval-loading"
                secondaryColor="#A445ED"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : error ? (
            <div className=" text-center mt-10 flex flex-col items-center">
              <img src={emoji} alt="emoji" className="mb-8" />
              <h2 className="text-light-text dark:text-white text-xl mb-6">
                No Definitions Found
              </h2>
              <p className="text-moderate-gray">
                Sorry pal, we couldn't find definitions for the word you were
                looking for. You can try the search again at later time or head
                to the web instead.
              </p>
            </div>
          ) : (
            <>
              <Word
                word={wordData?.at(0)?.word}
                phonetic={wordData?.at(0)?.phonetic}
                audio={audio}
              />
              {partsOfSpeech}
              <Source source={wordData?.at(0)?.sourceUrls.at(0)} />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
