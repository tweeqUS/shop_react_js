import './App.css';
import { Header } from './Header';
import { Product } from './Product';
import { BestSellers} from './BestSellers'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers/>,
  },
  {
    path: "/product/:productId",
    element: <Product/>,
  },
]);


function App() {
  return (
    <div className='appContainer'>
    <Header/>
    <RouterProvider router={router} />
    <hr className='divider'/>

    </div>
  );
}

export default App;
 