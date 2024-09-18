import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Learn from "./components/learn/Learn";
import GuidedTourHome from "./components/guided-tour-home/GuidedTourHome";
import GuidedTourGarden from "./components/guided-tour-garden/GuidedTourGarden";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import OrderPlant from "./components/plant-detail/OrderPlant";
import "./App.css";
import OrderHerbs from "./components/orderHerbs/OrderHerbs";
import YouTubeVideoGallery from "./components/remedies/Remedies";
import PetCorner from "./components/pet-corner/PetCorner";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "learn",
          element: <Learn />,
        },
        {
          path: "guided-tours",
          element: <GuidedTourHome />,
        },
        { 
          path: "guided-tour-garden", 
          element: <GuidedTourGarden /> },
        {
          path: "loading",
          element: <LoadingScreen />,
        },
          {
            path:"quiz",
            element :<OrderHerbs />,
          },
          {
            path:"remedies-tv",
            element : <YouTubeVideoGallery />,
          },
          {
            path: "pet-corner",
            element: <PetCorner />,
          },
        {
          path: "order-plant/:name",
          element: <OrderPlant />,
        }
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
