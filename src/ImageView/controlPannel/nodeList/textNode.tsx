import { Box, Switch, Input, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TextNode } from 'src/commonTypes';
import { chanageNode } from 'src/ImageView/store/action';
import { useInterectiveElement } from '../create/useInterectiveElement';
import { useTextNode } from './useTextNode';
import { InterectiveElementAccordeon } from '../create/interectiveElement';

export const TextNodeListElement: React.FC<{
  node: TextNode;
  i: number;
  screenId: string;
}> = ({ node, i, screenId }) => {
  const {
    text,
    fill,
    editable,
    fontSize,
    interective: interectiveElement,
  } = node;

  const {
    changeColor,
    changeEditable,
    changeFontSize,
    changeInterective,
    changeLink,
    changeText,
  } = useTextNode(node, screenId);
  return (
    <Stack padding={4} border="1px" borderColor="gray.200">
      <Input
        backgroundColor={'white'}
        value={text}
        color={fill}
        onChange={(e) => changeText(e.target.value)}
      />

      <Box
        display={'flex'}
        gap={5}
        justifyContent={'center'}
        alignItems={'center'}
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
        <Box display={'flex'}>
          <Text>Редактировать текст</Text>
          <Switch isChecked={editable} onChange={changeEditable} />
        </Box>
      </Box>

      <InterectiveElementAccordeon
        interectiveElement={interectiveElement}
        changeElement={changeInterective}
        changeLink={changeLink}
      />
    </Stack>
  );
};
