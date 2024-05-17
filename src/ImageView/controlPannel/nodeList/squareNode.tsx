import { Box, Text, Stack, Input } from '@chakra-ui/react';
import { SquareNode } from 'src/commonTypes';
import { useSquareNode } from './useSquareNode';
import { InterectiveElementAccordeon } from '../create/interectiveElement';

export const SquareNodeListElement: React.FC<{
  node: SquareNode;
  i: number;
  screenId: string;
}> = ({ node, i, screenId }) => {
  const {
    name,
    fill,
    stroke,
    strokeWidth,
    borderRadius,
    x,
    y,
    width,
    height,
    interective,
  } = node;
  const {
    changeBorderRadius,
    changeColor,
    changeInterective,
    changeLink,
    changeStrokeColor,
    changeStrokeWidth,
  } = useSquareNode(node, screenId);
  return (
    <Stack padding={4} border="1px" borderColor="gray.200">
      <Box display={'flex'}>
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
      <InterectiveElementAccordeon
        changeElement={changeInterective}
        interectiveElement={interective}
        changeLink={changeLink}
      />
    </Stack>
  );
};
