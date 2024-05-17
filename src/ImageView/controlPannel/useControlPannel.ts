import { useState } from "react";
import { ChangePage, Close, Link, NodeTypes } from "../../commonTypes";
import { useDispatch } from "react-redux";
import {
  createNewButtonNode,
  createNewImage,
  createNewSquare,
  createNewTextNode,
} from "./helpers";
import { addNode } from "../store/action";

export const useControlPannel = (id: string) => {
  const dispatch = useDispatch();

  const [mode, setMode] = useState<NodeTypes>("square");

  const changeMode = (m: NodeTypes) => {
    setMode(m);
  };

  const createImage = async (
    url: string,
    interective: ChangePage | Link | Close | null
  ) => {
    const img = new Image();
    img.src = url;
    await new Promise((resolve) => (img.onload = resolve));
    const { src, width, height } = img;
    const node = createNewImage({
      src,
      width: width / 3,
      height: height / 3,
      x: 0,
      y: 0,
      interective,
    });

    dispatch(addNode({ node, id }));
  };

  const createText = ({
    color,
    input,
    interective,
    fontSize,
  }: {
    input: string;
    color: string;
    interective: ChangePage | Link | Close | null;
    fontSize: number;
  }) => {
    const node = createNewTextNode({
      text: input,
      x: 50,
      y: 10,
      fill: color,
      interective,
      fontSize,
    });
    dispatch(addNode({ node, id }));
  };

  const createSquare = (obj: {
    color: string;
    width: number;
    height: number;
    borderRadius?: number;
    stroke?: string;
    strokeWidth?: number;
    interective: ChangePage | Link | Close | null;
  }) => {
    const { color, ...rest } = obj;
    const node = createNewSquare({
      fill: color,
      x: 300,
      y: 100,
      ...rest,
    });
    dispatch(addNode({ node, id }));
  };
  const createButton = (obj: {
    color: string;
    width: number;
    height: number;
    borderRadius?: number;
    stroke?: string;
    strokeWidth?: number;
    interective: ChangePage | Link | Close | null;
    fontSize: number;
    textColor: string;
    text: string;
  }) => {
    const { color, ...rest } = obj;
    const node = createNewButtonNode({
      fill: color,
      x: 300,
      y: 100,
      ...rest,
    });
    dispatch(addNode({ node, id }));
  };
  return {
    mode,
    changeMode,
    createImage,
    createText,
    createSquare,
    createButton,
  };
};
