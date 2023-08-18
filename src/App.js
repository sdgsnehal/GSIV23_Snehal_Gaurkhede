import logo from "./logo.svg";
import "./App.css";
import { fetchFromAPI } from "./utils/FetchFromApi";
import { useEffect } from "react";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  useEffect(() => {
    fetchFromAPI().then((data) => console.log(data));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage/>} />
        <Route path="/detail" element={<DetailPage/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
