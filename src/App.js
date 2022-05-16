import CategoryDisplay from "./Components/CategoryDisplay/CategoryDisplay";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <hr style={{
        color:'#f7f7f7',
        backgroundColor: '#f7f7f7',
        height: '4.3rem'
      }} />
      <CategoryDisplay/>
      <div className="product_display">
        <Products/>
      </div>
    </div>
  );
}

export default App;
