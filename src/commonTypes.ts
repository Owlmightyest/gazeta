import { ImageReduxStore } from "./ImageView/store/model";

export interface CommonNode {
  width: number;
  height: number;
  x: number;
  y: number;
  draggable: boolean;
  id: string;
  name: string;
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
  fontStyle: string;
}

export interface ImageNode extends CommonNode {
  src: string;
  type: "image";
  bw: boolean;
}

export interface SVGNode extends CommonNode {
  src: string;
  type: "svg";
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
export type NodeTypes = "text" | "image" | "square" | "button" | "svg";

export interface IReduxStore {
  images: ImageReduxStore;
}

export interface IFonts {
  name: string;
  woff2: string;
  woff: string;
}
