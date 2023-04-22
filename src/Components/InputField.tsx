import { useState } from "react";
import search from "../assets/icon-search.svg";

type PropsType = {
  setWord: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function InputField({ setWord }: PropsType) {
  const [wordInput, setWordInput] = useState<string>("keyboard");

  function updateWord(e: React.ChangeEvent<HTMLInputElement>) {
    setWordInput(e.target.value);
  }

  return (
    <form
      className="mt-6 relative sm:mt-12"
      onSubmit={(e) => {
        e.preventDefault();
        setWord(wordInput);
      }}
    >
      <label>
        <input
          type="text"
          id="word-input"
          className="bg-input-light min-w-full  rounded-2xl px-6 py-4 font-bold text-base sm:text-xl
          placeholder:font-bold placeholder:text-light-text placeholder:opacity-25
          focus:outline focus:outline-2 focus:outline-moderate-purple
          dark:bg-input-dark dark:text-dark-text dark:placeholder:text-dark-text"
          placeholder="Search for any word...         "
          required
          onChange={updateWord}
          value={wordInput}
        />
      </label>
      <button className="absolute h-full w-[2rem] top-0 right-0">
        <img src={search} alt="search" />
      </button>
    </form>
  );
}
