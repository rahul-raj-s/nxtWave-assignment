import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./layouts";
import { Resources, NewResource } from "./pages";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/resources" element={<Resources />} />
        <Route path="/requests" element={<Resources type="request" />} />
        <Route path="/users" element={<Resources type="user" />} />
        <Route path="add-item" element={<NewResource />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route index element={<Navigate to="/resources" />} />
      </Route>
    </Routes>
  );
};
