const ColorDisplay = ({ colorValue = "Empty Value", hexValue, isDark }) => {
  console.log(`Is Dark-${isDark}`);
  const isUnknownColor = colorValue && !hexValue;
  return (
    <div
      className="colorDisplayTile"
      style={{
        backgroundColor: hexValue ? hexValue : "",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <p>{isUnknownColor ? "No Such Color" : colorValue || "Empty Value"}</p>
      <p>{isUnknownColor ? colorValue : hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorDisplay;
