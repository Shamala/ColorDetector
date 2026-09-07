import { useState } from "react";
import colorNames from "colornames";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";
import useDebounce from "./useDebounce";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [isDark, setIsDark] = useState(false);
  const debouncedColorValue = useDebounce(colorValue, 500);
  const hexValue = colorNames(debouncedColorValue) || "";
  return (
    <article className="app">
      <ColorDisplay
        colorValue={debouncedColorValue}
        hexValue={hexValue}
        isDark={isDark}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setIsDark={setIsDark}
        isDark={isDark}
      />
    </article>
  );
}

export default App;
