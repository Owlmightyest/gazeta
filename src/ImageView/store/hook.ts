import { useSelector } from 'react-redux/es/hooks/useSelector';
import { IReduxStore } from 'src/commonTypes';

export const useNodeStore = () => {
  const store = useSelector((x: IReduxStore) => x.images);
  const selectedScreen = store.pages.find((x) => x.name === store.selectedName);
  return { ...store, selectedScreen };
};
