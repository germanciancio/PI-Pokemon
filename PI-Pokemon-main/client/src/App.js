import "./App.css";
import { Home, Landing, Detail, Form } from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBAr/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
