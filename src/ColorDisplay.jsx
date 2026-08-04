const ColorDisplay = ({ colorValue = "Empty Value", hexValue, isDark }) => {
  console.log(`Is Dark-${isDark}`);
  return (
    <div
      className="colorDisplayTile"
      style={{
        backgroundColor: hexValue ? hexValue : "",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorDisplay;
