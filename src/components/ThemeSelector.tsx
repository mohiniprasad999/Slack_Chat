"use client";

import { type ChangeEvent, useEffect } from "react";
import { themes } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { toggleTheme } from "@/lib/features/settings/settingsSlice";

const ThemeSelector = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.settings.currentTheme);

  const handleThemeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(toggleTheme(e.target.value));
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <select
      className="daisy-select daisy-select-bordered daisy-select-sm w-full max-w-[128px] mr-4"
      onChange={handleThemeSelect}
    >
      {themes.map((theme) => (
        <option key={theme} value={theme} defaultValue={currentTheme}>
          {theme.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelector;
