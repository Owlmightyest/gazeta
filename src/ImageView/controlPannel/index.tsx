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
import { selectScreen } from "../store/action";
import { CreateButton } from "./create/createButton";
import { ButtonNodeListElement } from "./nodeList/buttonNode";

const options: NodeTypes[] = ["image", "square", "text", "button"];

export const Controlls: React.FC = () => {
  const { selectedScreen, pages, selectedName } = useNodeStore();
  const dispatch = useDispatch();
  const {
    changeMode,
    createImage,
    createSquare,
    createText,
    createButton,
    mode,
  } = useControlPannel(selectedName);

  return (
    <Box w={[600, 700, 800]}>
      <Select
        value={selectedName}
        onChange={(e) => dispatch(selectScreen(e.target.value))}
      >
        {pages.map((page) => (
          <option>{page.name}</option>
        ))}
      </Select>
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
      {mode === "button" && <CreateButton createButton={createButton} />}
      {selectedScreen &&
        selectedScreen.elements.map((el, i) => (
          <>
            {el.type === "image" && (
              <ImageNodeListElement key={`nodeList${i}`} i={i} node={el} />
            )}
            {el.type === "square" && (
              <SquareNodeListElement
                key={`nodeList${i}`}
                i={i}
                node={el}
                screenId={selectedScreen.name}
              />
            )}
            {el.type === "text" && (
              <TextNodeListElement
                key={`nodeList${i}`}
                i={i}
                node={el}
                screenId={selectedScreen.name}
              />
            )}
            {el.type === "button" && (
              <ButtonNodeListElement
                key={`nodeList${i}`}
                i={i}
                node={el}
                screenId={selectedScreen.name}
              />
            )}
          </>
        ))}
    </Box>
  );
};
