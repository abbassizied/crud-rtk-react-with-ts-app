import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store";

import theme from "./theme";
import App from "./App";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Todos from "./Todos";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import BlankPage from "./BlankPage";
import Counter from "./Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "employees",
        element: <Employees />,
        errorElement: <ErrorPage />,
      },
      {
        path: "todos",
        element: <Todos />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blank_page",
        element: <BlankPage />,
        errorElement: <ErrorPage />,
      },

      {
        path: "counter",
        element: <Counter />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
