import { createReducer } from "@reduxjs/toolkit";
import { init } from "./const";
import { ImageReduxStore } from "./model";
import {
  addNode,
  chanageNode,
  deleteNode,
  changeSelectedNode,
  changeOrder,
} from "./action";
export const ImageSlice = createReducer<ImageReduxStore>(init, (builder) => {
  builder.addCase(addNode, (reducerState, action) => {
    const { node } = action.payload;
    reducerState.elements = [...reducerState.elements, node];
  });
  builder.addCase(chanageNode, (reducerState, action) => {
    const { node } = action.payload;
    console.log(node);
    const newState = reducerState.elements.map((x) => {
      if (x.id === node.id) return node;

      return x;
    });
    reducerState.elements = newState;
  });
  builder.addCase(deleteNode, (reducerState, action) => {
    const { nodeId } = action.payload;
    reducerState.elements = reducerState.elements.filter(
      (x) => x.id !== nodeId
    );
  });
  builder.addCase(changeSelectedNode, (reducerState, action) => {
    reducerState.selectedNode = action.payload;
  });
  builder.addCase(changeOrder, (reducerState, action) => {
    let { n1, n2 } = action.payload;
    if (!n2) {
      n2 = reducerState.elements.length - 1;
    }
    const el1 = reducerState.elements[n1];
    const el2 = reducerState.elements[n2];

    reducerState.elements = reducerState.elements.map((y: any, i: number) => {
      if (i === n1) return el1;
      if (i === n2) return el2;
      return y;
    });
  });
});
