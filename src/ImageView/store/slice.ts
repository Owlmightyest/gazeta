import { createReducer } from "@reduxjs/toolkit";
import { init } from "./const";
import { ImageReduxStore } from "./model";
import {
  addNode,
  chanageNode,
  deleteNode,
  changeSelectedNode,
  selectScreen,
  addNewScreen,
} from "./action";
export const ImageSlice = createReducer<ImageReduxStore>(init, (builder) => {
  builder.addCase(addNode, (reducerState, action) => {
    const { node, id } = action.payload;
    reducerState.pages = reducerState.pages.map((x) => {
      if (x.name === id) {
        x.elements = [...x.elements, node];
      }
      return x;
    });
  });
  builder.addCase(chanageNode, (reducerState, action) => {
    const { id, node } = action.payload;
    console.log(node, id);
    const newState = reducerState.pages.map((x) => {
      if (x.name === id)
        return {
          name: x.name,
          elements: x.elements.map((y) => {
            if (y.id === node.id) {
              y = node;
            }
            return y;
          }),
        };

      return x;
    });
    reducerState.pages = newState;
  });
  builder.addCase(deleteNode, (reducerState, action) => {
    const { nodeId, screenId } = action.payload;
    reducerState.pages = reducerState.pages.map((x) => {
      if (x.name === screenId)
        return {
          name: x.name,
          elements: x.elements.filter((y) => y.id !== nodeId),
        };
      return x;
    });
  });
  builder.addCase(changeSelectedNode, (reducerState, action) => {
    reducerState.selectedNode = action.payload;
  });
  builder.addCase(selectScreen, (reducerState, action) => {
    reducerState.selectedName = action.payload;
  });
  builder.addCase(addNewScreen, (reducerState, action) => {
    reducerState.pages = [...reducerState.pages, action.payload];
  });
});
