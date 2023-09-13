import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutShared from "./shared/Layout.shared";
import LoginPage from "./pages/Login.page";
import ErrorPage from "./pages/Error.page";
import HomePage from "./pages/Home.page";
import ClaimsPage from "./pages/Claims.page";
import AdminHomePage from "./pages/AdminHome.page";
import AdminClaimsPage from "./pages/AdminClaims.page";
import AdminTeamspage from "./pages/AdminTeams.page";
import { AuthProvider } from "./context/AuthContext";
import UserProtectedRoute from "./shared/UserProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutShared />,
    children: [
      {
        index: true,
        element: (
          <UserProtectedRoute>
            <HomePage />
          </UserProtectedRoute>
        ),
      },
      {
        path: "claims",
        element: (
          <UserProtectedRoute>
            <ClaimsPage />
          </UserProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin/",
    element: <LayoutShared />,
    children: [
      {
        index: true,
        element: (
          <UserProtectedRoute>
            <AdminHomePage />
          </UserProtectedRoute>
        ),
      },
      {
        path: "claims",
        element: (
          <UserProtectedRoute>
            <AdminClaimsPage />
          </UserProtectedRoute>
        ),
      },
      {
        path: "teams",
        element: (
          <UserProtectedRoute>
            <AdminTeamspage />
          </UserProtectedRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <ErrorPage /> },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
