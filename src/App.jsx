import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;





