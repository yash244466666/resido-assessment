import { Routes, Route  } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
// import Account from './components/Account/Account';
function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>

    </div>
  );
}

export default App;
