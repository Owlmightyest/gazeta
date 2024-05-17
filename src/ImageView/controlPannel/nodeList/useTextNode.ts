import {
  TextNode,
  ChangePage,
  Close,
  InterectiveElement,
  Link,
} from 'src/commonTypes';
import { chanageNode } from 'src/ImageView/store/action';
import { useDispatch } from 'react-redux';
import { useNodeStore } from 'src/ImageView/store/hook';

export const useTextNode = (node: TextNode, id: string) => {
  const { editable, interective } = node;
  const { pages, selectedName } = useNodeStore();
  const dispatch = useDispatch();
  const changeNodeWrapper = (node: TextNode) => {
    dispatch(chanageNode({ node, id }));
  };

  const changeText = (s: string) => {
    changeNodeWrapper({ ...node, text: s });
  };
  const changeColor = (s: string) => {
    changeNodeWrapper({ ...node, fill: s });
  };

  const changeEditable = () => {
    changeNodeWrapper({ ...node, editable: !editable });
  };
  const changeFontSize = (f: string) => {
    changeNodeWrapper({ ...node, fontSize: +f });
  };
  const changeInterective = (i: InterectiveElement | null) => {
    let interective: ChangePage | Close | Link | null = null;
    // if (!i) {
    //   chanageNode({ node: { ...node, interective }, id: screenId });
    //   return;
    // }
    switch (i) {
      case null:
        break;
      case 'changePage':
        interective = {
          link: pages.find((x) => x.name !== selectedName)?.name ?? '',
          type: 'changePage',
        } as ChangePage;
        break;
      case 'close':
        interective = {
          type: 'close',
        };
        break;
      case 'link':
        interective = { type: 'link', link: '' };
    }
    dispatch(chanageNode({ node: { ...node, interective }, id }));
  };
  const changeLink = (l: string) => {
    if (!interective || (interective && interective.type === 'close')) return;
    const newInterective = interective;
    newInterective.link = l;
    changeNodeWrapper({ ...node, interective: newInterective });
  };
  return {
    changeLink,
    changeInterective,
    changeFontSize,
    changeEditable,
    changeColor,
    changeText,
  };
};
