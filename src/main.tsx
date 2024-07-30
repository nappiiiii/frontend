import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import axios from "axios";
import HomePage from "./pages";
import { Notifications } from "@mantine/notifications";
import BooksPage from "./pages/books";
import BookByIdPage from "./pages/book-by-id";
import BookCreatePage from "./pages/book-create";
import BookEditById from "./pages/book-edit-by-id";
import BeveragePage from "./pages/beverage";
import BevCreatePage from "./pages/beverage-create";
import BevByIdPage from "./pages/beverage-by-id";
import BevEditById from "./pages/beverage-edit-by-id";
import { ModalsProvider } from "@mantine/modals";

import OrderCreatePage from "./pages/beverage-orders";
import StaffPage from "./pages/orders";
import OrderDetail from "./pages/order-deatil";

const theme = createTheme({
  primaryColor: "pink",
  fontFamily: '"Noto Sans Thai Looped", sans-serif',
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
  {
    path: "/books/create",
    element: <BookCreatePage />,
  },
  {
    path: "/books/:bookId",
    element: <BookByIdPage />,
  },
  {
    path: "/books/:bookId/edit",
    element: <BookEditById />,
  },
  {
    path: "/beverages",
    element: <BeveragePage />,
  },
  {
    path: "/beverages/create",
    element: <BevCreatePage />,
  },
  {
    path: "/beverages/:menuId",
    element: <BevByIdPage />,
  },
  {
    path: "/beverages/:menuId/edit",
    element: <BevEditById />,
  },
  {
    path: "/beverages/:menuId/orders",
    element: <OrderCreatePage />,
  },
  {
    path: "/orders",
    element: <StaffPage />,
  }, 
  {
    path: "/orders/:orderId",
    element: <OrderDetail />,
  }
  
]);

if (import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          axios
            .get(url, {
              baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1",
            })
            .then((res) => res.data),
      }}
    >
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  </React.StrictMode>
);