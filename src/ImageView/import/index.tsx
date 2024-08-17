import { Button } from "@chakra-ui/react";

export const ImportBtn: React.FC<{ click: () => void }> = ({ click }) => {
  return <Button onClick={click}>Скопировать</Button>;
};
