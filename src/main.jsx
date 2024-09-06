import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/configureStore.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.js";
import App from "./App.jsx";
import router from "./routes/router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
