import {
  ImageNode,
  SquareNode,
  TextNode,
  ButtonNode,
  SVGNode,
  IFonts,
} from "../../commonTypes";

export interface ImageReduxStore {
  elements: AllNodes[];
  selectedNode: string;
  selectedName: string;
  fonts: IFonts[];
}

export type AllNodes = TextNode | ImageNode | SquareNode | ButtonNode | SVGNode;
