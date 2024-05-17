import {
  ChangePage,
  Close,
  InterectiveElement,
  Link,
  ButtonNode,
} from "src/commonTypes";
import { chanageNode } from "src/ImageView/store/action";
import { useDispatch } from "react-redux";
import { useNodeStore } from "src/ImageView/store/hook";

export const useButtonNode = (node: ButtonNode, id: string) => {
  const { interective } = node;
  const { pages, selectedName } = useNodeStore();
  const dispatch = useDispatch();

  const changeNodeWrapper = (node: ButtonNode) => {
    dispatch(chanageNode({ node, id }));
  };

  const changeColor = (s: string) => {
    changeNodeWrapper({ ...node, fill: s });
  };

  const changeBorderRadius = (b: string) => {
    changeNodeWrapper({ ...node, borderRadius: +b });
  };
  const changeStrokeColor = (stroke: string) => {
    changeNodeWrapper({ ...node, stroke });
  };
  const changeStrokeWidth = (w: string) => {
    changeNodeWrapper({ ...node, strokeWidth: +w });
  };
  const changeText = (t: string) => {
    changeNodeWrapper({ ...node, text: t });
  };
  const changeMode = (e: boolean) => {
    changeNodeWrapper({ ...node, editable: e });
  };
  const changeFontSize = (size: number) => {
    changeNodeWrapper({ ...node, fontSize: size });
  };
  const changeFontColor = (color: string) => {
    changeNodeWrapper({ ...node, textColor: color });
  };

  const changeInterective = (i: InterectiveElement | null) => {
    let interective: ChangePage | Close | Link | null = null;
    // if (!i) {
    //   chanageNode({ node: { ...node, interective }, id: screenId });
    //   return;
    // }
    switch (i) {
      case null:
        break;
      case "changePage":
        interective = {
          link: pages.find((x) => x.name !== selectedName)?.name ?? "",
          type: "changePage",
        } as ChangePage;
        break;
      case "close":
        interective = {
          type: "close",
        };
        break;
      case "link":
        interective = { type: "link", link: "" };
    }
    dispatch(chanageNode({ node: { ...node, interective }, id }));
  };
  const changeLink = (l: string) => {
    if (!interective || (interective && interective.type === "close")) return;
    const newInterective = interective;
    newInterective.link = l;
    changeNodeWrapper({ ...node, interective: newInterective });
  };
  return {
    changeLink,
    changeInterective,
    changeBorderRadius,
    changeStrokeWidth,
    changeStrokeColor,
    changeColor,
    changeMode,
    changeFontSize,
    changeFontColor,
    changeText,
  };
};
