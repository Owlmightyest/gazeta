import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useCreateText } from './useCreateText';
import { ColorInput, StringInput } from '../../shared/Inputs';
import { InterectiveElementAccordeon } from '../interectiveElement';
import { ChangePage, Close, Link } from 'src/commonTypes';
export const CreateTextNode: React.FC<{
  createText: ({
    color,
    input,
    interective,
    fontSize,
  }: {
    input: string;
    color: string;
    interective: ChangePage | Link | Close | null;
    fontSize: number;
  }) => void;
}> = ({ createText }) => {
  const {
    changeInterective,
    changeLink,
    color,
    fontSize,
    input,
    interective,
    setColor,
    setFontSize,
    setInput,
  } = useCreateText();
  return (
    <Box px={5}>
      <Box display={'flex'}>
        <Text>Текст</Text>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </Box>
      <Box display={'flex'}>
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
      <Button
        onClick={() => createText({ color, input, interective, fontSize })}
      >
        Создать текст
      </Button>
    </Box>
  );
};
