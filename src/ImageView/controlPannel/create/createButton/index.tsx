import { ChangePage, Close, Link } from "src/commonTypes";
import { useCreateButton } from "./useCreateButton";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { ColorInput, StringInput } from "../../shared/Inputs";
import { InterectiveElementAccordeon } from "../interectiveElement";
export const CreateButton: React.FC<{
  createButton: (obj: {
    color: string;
    width: number;
    height: number;
    borderRadius?: number;
    stroke?: string;
    strokeWidth?: number;
    interective: ChangePage | Link | Close | null;
    fontSize: number;
    textColor: string;
    text: string;
  }) => void;
}> = ({ createButton }) => {
  const {
    borderRadius,
    chageStrokeWidth,
    changeBorderRadius,
    changeInterective,
    changeLink,
    changeStroke,
    color,
    fontSize,
    height,
    input,
    interective,
    setColor,
    setFontSize,
    setHeight,
    setInput,
    setTextColor,
    setWidth,
    stroke,
    strokeWidth,
    textColor,
    width,
  } = useCreateButton();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        px={5}
      >
        <Box w={200}>
          <StringInput
            value={width}
            onValueChange={(s) => setWidth(+s)}
            text="ширина"
          />
          <StringInput
            value={height}
            onValueChange={(s) => setHeight(+s)}
            text="высота"
          />
          <StringInput
            text="Радиус"
            onValueChange={changeBorderRadius}
            value={borderRadius}
          />
          <StringInput
            value={input}
            onValueChange={(s) => setInput(s)}
            text="Текст"
          />
        </Box>
        <Box w={200}>
          <ColorInput
            text="Заливка"
            value={color}
            onValueChange={(s) => setColor(s)}
          />

          <StringInput
            text="Ширина обводки"
            onValueChange={chageStrokeWidth}
            value={strokeWidth}
          />
          <ColorInput
            value={textColor}
            onValueChange={(s) => setTextColor(s)}
            text="Цвет текста"
          />
          <ColorInput
            value={stroke}
            onValueChange={changeStroke}
            text="Цвет обводки"
          />
          <StringInput
            text="размер шрифта"
            onValueChange={(s) => setFontSize(+s)}
            value={fontSize}
          />
        </Box>
      </Box>
      <Box>
        <InterectiveElementAccordeon
          changeElement={changeInterective}
          changeLink={changeLink}
          interectiveElement={interective}
          link={
            interective && interective.type !== "close" && interective.link
              ? interective.link
              : undefined
          }
        />
      </Box>
      <Button
        onClick={() =>
          createButton({
            width,
            height,
            color,
            borderRadius,
            stroke,
            strokeWidth,
            interective,
            fontSize,
            textColor,
            text: input,
          })
        }
      >
        Создать квадрат
      </Button>
    </>
  );
};
