import { Box, Input } from "@chakra-ui/react";

import { useState } from "react";
export const CreateImageNode: React.FC<{
  createImage: (
    e: React.ChangeEvent<HTMLInputElement>,
    bw?: boolean
  ) => Promise<void>;
}> = ({ createImage }) => {
  const [bw] = useState(false);
  return (
    <Box px={5}>
      <Input
        type="file"
        htmlSize={4}
        width={300}
        onChange={(e) => createImage(e, bw)}
      />
    </Box>
  );
};
