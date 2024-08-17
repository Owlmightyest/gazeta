import { Box, Text, Stack, Input, Button } from "@chakra-ui/react";
import { SquareNode } from "src/commonTypes";
import { useSquareNode } from "./useSquareNode";
import { useDispatch } from "react-redux";
import { changeOrder, deleteNode } from "src/ImageView/store/action";

export const SquareNodeListElement: React.FC<{
  node: SquareNode;
  i: number;
  maxIndex: number;
}> = ({ node, i, maxIndex }) => {
  const { name, fill, stroke, strokeWidth, borderRadius, x, y, width, height } =
    node;
  const dispatch = useDispatch();

  const {
    changeBorderRadius,
    changeColor,

    changeStrokeColor,
    changeStrokeWidth,
  } = useSquareNode(node);
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
      <Box>
        <Button onClick={() => dispatch(deleteNode({ nodeId: node.id }))}>
          Удалить
        </Button>
      </Box>
    </Stack>
  );
};
