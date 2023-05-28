import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Form from './pages/Form/Form';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shopId" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/:shopId/cart" element={<Cart />} />
        <Route path="/:shopId/cart/form" element={<Form />} />
        {/*
        <Route
          path="*" element={<NotFoundBlock />} /> */}
      </Routes>
    </div>
  );
}

export default App;
