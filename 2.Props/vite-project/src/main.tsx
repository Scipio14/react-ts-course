import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App headerText="This is a header" extraText="Some extra text" />
  </React.StrictMode>
);
