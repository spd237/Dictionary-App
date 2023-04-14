import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import arrow from "../assets/icon-arrow-down.svg";
import useThemeSwitch from "../hooks/useThemeSwitch";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header() {
  const [theme, setTheme] = useThemeSwitch();
  const [checked, setChecked] = useLocalStorage("checked", false);

  function handleCheckbox() {
    setChecked(checked === false ? true : false);
  }

  return (
    <header className="flex justify-between">
      <img src={logo} alt="logo" />
      <div className="flex gap-8">
        <div
          className="flex gap-4 items-center relative
        hover:cursor-pointer after:w-[1px] after:absolute after:h-8 after:bg-border-color after:right-[-1rem]"
        >
          <button className=" text-light-text font-bold text-sm sm:text-lg dark:text-white">
            Sans Serif
          </button>
          <img src={arrow} alt="arrow" />
          {/* <ul className="absolute z-10 top-12 left-[-5rem] bg-white rounded-2xl p-6 pr-20 shadow-[0_5px_30px_rgba(0,0,0,0.1)] flex flex-col gap-4 dark:bg-input-dark dark:text-white dark:shadow-[0px_5px_30px_#A445ED]">
            <li className="dark:hover:text-moderate-purple">Sans Serif</li>
            <li className="dark:hover:text-moderate-purple">Serif</li>
            <li className="dark:hover:text-moderate-purple">Mono</li>
          </ul> */}
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
