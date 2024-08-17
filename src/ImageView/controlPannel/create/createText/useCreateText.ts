import { useState } from "react";

export const useCreateText = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(14);
  const [fontStyle, setFontStyle] = useState("buran");

  return {
    input,
    setInput,
    color,
    setColor,
    fontSize,
    setFontSize,
    fontStyle,
    setFontStyle,
  };
};
