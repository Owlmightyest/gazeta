import { Box, Text, Select } from "@chakra-ui/react";
import { useControlPannel } from "./useControlPannel";
import { NodeTypes } from "src/commonTypes";
import { CreateImageNode } from "./create/createImage/createImage";
import { CreateDivNode } from "./create/createSquare/createSquare";
import { useNodeStore } from "../store/hook";
import { CreateTextNode } from "./create/createText/createText";
import { ImageNodeListElement } from "./nodeList/imageNode";
import { SquareNodeListElement } from "./nodeList/squareNode";
import { TextNodeListElement } from "./nodeList/textNode";
import { useDispatch } from "react-redux";

const options: NodeTypes[] = ["image", "square", "text"];

export const Controlls: React.FC = () => {
  const { selectedName, elements } = useNodeStore();
  const dispatch = useDispatch();
  const {
    changeMode,
    createImage,
    createSquare,
    createText,

    mode,
  } = useControlPannel(selectedName);

  return (
    <Box w={[600, 700, 800]}>
      <Select
        value={mode}
        onChange={(e) => changeMode(e.target.value as NodeTypes)}
      >
        {options.map((x) => (
          <option key={`option${x}`} value={x}>
            {x}
          </option>
        ))}
      </Select>
      {mode === "image" && <CreateImageNode createImage={createImage} />}
      {mode === "square" && <CreateDivNode createSquare={createSquare} />}
      {mode === "text" && <CreateTextNode createText={createText} />}
      {elements.map((el, i) => (
        <>
          {el.type === "image" && (
            <ImageNodeListElement
              key={`nodeList${i}`}
              i={i}
              node={el}
              maxIndex={elements.length - 1}
            />
          )}
          {el.type === "square" && (
            <SquareNodeListElement
              key={`nodeList${i}`}
              i={i}
              node={el}
              maxIndex={elements.length - 1}
            />
          )}
          {el.type === "text" && (
            <TextNodeListElement key={`nodeList${i}`} i={i} node={el} />
          )}
        </>
      ))}
    </Box>
  );
};
