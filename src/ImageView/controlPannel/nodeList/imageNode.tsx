import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ImageNode } from "src/commonTypes";
import { changeOrder, deleteNode } from "src/ImageView/store/action";

export const ImageNodeListElement: React.FC<{
  node: ImageNode;
  i: number;
  maxIndex: number;
}> = ({ node, i, maxIndex }) => {
  const { name, src, x, y, width, height } = node;
  const dispatch = useDispatch();
  const changeO = (n1: number, n2: number) => {
    dispatch(changeOrder({ n1, n2 }));
  };
  return (
    <Box display={"flex"} backgroundColor={"gray.400"}>
      <Text fontSize="md"> {i}</Text>
      <img src={src} width={100} height={30} />
      <Text fontSize={"md"}>{name}</Text>

      <Box>
        <Button onClick={() => dispatch(deleteNode({ nodeId: node.id }))}>
          Удалить
        </Button>
      </Box>
    </Box>
  );
};
