import { useState, useEffect } from "react";

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
};

function useColors() {
  const generateColors = () => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(generateRandomColor());
    }
    return array;
  };

  const [colors, setColors] = useState(generateColors);

  const [activeColor, setActiveColor] = useState({});

  const refresh = (setCategoryColor) => {
    setColors((prevColors) => {
      let newColors = generateColors();
      setActiveColor(newColors[0]);
      setCategoryColor(newColors[0]);
      return [...newColors];
    });
  };

  useEffect(() => {
    setActiveColor(colors[0]);
  }, []);

  const parseColorObject = (colorObject) => {
    return `rgb(${colorObject.r}, ${colorObject.g}, ${colorObject.b})`;
  };

  return [
    colors,
    activeColor,
    setActiveColor,
    parseColorObject,
    setColors,
    refresh,
  ];
}

export default useColors;
