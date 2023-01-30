import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainContent from "./pages/MainContent";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route index element={<MainContent />}></Route>
        {/* <Route path="/setting" element={<Setting />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
