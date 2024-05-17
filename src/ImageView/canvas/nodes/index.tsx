import { AllNodes } from "src/ImageView/store/model";
import { ImageNode } from "./image";
import { SquareNode } from "./square";
import { TextNode } from "./text";
import { ButtonNode } from "./button";

export const DispatchElement: React.FC<{
  el: AllNodes;
  owidth: number;
  selectedEl: string;
  onSelect: (s: string) => void;
  onChange: (n: AllNodes) => void;
  index: number;
}> = ({ el, selectedEl, index, onChange, onSelect, owidth }) => {
  return (
    <>
      {el.type === "image" && (
        <ImageNode
          onChange={onChange}
          onSelect={onSelect}
          owidth={owidth}
          selected={selectedEl === el.id}
          el={el}
          index={index}
        />
      )}
      {el.type === "square" && (
        <SquareNode
          onChange={onChange}
          onSelect={onSelect}
          owidth={owidth}
          selected={selectedEl === el.id}
          el={el}
          index={index}
        />
      )}
      {el.type === "text" && (
        <TextNode
          onChange={onChange}
          onSelect={onSelect}
          owidth={owidth}
          selected={selectedEl === el.id}
          el={el}
          index={index}
        />
      )}
      {el.type === "button" && (
        <ButtonNode
          onChange={onChange}
          onSelect={onSelect}
          owidth={owidth}
          selected={selectedEl === el.id}
          el={el}
          index={index}
        />
      )}
    </>
  );
};
