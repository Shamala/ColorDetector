import colorNames from "colornames";
const ColorInput = ({
  colorValue,
  setColorValue,
  setHexValue,
  setIsDark,
  isDark,
}) => {
  return (
    <form className="colorInput" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputColor" className="offScreen">
        Add Color Name:
      </label>
      <input
        type="text"
        name="inputColor"
        id="inputColor"
        value={colorValue}
        autoFocus
        required
        placeholder="Add Color Name"
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value) || "");
        }}
      />
      <button
        onClick={(e) => {
          console.log(isDark);
          setIsDark(!isDark);
        }}
      >
        Toggle text Color
      </button>
    </form>
  );
};

export default ColorInput;
