import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContent from "./pages/MainContent";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<MainContent />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
