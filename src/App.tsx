import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Controlls } from './ImageView/controlPannel';
import { Canvas } from './ImageView/canvas';
import { Main } from './ImageView';
function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Main />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default App;
