import { Routes, Route  } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
// import Account from './components/Account/Account';
function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>

    </div>
  );
}

export default App;
