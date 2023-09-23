import { Suspense } from "react";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./app.css";
import Properties from "./pages/Properties/Properties";
import { QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
