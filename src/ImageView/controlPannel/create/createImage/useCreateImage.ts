import { useState } from "react";

export const useCreateImage = () => {
  const [url, setUrl] = useState("");

  return {
    url,
    setUrl,
  };
};
