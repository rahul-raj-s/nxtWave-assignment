import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./layouts";
import { Resources } from "./pages";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route index element={<Navigate to="/resources" />} />
      </Route>
    </Routes>
  );
};
