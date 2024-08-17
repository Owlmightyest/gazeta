import { Stage, Layer } from "react-konva";
import { useNodeStore } from "../store/hook";
import { DispatchElement } from "./nodes";
import { useDispatch } from "react-redux";
import { AllNodes } from "../store/model";
import { chanageNode, changeSelectedNode } from "../store/action";

export const Canvas: React.FC<{
  width: number;
  heigth: number;
  stageRef: React.MutableRefObject<any>;
}> = ({ width, heigth, stageRef }) => {
  const { elements, selectedNode } = useNodeStore();
  const dispatch = useDispatch();

  const changeNodeWrapper = (n: AllNodes) => {
    dispatch(chanageNode({ node: n }));
  };

  const changeSelectedEl = (s: string) => {
    dispatch(changeSelectedNode(s));
  };

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      changeSelectedEl("");
    }
  };
  return (
    <Stage
      ref={stageRef}
      width={width}
      height={heigth}
      style={{ border: "1px solid grey", width: width }}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {elements.map((x, i) => (
          <DispatchElement
            el={x}
            index={i}
            onChange={changeNodeWrapper}
            onSelect={changeSelectedEl}
            owidth={width}
            selectedEl={selectedNode}
          />
        ))}
      </Layer>
    </Stage>
  );
};
