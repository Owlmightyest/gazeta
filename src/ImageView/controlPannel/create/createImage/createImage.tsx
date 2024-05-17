import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useCreateImage } from './useCreateImage';
import { InterectiveElementAccordeon } from '../interectiveElement';
import { ChangePage, Close, Link } from 'src/commonTypes';
export const CreateImageNode: React.FC<{
  createImage: (
    url: string,
    interective: ChangePage | Link | Close | null,
  ) => Promise<void>;
}> = ({ createImage }) => {
  const { changeInterective, changeLink, interective, setUrl, url } =
    useCreateImage();
  return (
    <Box px={5}>
      <Box display={'flex'}>
        <Text>URL</Text>
        <Input
          placeholder="url"
          htmlSize={4}
          width={300}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
      <Button onClick={() => createImage(url, interective)}>
        Создать изображение
      </Button>
    </Box>
  );
};
