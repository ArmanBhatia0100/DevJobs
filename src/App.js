import Home from "./component/Home/Home";
import JobDescription from "./component/JobDescription/JobDescription";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
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
