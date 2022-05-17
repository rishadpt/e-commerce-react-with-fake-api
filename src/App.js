import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Products from './Components/Products/Products';

function App() {
  return (
    <div >
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="products/:category" element={<Products/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
