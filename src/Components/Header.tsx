import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useThemeSwitch from "../hooks/useThemeSwitch";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import arrow from "../assets/icon-arrow-down.svg";

type headerProps = {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ font, setFont }: headerProps) {
  const [theme, setTheme] = useThemeSwitch();
  const [checked, setChecked] = useLocalStorage("checked", false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);

  function handleCheckbox() {
    setChecked(checked === false ? true : false);
  }

  //logic to capitalize first letter of each word of the font to display
  const fontWordsArray = font.split(" ");
  for (let i = 0; i < fontWordsArray.length; i++) {
    fontWordsArray[i] =
      fontWordsArray[i].charAt(0).toUpperCase() + fontWordsArray[i].slice(1);
  }
  const capitalizedFont = fontWordsArray.join(" ");

  return (
    <header className="flex justify-between">
      <img src={logo} alt="logo" />
      <div className="flex gap-8">
        <div
          className="flex gap-4 items-center relative
        hover:cursor-pointer after:w-[1px] after:absolute after:h-8 after:bg-border-color after:right-[-1rem]"
          onClick={() =>
            setFontMenuOpen((prevFontMenuOpen) => !prevFontMenuOpen)
          }
        >
          <button className=" text-light-text font-bold text-sm sm:text-lg dark:text-white">
            {capitalizedFont}
          </button>
          <img src={arrow} alt="arrow" />
          {fontMenuOpen && (
            <ul className="absolute z-10 top-12 left-[-5rem] bg-white rounded-2xl p-[1.5rem_5rem_1.5rem_1.5rem] shadow-[0_5px_30px_rgba(0,0,0,0.1)] flex flex-col gap-4 dark:bg-input-dark dark:text-white dark:shadow-[0px_5px_30px_#A445ED]">
              <li
                className="hover:text-moderate-purple font-bold w-20"
                onClick={(e) =>
                  setFont((e.target as HTMLElement).textContent!.toLowerCase())
                }
              >
                Sans Serif
              </li>
              <li
                className="hover:text-moderate-purple font-bold font-serif"
                onClick={(e) =>
                  setFont((e.target as HTMLElement).textContent!.toLowerCase())
                }
              >
                Serif
              </li>
              <li
                className="hover:text-moderate-purple font-bold font-mono"
                onClick={(e) =>
                  setFont((e.target as HTMLElement).textContent!.toLowerCase())
                }
              >
                Mono
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="switch"
            className="h-0 w-0 hidden"
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
              handleCheckbox();
            }}
            checked={checked}
          />
          <label
            htmlFor="switch"
            className="hover:cursor-pointer indent-[-9999px] w-10 h-5 bg-moderate-gray rounded-3xl relative after:absolute after:top-[3px] after:left-1 after:w-[14px] after:h-[14px] after:bg-white after:rounded-full after:duration-300"
          >
            Toggle
          </label>
          <img src={moon} alt="toggle-theme" />
        </div>
      </div>
    </header>
  );
}
