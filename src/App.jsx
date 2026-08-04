import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDark, setIsDark] = useState(false);
  return (
    <article className="app">
      <ColorDisplay
        colorValue={colorValue}
        hexValue={hexValue}
        isDark={isDark}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setIsDark={setIsDark}
        isDark={isDark}
      />
    </article>
  );
}

export default App;
