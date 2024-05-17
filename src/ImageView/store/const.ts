import { ImageReduxStore } from './model';

export const init: ImageReduxStore = {
  pages: [
    {
      elements: [],
      name: 'banner',
    },
    {
      elements: [],
      name: 'promo',
    },
  ],
  selectedNode: '',
  selectedName: 'banner',
};

export const prefix = 'imageStore';
