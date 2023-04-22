interface WordProps {
  word: string | undefined;
  phonetic: string | undefined;
  audio: HTMLAudioElement | undefined;
}

export default function Word({ word, phonetic, audio }: WordProps) {
  return (
    <div className="mt-6 flex justify-between items-center sm:mt-10">
      <div>
        <h1 className="font-bold text-2xl sm:text-6xl sm:mb-3 dark:text-white">
          {word}
        </h1>
        <span className="text-moderate-purple text-lg sm:text-2xl">
          {phonetic}
        </span>
      </div>
      <button
        className="w-[3rem] h-[3rem] sm:w-[4.7rem] sm:h-[4.7rem]"
        onClick={() => audio?.play()}
        aria-label="play audio of word"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75 75"
          className="group"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              opacity=".25"
              className=" group-hover:opacity-100"
            />
            <path d="M29 27v21l21-10.5z" className=" group-hover:fill-white" />
          </g>
        </svg>
      </button>
    </div>
  );
}
