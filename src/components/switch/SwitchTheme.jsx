import React, { useContext } from "react";
import "./SwitchTheme.scss";
import { ThemeContext } from "../../providers/ThemeProvider";
import { setTheme } from "../../localStorage/localStorage";

const SwitchTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className="switch">
      <input
        type="checkbox"
        checked={!isDark}
        onChange={() => {
          setTheme(!isDark);
          setIsDark(!isDark);
        }}
      />
      <h4 style={{ color: "#4793ff" }}>Light</h4>
    </div>
  );
};

export default SwitchTheme;
