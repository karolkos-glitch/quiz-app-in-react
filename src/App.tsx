import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "@quiz/pages/Start";
import Quiz from "@quiz/pages/Quiz";
import Results from "@quiz/pages/Results";

const router = createBrowserRouter([
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/",
    element: <Start />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
