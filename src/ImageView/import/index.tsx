import { Button } from '@chakra-ui/react';
import { useNodeStore } from '../store/hook';

export const ImportBtn: React.FC = () => {
  const { pages } = useNodeStore();

  const click = () => {
    navigator.clipboard.writeText(
      JSON.stringify({
        elements: pages,
        ifa: '2dc7e266-f88b-41a5-8118-3fe5b56a225b',
        platform: 'test',
      }),
    );
  };
  return <Button onClick={click}>Скопировать</Button>;
};
