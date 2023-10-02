
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import LoginPage from './components/loginPage'
import RootLayout from './layouts/root';



const router = createBrowserRouter(
  {
  path: '/',
  element: < RootLayout />, 
  children: [ 
   {path:'/',element:<LoginPage/>}
  ]
  
  }

  );
  // const


function App() {
  



  return (
  
    <RouterProvider router={router}/>
  
   );
}

export default App
