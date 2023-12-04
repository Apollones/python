import { Routes, Route } from "react-router-dom";
import Registration from "./reg/Regestration";
import Login from './login/Login';
import Home from "./home/Home";
import ProductPage from "./home/ProductPage";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
