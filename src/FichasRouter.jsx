// src/FichasRouter.jsx
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import FichaPage from "./components/Fichas/FichaPage.jsx";
import { getFicha } from "./data/fichas.js";

function FichaRouteWrapper() {
  const { id } = useParams();
  return <FichaPage data={getFicha(id)} />;
}

export default function FichasRouter() {
  return (
    <Routes>
      {/* /fichas  →  /fichas/pxcarne */}
      <Route index element={<Navigate to="pxcarne" replace />} />
      {/* /fichas/:id */}
      <Route path=":id" element={<FichaRouteWrapper />} />
    </Routes>
  );
}
