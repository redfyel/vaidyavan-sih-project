import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Learn from './components/learn/Learn'
import GuidedTourHome from './components/guided-tour-home/GuidedTourHome'
import GuidedTourGarden from './components/guided-tour-garden/GuidedTourGarden'
import './App.css'



function App() {
  const browserRouter = createBrowserRouter([
    {
      path : '',
      element : <RootLayout />,
      children : [
        {
          path : '',
          element : <Home />
        },
        {
          path : 'register',
          element : <Register />
        },
        {
          path : 'login',
          element : <Login />
        },
        {
          path : 'learn',
          element : <Learn />
        },{
          path : 'guided-tours',
          element : <GuidedTourHome />,
          children : [
            {path : 'guided-tour-garden',
            element : <GuidedTourGarden />}
          ]
        },
      ]
    }
  ])

  return (

    <div className="main">
      <RouterProvider router = {browserRouter} />
    </div>

  )
}

export default App

