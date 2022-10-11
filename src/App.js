import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import Main from './Component/layout/Main';
import Quiz from './Component/Quiz/Quiz';
import Statistic from './Component/Statistic/Statistic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'Cart/:id',
        element: <Quiz></Quiz>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
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
