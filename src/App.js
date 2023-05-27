import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/:shop" element={<ShopPage />} />
        <Route
          path="*" element={<NotFoundBlock />} /> */}
      </Routes>
    </div>
  );
}

export default App;
