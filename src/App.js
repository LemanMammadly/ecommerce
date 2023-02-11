import { BrowserRouter, Routes,Route } from "react-router-dom";
import ClientLayout from "./layouts/clientLayout/ClientLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
