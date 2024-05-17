import { Box } from '@chakra-ui/react';
import { Controlls } from './controlPannel';
import { Canvas } from './canvas';
import { ImportBtn } from './import';

export const Main: React.FC = () => {
  return (
    <Box>
      <Box display={'flex'}>
        <Controlls />
        <div>
          <Canvas width={640} heigth={360} />
          <ImportBtn />
        </div>
      </Box>
    </Box>
  );
};
