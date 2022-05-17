import './App.scss';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Products from './Components/Products/Products';

function App() {
  return (
    <div >
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="women's" element={<Products/>} />
          <Route path="men's" element={<Products/>} />
          <Route path="kid's" element={<Products/>} />
          <Route path="accessories" element={<Products/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
