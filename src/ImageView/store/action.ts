import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { prefix } from "./const";
import { AllNodes } from "./model";
import { IFonts } from "src/commonTypes";

export const addNode = createAction<{ node: AllNodes }>(`${prefix}/addNode`);

export const chanageNode = createAction<{ node: AllNodes }>(
  `${prefix}/changeNode`
);

export const deleteNode = createAction<{ nodeId: string }>(
  `${prefix}/deleteNode`
);

export const changeSelectedNode = createAction<string>(
  `${prefix}/changeSelectedNode`
);

export const changeAllNodes = createAction<{ nodes: AllNodes[] }>(
  `${prefix}/changeAllNode`
);
export const changeOrder = createAction<{ n1: number; n2?: number }>(
  `${prefix}/changeAllOrder`
);

export const addFont = createAction<IFonts>(`${prefix}/addFont`);
