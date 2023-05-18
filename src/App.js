import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projects/:id",
          element: <ProjectDisplay />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
