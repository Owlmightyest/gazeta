import { useState } from 'react';
import { useInterectiveElement } from '../useInterectiveElement';
export const useCreateImage = () => {
  const [url, setUrl] = useState('');
  const { changeInterective, changeLink, interective } =
    useInterectiveElement();

  return {
    changeInterective,
    changeLink,
    interective,
    url,
    setUrl,
  };
};
