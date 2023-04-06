import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import ExampleCards from './pages/ExampleCards'
import Students from './pages/Students'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/",
        element: <Exercises />
      },
      {
        path: "/exampleCards",
        element: <ExampleCards />
      },
      {
        path: "/students",
        element: <Students />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
