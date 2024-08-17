import { useState } from "react";

export const useCreateSquare = () => {
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [stroke, setStroke] = useState<string>("#000000");
  const [strokeWidth, setStrokeWidth] = useState<number>(0);

  const chageStrokeWidth = (s: string) => {
    setStrokeWidth(+s);
  };

  const changeStroke = (s: string) => {
    setStroke(s);
  };

  const changeBorderRadius = (s: string) => {
    setBorderRadius(+s);
  };

  return {
    color,
    setColor,
    width,
    setWidth,
    height,
    setHeight,
    borderRadius,
    changeBorderRadius,
    stroke,
    changeStroke,
    strokeWidth,
    chageStrokeWidth,
  };
};
