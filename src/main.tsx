import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './About.tsx'
import tonguesTheme from './theme.ts';
import Articles from './Articles.tsx'
import Post from './Post.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Articles />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'posts',
        element: <Articles />,
      },
      {
        path: 'post/:post',
        element: <Post />
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
