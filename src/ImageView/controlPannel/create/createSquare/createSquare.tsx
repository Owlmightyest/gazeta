import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { ColorInput, StringInput } from '../../shared/Inputs';
import { useCreateSquare } from './useCreateSquare';
import { InterectiveElementAccordeon } from '../interectiveElement';
import { ChangePage, Close, Link } from 'src/commonTypes';
export const CreateDivNode: React.FC<{
  createSquare: (obj: {
    color: string;
    width: number;
    height: number;
    borderRadius?: number;
    stroke?: string;
    strokeWidth?: number;
    interective: ChangePage | Link | Close | null;
  }) => void;
}> = ({ createSquare }) => {
  const {
    borderRadius,
    chageStrokeWidth,
    interective,
    changeBorderRadius,
    changeLink,
    changeStroke,
    changeInterective,
    color,
    height,
    setColor,
    setHeight,
    setWidth,
    stroke,
    strokeWidth,
    width,
  } = useCreateSquare();

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
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
            value={stroke}
            onValueChange={changeStroke}
            text="Цвет обводки"
          />
        </Box>
      </Box>
      <Box>
        <InterectiveElementAccordeon
          changeElement={changeInterective}
          changeLink={changeLink}
          interectiveElement={interective}
          link={
            interective && interective.type !== 'close' && interective.link
              ? interective.link
              : undefined
          }
        />
      </Box>
      <Button
        onClick={() =>
          createSquare({
            width,
            height,
            color,
            borderRadius,
            stroke,
            strokeWidth,
            interective,
          })
        }
      >
        Создать квадрат
      </Button>
    </>
  );
};
