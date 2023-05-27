import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shopId" element={<Shop />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route
          path="*" element={<NotFoundBlock />} /> */}
      </Routes>
    </div>
  );
}

export default App;
