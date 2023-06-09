import { Routes, Route } from "react-router-dom";

import { Login } from "./routes/login/login.component";
import { Register } from "./routes/register/register.conponent";
import { Account } from "./routes/account/account.component";
import { Home } from "./routes/home/home.component";

import Student from "./routes/student/student.component";
import Status from "./routes/status/status.component";

import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/protected-route/protected-route.component";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Student />} />
          <Route path="account" element={<Account />} />
          <Route path="status" element={<Status />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
