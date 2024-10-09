// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthProvider";

import WelcomePage from "./component/WelcomePage.tsx";
import Homepage from "./component/page/Homepage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      // {
      //   path: "/exchange",
      //   element: <ExchangeTaskPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
