import { useState } from "react";
import { ChangePage, Close, Link, NodeTypes } from "../../commonTypes";
import { useDispatch } from "react-redux";
import {
  createNewButtonNode,
  createNewImage,
  createNewSVGNode,
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
    e: React.ChangeEvent<HTMLInputElement>,
    bw?: boolean
  ) => {
    if (!e.target.files) return;
    const img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);
    await new Promise((resolve) => (img.onload = resolve));
    const { src, width, height } = img;
    const node = createNewImage({
      src,
      width: width / 3,
      height: height / 3,
      x: 0,
      y: 0,
      bw,
    });

    dispatch(addNode({ node }));
  };

  const createText = ({
    color,
    input,

    fontSize,
    fontStyle,
  }: {
    input: string;
    color: string;

    fontSize: number;
    fontStyle: string;
  }) => {
    const node = createNewTextNode({
      text: input,
      x: 50,
      y: 10,
      fill: color,

      fontSize,
      fontStyle,
    });
    dispatch(addNode({ node }));
  };

  const createSquare = (obj: {
    color: string;
    width: number;
    height: number;
    borderRadius?: number;
    stroke?: string;
    strokeWidth?: number;
  }) => {
    const { color, ...rest } = obj;
    const node = createNewSquare({
      fill: color,
      x: 300,
      y: 100,
      ...rest,
    });
    dispatch(addNode({ node }));
  };

  return {
    mode,
    changeMode,
    createImage,
    createText,
    createSquare,
  };
};
