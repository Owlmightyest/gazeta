import { ImageReduxStore } from "./model";

export const init: ImageReduxStore = {
  elements: [
    {
      type: "image",
      src: "/bg.jpg",
      bw: false,
      draggable: false,
      height: 720,
      width: 1280,
      x: 0,
      id: "ssssssssssss",
      name: "ssss",
      y: 0,
    },
  ],
  selectedNode: "",
  selectedName: "banner",
  fonts: [],
};

export const prefix = "imageStore";
