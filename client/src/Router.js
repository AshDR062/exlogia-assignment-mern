import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import EmployeeList from "./pages/EmployeeList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<EmployeeList />} />
    </Route>
  )
);
