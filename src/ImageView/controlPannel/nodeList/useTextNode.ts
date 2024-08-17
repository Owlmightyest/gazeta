import { TextNode } from "src/commonTypes";
import { chanageNode } from "src/ImageView/store/action";
import { useDispatch } from "react-redux";

export const useTextNode = (node: TextNode) => {
  const { editable } = node;

  const dispatch = useDispatch();
  const changeNodeWrapper = (node: TextNode) => {
    dispatch(chanageNode({ node }));
  };

  const changeText = (s: string) => {
    changeNodeWrapper({ ...node, text: s });
  };
  const changeColor = (s: string) => {
    changeNodeWrapper({ ...node, fill: s });
  };

  const changeEditable = () => {
    changeNodeWrapper({ ...node, editable: !editable });
  };
  const changeFontSize = (f: string) => {
    changeNodeWrapper({ ...node, fontSize: +f });
  };

  return {
    changeFontSize,
    changeEditable,
    changeColor,
    changeText,
  };
};
