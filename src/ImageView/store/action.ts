import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { prefix } from './const';
import { AllNodes, Page } from './model';

export const addNode = createAction<{ node: AllNodes; id: string }>(
  `${prefix}/addNode`,
);

export const chanageNode = createAction<{ node: AllNodes; id: string }>(
  `${prefix}/changeNode`,
);

export const deleteNode = createAction<{ screenId: string; nodeId: string }>(
  `${prefix}/deleteNode`,
);

export const changeSelectedNode = createAction<string>(
  `${prefix}/changeSelectedNode`,
);

export const changeAllNodes = createAction<{ nodes: AllNodes[]; id: string }>(
  `${prefix}/changeAllNode`,
);

export const addNewScreen = createAction<Page>(`${prefix}/addPage`);

export const selectScreen = createAction<string>(`${prefix}/selectScreen`);
