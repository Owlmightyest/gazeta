import { ImageNode, SquareNode, TextNode, ButtonNode } from "../../commonTypes";

export interface ImageReduxStore {
  pages: Page[];
  selectedNode: string;
  selectedName: string;
}

export type AllNodes = TextNode | ImageNode | SquareNode | ButtonNode;

export interface Page {
  elements: AllNodes[];
  name: string;
}
