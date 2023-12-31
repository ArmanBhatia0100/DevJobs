import Auth from "./component/Auth/Auth";
import Home from "./component/Home/Home";
import { Navigate } from "react-router-dom";

import JobDescription from "./component/JobDescription/JobDescription";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",

    element: <Home />,
  },
  {
    path: "/job",
    element: <JobDescription />,
  },
]);
function App() {
  return (
    <div className="App min-w-[275px]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
