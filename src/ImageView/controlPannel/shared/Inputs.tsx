import { Box, Input, Text } from '@chakra-ui/react';

export const StringInput: React.FC<{
  text: string;

  value: string | number | undefined;
  onValueChange: (s: string) => void;
}> = ({ onValueChange, text, value }) => {
  return (
    <Box display={'flex'} width={'200px'}>
      <Text>{text}</Text>
      <Input
        backgroundColor={'white'}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </Box>
  );
};
export const ColorInput: React.FC<{
  text: string;
  value: string | undefined;
  onValueChange: (s: string) => void;
}> = ({ onValueChange, text, value }) => {
  return (
    <Box display={'flex'} width={'200px'}>
      <Text>{text}</Text>
      <input
        type={'color'}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </Box>
  );
};
