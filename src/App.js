import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import ContextContainer from './components/ContextContainer';

export default function App() {
  return (
    <ContextContainer>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/contacto" element={<Contacto />} /> */} 
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route />
          <Route />
          <Route />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </ContextContainer>
  );
}
