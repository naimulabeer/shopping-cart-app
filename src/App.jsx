import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
