import { useState } from 'react';
import { useNodeStore } from 'src/ImageView/store/hook';
import { ChangePage, Close, InterectiveElement, Link } from 'src/commonTypes';

export const useInterectiveElement = (
  defaultValue: ChangePage | Link | Close | null = null,
) => {
  const [interective, setInterective] = useState<
    ChangePage | Link | Close | null
  >(defaultValue);
  const { pages, selectedName } = useNodeStore();
  const changeInterective = (i: InterectiveElement | null) => {
    if (!i) {
      setInterective(i);
      return;
    }
    switch (i) {
      case 'changePage':
        setInterective({
          link: pages.find((x) => x.name !== selectedName)?.name ?? '',
          type: 'changePage',
        });
        break;
      case 'close':
        setInterective({
          type: 'close',
        });
        break;
      case 'link':
        setInterective({ type: 'link', link: '' });
    }
  };
  const changeLink = (l: string) => {
    if (!interective || (interective && interective.type === 'close')) return;
    const newInterective = interective;
    newInterective.link = l;
    console.log('ссылка');
    setInterective(newInterective);
  };
  return {
    interective,
    changeInterective,
    changeLink,
  };
};
