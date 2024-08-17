import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import { useCreateText } from "./useCreateText";
import { ColorInput, StringInput } from "../../shared/Inputs";

import { ChangePage, Close, Link } from "src/commonTypes";
import { useNodeStore } from "src/ImageView/store/hook";
export const CreateTextNode: React.FC<{
  createText: ({
    color,
    input,

    fontSize,
  }: {
    input: string;
    color: string;

    fontSize: number;
    fontStyle: string;
  }) => void;
}> = ({ createText }) => {
  const {
    color,
    fontSize,
    input,
    setColor,
    setFontSize,
    setInput,
    fontStyle,
    setFontStyle,
  } = useCreateText();
  const { fonts } = useNodeStore();

  return (
    <Box px={5}>
      <Box display={"flex"}>
        <Text>Текст</Text>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </Box>
      <Box display={"flex"}>
        <ColorInput
          value={color}
          onValueChange={(s) => setColor(s)}
          text="Цвет текста"
        />
        <StringInput
          value={fontSize}
          onValueChange={(s) => setFontSize(+s)}
          text="Размер шрифта"
        />
      </Box>

      <Button onClick={() => createText({ color, input, fontSize, fontStyle })}>
        Создать текст
      </Button>
    </Box>
  );
};
