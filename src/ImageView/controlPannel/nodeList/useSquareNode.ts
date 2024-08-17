import { SquareNode } from "src/commonTypes";
import { chanageNode } from "src/ImageView/store/action";
import { useDispatch } from "react-redux";

export const useSquareNode = (node: SquareNode) => {
  const dispatch = useDispatch();

  const changeNodeWrapper = (node: SquareNode) => {
    dispatch(chanageNode({ node }));
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

  return {
    changeBorderRadius,
    changeStrokeWidth,
    changeStrokeColor,
    changeColor,
  };
};
