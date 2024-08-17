import { Button } from "@chakra-ui/react";
import { useNodeStore } from "../store/hook";

export const ImportBtn: React.FC<{ click: () => void }> = ({ click }) => {
  return <Button onClick={click}>Скопировать</Button>;
};
