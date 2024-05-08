import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//components
import PlayerRender from './PlayerRender';
import Navbar from './components/Navbar';
import HomePage from "./HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route exact path='HomePage' element={<HomePage/>}/>
      <Route path='PlayerRender' element={<PlayerRender/>}/>
    </Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App