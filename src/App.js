
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
