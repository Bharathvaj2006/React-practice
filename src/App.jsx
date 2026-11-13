import Counter from './Counter';
import CrsList from './CrsList';
import Login from './Login';
import NotFound from './NotFound';
import Posts from './Posts';
import Pst from './Pst';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: "/courses",
      element: <CrsList />
    },
    {
      path: "/counter",
      element: <Counter />
    },
    {
      path: "/posts",
      element: <Posts />
    },
    {
      path: '/posts/:id',
      element: <Pst />
    },
    // {
    //   path: "*",
    //   element: <NotFound />
    // }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
