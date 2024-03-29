import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import AdminRootLayout from "./pages/AdminRootLayout";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage.js";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      errorElement: <ErrorPage />,
      children:[
        {index: true, element: <HomePage />},
        {path:"/products", element: <ProductsPage />},
        {path:"/products/:productId", element: <ProductDetailPage />},
      ]
    },
    {
      path:"/admin",
      element:<AdminRootLayout/>,
      errorElement: <ErrorPage />,
      children:[
        {index:true, element: <HomePage />},
        {path:"/admin/products", element: <ProductsPage />},
      ]
    }
  ]);

  return  <RouterProvider router={router} />;
}

export default App;
