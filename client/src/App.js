import { Button } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  return (
    <main className="">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
