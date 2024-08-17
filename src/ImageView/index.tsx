import { Box, Button } from "@chakra-ui/react";
import { Controlls } from "./controlPannel";
import { Canvas } from "./canvas";
import { ImportBtn } from "./import";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedNode } from "./store/action";

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const stageRef = useRef<any>(null);
  const smallRef = useRef<any>(null);
  const downloadURI = (uri: any, name: string) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleIMGExport = () => {
    if (!stageRef.current) return;
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "stage.png");
  };
  return (
    <Box>
      <Button
        onClick={() => {
          dispatch(changeSelectedNode(""));
        }}
      >
        Убрать выделение
      </Button>
      <Box display={"flex"}>
        <Controlls />
        <div>
          <Canvas stageRef={smallRef} width={640} heigth={360} />
          <ImportBtn click={handleIMGExport} />
        </div>
      </Box>
      <Canvas stageRef={stageRef} width={1280} heigth={720} />
    </Box>
  );
};
