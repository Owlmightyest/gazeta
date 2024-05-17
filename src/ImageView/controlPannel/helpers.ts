import {
  ChangePage,
  Close,
  ImageNode,
  Link,
  SquareNode,
  TextNode,
  ButtonNode,
} from "../../commonTypes";
import { v4 as uuidv4 } from "uuid";

export const createNewTextNode = ({
  x,
  y,
  text,
  fill,
  interective,
  fontSize,
}: {
  x: number;
  y: number;
  text: string;
  fill: string;
  fontSize: number;
  interective: ChangePage | Link | Close | null;
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
    interective,
    editable: false,
  };
};

export const createNewImage = ({
  height,
  src,
  width,
  x,
  y,
  interective,
}: {
  x: number;
  y: number;
  src: string;
  width: number;
  height: number;
  interective: ChangePage | Link | Close | null;
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
  interective,
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
  interective,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  borderRadius?: number;
  stroke?: string;
  strokeWidth?: number;
  interective: ChangePage | Link | Close | null;
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
  interective,
});

export const createNewButtonNode = ({
  fill,
  fontSize,
  height,
  interective,
  text,
  textColor,
  width,
  x,
  y,
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
  text: string;
  fontSize: number;
  textColor: string;
  interective: ChangePage | Link | Close | null;
}): ButtonNode => ({
  x,
  y,
  width,
  height,
  fill,
  fontSize,
  text,
  textColor,
  interective,
  borderRadius,
  stroke,
  strokeWidth,
  id: uuidv4(),
  draggable: true,
  editable: false,
  name: "Кнопко",
  type: "button",
});
