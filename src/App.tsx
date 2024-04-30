import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "@quiz/pages/Start";
import Quiz from "@quiz/pages/Start";
import Results from "@quiz/pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
