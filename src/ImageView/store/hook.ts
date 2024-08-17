import { useSelector } from "react-redux/es/hooks/useSelector";
import { IReduxStore } from "src/commonTypes";

export const useNodeStore = () => {
  const store = useSelector((x: IReduxStore) => x.images);

  return { ...store };
};
