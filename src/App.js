import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import BuyProperty from "./Components/buyProperty/BuyProperty";
import Home from "./Components/Home/Home";
import PropertyDetail from "./Components/propertyDetail/PropertyDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<PropertyDetail />} />
          <Route path="/buy" element={<BuyProperty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
