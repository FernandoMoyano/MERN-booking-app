import "./app.css";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
