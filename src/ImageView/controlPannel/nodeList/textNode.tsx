import { Box, Switch, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { TextNode } from "src/commonTypes";
import { chanageNode, deleteNode } from "src/ImageView/store/action";

import { useTextNode } from "./useTextNode";

export const TextNodeListElement: React.FC<{
  node: TextNode;
  i: number;
}> = ({ node, i }) => {
  const { text, fill, editable, fontSize } = node;
  const dispatch = useDispatch();

  const {
    changeColor,
    changeEditable,
    changeFontSize,

    changeText,
  } = useTextNode(node);
  return (
    <Stack padding={4} border="1px" borderColor="gray.200">
      <Input
        backgroundColor={"white"}
        value={text}
        color={fill}
        onChange={(e) => changeText(e.target.value)}
      />

      <Box
        display={"flex"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <input
          type="color"
          value={fill}
          onChange={(e) => changeColor(e.target.value)}
        />
        <Input
          value={fontSize}
          onChange={(e) => changeFontSize(e.target.value)}
          width={150}
        />
        <Box display={"flex"}>
          <Text>Редактировать текст</Text>
          <Switch isChecked={editable} onChange={changeEditable} />
        </Box>
        <Button onClick={() => dispatch(deleteNode({ nodeId: node.id }))}>
          Удалить
        </Button>
      </Box>
    </Stack>
  );
};
