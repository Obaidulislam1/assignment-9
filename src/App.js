import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Component/Body/Body';
import Main from './Component/Main/Main';

function App() {
  const router =createBrowserRouter([
    {
      path: '/',
      Element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Body></Body>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
