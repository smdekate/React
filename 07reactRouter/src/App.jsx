import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {About, Contact, Home, User, Github, githubInfoLoader} from './components'
  
function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '',
  //         element: <Home />
  //       },
  //       {
  //         path: 'about',
  //         element: <About />
  //       },
  //       {
  //         path: 'contact',
  //         element: <Contact />
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(   // another way to create routes much better i would say
    createRoutesFromElements(
      <Route path='/' element={<Layout />}> 
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
        />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
