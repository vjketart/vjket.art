import { useTheme } from "next-themes";
import { BsFillSquareFill } from "react-icons/bs";

export default function SetThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sidebar-icon group">
      <button
        onClick={() => {
          if (theme === "light") setTheme("dark");
          if (theme === "dark") setTheme("light");
        }}
      >
        {<BsFillSquareFill size="30" />}
      </button>
      <span className="sidebar-tooltip group-hover:scale-100">theme</span>
    </div>
  );
}
