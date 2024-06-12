import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './About.tsx'
import tonguesTheme from './theme.ts';
import Articles from './Articles.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'articles',
        element: <Articles />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={tonguesTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
