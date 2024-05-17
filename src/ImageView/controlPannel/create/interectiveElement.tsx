import {
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Select,
  Checkbox,
  Text,
  Stack,
  Input,
} from '@chakra-ui/react';
import { useNodeStore } from 'src/ImageView/store/hook';
import { ChangePage, Close, InterectiveElement, Link } from 'src/commonTypes';

const options: { value: InterectiveElement; name: string }[] = [
  { value: 'changePage', name: 'Переход страницы' },
  { value: 'close', name: 'Закрыть' },
  { value: 'link', name: 'Переход' },
];
export const InterectiveElementAccordeon: React.FC<{
  interectiveElement: ChangePage | Link | Close | null;
  changeElement: (t: InterectiveElement | null) => void;
  changeLink: (l: string) => void;
  link?: string;
}> = ({ changeElement, interectiveElement, changeLink, link }) => {
  const { pages } = useNodeStore();
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Интерактивный элемент
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel>
          <Stack>
            <Box display={'flex'}>
              <Text>Интерактивный элемент</Text>
              <Checkbox
                color={'blue'}
                checked={interectiveElement !== null}
                onChange={() => {
                  if (interectiveElement === null) {
                    changeElement('link');
                  } else {
                    changeElement(null);
                  }
                }}
              />
            </Box>
            {interectiveElement && (
              <Box>
                <Box display={'flex'}>
                  <Text>тип</Text>
                  <Select
                    value={interectiveElement.type}
                    onChange={(e) =>
                      changeElement(e.target.value as InterectiveElement)
                    }
                  >
                    {options.map((x) => (
                      <option value={x.value}>{x.name}</option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  {interectiveElement.type === 'link' && (
                    <Box display={'flex'}>
                      <Text>Ссылка</Text>
                      <Input
                        value={link}
                        onChange={(e) => changeLink(e.target.value)}
                      />
                    </Box>
                  )}
                  {interectiveElement.type === 'changePage' && (
                    <Box display={'flex'}>
                      <Text>Переход</Text>
                      <Select value={link}>
                        {pages.map((x) => (
                          <option value={x.name}>{x.name}</option>
                        ))}
                      </Select>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
