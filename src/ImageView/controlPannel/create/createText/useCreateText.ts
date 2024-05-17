import { useState } from 'react';
import { useInterectiveElement } from '../useInterectiveElement';

export const useCreateText = () => {
  const [input, setInput] = useState('');
  const [color, setColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(14);
  const { changeInterective, changeLink, interective } =
    useInterectiveElement();

  return {
    input,
    setInput,
    color,
    setColor,
    fontSize,
    setFontSize,
    interective,
    changeInterective,
    changeLink,
  };
};
