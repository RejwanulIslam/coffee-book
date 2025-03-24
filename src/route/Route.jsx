import { createBrowserRouter } from "react-router-dom";
import Mainlawout from "../layout/Mainlawout";
import Coffees from "../pajes/Coffees";
import CoffeeDetails from "../pajes/CoffeeDetails";
import Home from "../pajes/Home";
import CoffeeCard from "../compoment/CoffeeCard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlawout></Mainlawout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('../categories.json'),
        children: [
          {
            path:"/",
            element: <CoffeeCard></CoffeeCard>,
            loader: ()=>fetch('../coffees.json'),
          },
          {
            path:"/coffeecard/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: ()=>fetch('../coffees.json'),
          }
        ]

      },
      {
        path: "/coffee",
        element: <Coffees></Coffees>,
       
      },
      {
        path: "/dashbord",
        element: <CoffeeDetails></CoffeeDetails>
      }
    ]
  },
]);
export default router
