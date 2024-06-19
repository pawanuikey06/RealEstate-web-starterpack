import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Recidencies"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          
        </div>
        <Header />
          <Hero />
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
