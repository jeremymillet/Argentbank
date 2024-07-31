import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from './components/PrivateRoute/index.jsx'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;