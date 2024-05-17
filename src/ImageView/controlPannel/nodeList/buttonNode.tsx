import { Box, Text, Stack, Input, Switch } from "@chakra-ui/react";
import { ButtonNode, SquareNode } from "src/commonTypes";
import { useSquareNode } from "./useSquareNode";
import { InterectiveElementAccordeon } from "../create/interectiveElement";
import { useButtonNode } from "./useButtonNode";

export const ButtonNodeListElement: React.FC<{
  node: ButtonNode;
  i: number;
  screenId: string;
}> = ({ node, i, screenId }) => {
  const {
    name,
    fill,
    stroke,
    strokeWidth,
    borderRadius,
    interective,
    editable,
    fontSize,
    textColor,
    text,
  } = node;
  const {
    changeBorderRadius,
    changeColor,
    changeInterective,
    changeLink,
    changeStrokeColor,
    changeStrokeWidth,
    changeFontColor,
    changeFontSize,
    changeMode,
    changeText,
  } = useButtonNode(node, screenId);
  return (
    <Stack padding={4} border="1px" borderColor="gray.200">
      <Box display={"flex"}>
        <Box>
          <Text>Радиус</Text>
          <Input
            value={borderRadius}
            width={40}
            onChange={(e) => changeBorderRadius(e.target.value)}
          />
        </Box>
        <Box>
          <Text>Ширина обводки</Text>
          <Input
            value={strokeWidth}
            width={40}
            onChange={(e) => changeStrokeWidth(e.target.value)}
          />
        </Box>
        <Box>
          <Text>Цвет обводки</Text>
          <input
            type="color"
            value={stroke}
            onChange={(e) => changeStrokeColor(e.target.value)}
          />
        </Box>
        <Box>
          <Text>Цвет</Text>
          <input
            type="color"
            value={fill}
            onChange={(e) => changeColor(e.target.value)}
          />
        </Box>
      </Box>
      <Box display={"flex"}>
        <Box>
          <Text>Текст</Text>
          <Input value={text} onChange={(e) => changeText(e.target.value)} />
        </Box>
        <Box>
          <Text>Редактирование</Text>
          <Switch checked={editable} onChange={(e) => changeMode(!editable)} />
        </Box>
        <Box>
          <Text>Размер текста</Text>
          <Input
            type="number"
            value={fontSize}
            onChange={(e) => changeFontSize(+e.target.value)}
          />
        </Box>
        <Box>
          <Text>Цвет текста</Text>
          <input
            type="color"
            value={textColor}
            onChange={(e) => changeFontColor(e.target.value)}
          />
        </Box>
      </Box>
      <InterectiveElementAccordeon
        changeElement={changeInterective}
        interectiveElement={interective}
        changeLink={changeLink}
      />
    </Stack>
  );
};
