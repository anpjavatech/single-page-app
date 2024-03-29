import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import AdminRootLayout from "./pages/AdminRootLayout";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {path:"/",element: <HomePage />},
        {path:"/products",element: <ProductsPage />},
      ]
    },
    {
      path:"/admin",
      element:<AdminRootLayout/>,
      children:[
        {path:"/admin",element: <HomePage />},
        {path:"/admin/products",element: <ProductsPage />},
      ]
    }
  ]);

  return  <RouterProvider router={router} />;
}

export default App;
