import { ImageReduxStore } from "./ImageView/store/model";

export interface CommonNode {
  width: number;
  height: number;
  x: number;
  y: number;
  draggable: boolean;
  id: string;
  name: string;
  interective: ChangePage | Link | Close | null;
}

export type InterectiveElement = "changePage" | "link" | "close";
export interface ChangePage {
  type: "changePage";
  link: string;
}
export interface Link {
  type: "link";
  link: string;
}
export interface Close {
  type: "close";
}

export interface TextNode extends CommonNode {
  type: "text";
  fontSize: number;
  fill: string;
  text: string;
  editable: boolean;
}

export interface ImageNode extends CommonNode {
  src: string;
  type: "image";
}

export interface SquareNode extends CommonNode {
  type: "square";
  fill: string;
  borderRadius?: number;
  stroke?: string;
  strokeWidth?: number;
}

export interface ButtonNode
  extends Omit<SquareNode, "type">,
    Omit<TextNode, "type" | "fill"> {
  type: "button";
  textColor: string;
}
export type NodeTypes = "text" | "image" | "square" | "button";

export interface IReduxStore {
  images: ImageReduxStore;
}
