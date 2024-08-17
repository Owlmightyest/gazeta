import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ImageNode } from "src/commonTypes";
import { deleteNode } from "src/ImageView/store/action";

export const ImageNodeListElement: React.FC<{
  node: ImageNode;
  i: number;
  maxIndex: number;
}> = ({ node, i }) => {
  const { name, src } = node;
  const dispatch = useDispatch();

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
