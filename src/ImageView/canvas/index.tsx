import { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import { useNodeStore } from '../store/hook';
import { DispatchElement } from './nodes';
import { useDispatch } from 'react-redux';
import { AllNodes } from '../store/model';
import { chanageNode, changeSelectedNode } from '../store/action';

export const Canvas: React.FC<{
  width: number;
  heigth: number;
}> = ({ width, heigth }) => {
  const stage = useRef<any>();
  const { selectedScreen, selectedNode, selectedName } = useNodeStore();
  const dispatch = useDispatch();

  const changeNodeWrapper = (n: AllNodes) => {
    dispatch(chanageNode({ id: selectedName, node: n }));
  };

  const changeSelectedEl = (s: string) => {
    dispatch(changeSelectedNode(s));
  };

  const checkDeselect = (e: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      changeSelectedEl('');
    }
  };
  return (
    <Stage
      ref={stage}
      width={width}
      height={heigth}
      style={{ border: '1px solid grey', width: 640 }}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {selectedScreen &&
          selectedScreen.elements.map((x, i) => (
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
