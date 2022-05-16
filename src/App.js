import CategoryDisplay from "./Components/CategoryDisplay/CategoryDisplay";
import Header from "./Components/Header/Header";


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
    </div>
  );
}

export default App;
