import './css/App.css';

import {Home,Result,Quiz} from './components/index'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/result',
    element:<Result></Result>
  },
  {
    path:'/quiz',
    element:<Quiz></Quiz>
  }

])
function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
