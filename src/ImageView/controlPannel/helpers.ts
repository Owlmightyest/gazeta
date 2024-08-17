import {
  ImageNode,
  SquareNode,
  TextNode,
  ButtonNode,
  SVGNode,
} from "../../commonTypes";
import { v4 as uuidv4 } from "uuid";

export const createNewSVGNode = ({
  height,
  src,
  width,
  x,
  y,
}: {
  x: number;
  y: number;
  src: string;
  width: number;
  height: number;
}): SVGNode => {
  return {
    x,
    y,
    src,
    width,
    height,
    draggable: true,
    id: uuidv4(),
    type: "svg",
    name: "Новый рисунок",
  };
};

export const createNewTextNode = ({
  x,
  y,
  text,
  fill,
  fontSize,
  fontStyle,
}: {
  x: number;
  y: number;
  text: string;
  fill: string;
  fontSize: number;

  fontStyle: string;
}): TextNode => {
  return {
    x,
    y,
    text,
    fill,
    width: 100,
    height: 50,
    draggable: true,
    fontSize,
    id: uuidv4(),
    type: "text",
    name: "Новый текст",

    editable: false,
    fontStyle,
  };
};

export const createNewImage = ({
  height,
  src,
  width,
  x,
  y,
  bw,
}: {
  x: number;
  y: number;
  src: string;
  width: number;
  height: number;
  bw?: boolean;
}): ImageNode => ({
  x,
  y,
  src,
  width,
  height,
  draggable: true,
  id: uuidv4(),
  type: "image",
  name: "Новый рисунок",
  bw: bw ?? false,
});

export const createNewSquare = ({
  x,
  y,
  fill,
  height,
  width,
  borderRadius,
  stroke,
  strokeWidth,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  borderRadius?: number;
  stroke?: string;
  strokeWidth?: number;
}): SquareNode => ({
  x,
  y,
  fill,
  width,
  height,
  draggable: true,
  id: uuidv4(),
  type: "square",
  name: "Новый квадрат",
  borderRadius,
  stroke,
  strokeWidth,
});

export const createNewButtonNode = ({
  fill,
  fontSize,
  height,

  text,
  textColor,
  width,
  x,
  y,
  borderRadius,
  stroke,
  strokeWidth,
  fontStyle,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  borderRadius?: number;
  stroke?: string;
  strokeWidth?: number;
  text: string;
  fontSize: number;
  textColor: string;

  fontStyle: string;
}): ButtonNode => ({
  x,
  y,
  width,
  height,
  fill,
  fontSize,
  text,
  textColor,

  borderRadius,
  stroke,
  strokeWidth,
  id: uuidv4(),
  draggable: true,
  editable: false,
  name: "Кнопко",
  type: "button",
  fontStyle,
});
