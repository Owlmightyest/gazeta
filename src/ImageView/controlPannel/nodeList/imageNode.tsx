import { Box, Text } from '@chakra-ui/react';
import { ImageNode } from 'src/commonTypes';

export const ImageNodeListElement: React.FC<{ node: ImageNode; i: number }> = ({
  node,
  i,
}) => {
  const { name, src, x, y, width, height } = node;
  return (
    <Box display={'flex'} backgroundColor={'gray.400'}>
      <Text fontSize="md"> {i}</Text>
      <img src={src} width={100} height={30} />
      <Box>
        <Box>x:{x}</Box>
        <Box>y:{y}</Box>
      </Box>
      <Box>
        <Box>ширина: {width}</Box>
        <Box>высота {height}</Box>
      </Box>
      <Text fontSize={'md'}>{name}</Text>
    </Box>
  );
};
