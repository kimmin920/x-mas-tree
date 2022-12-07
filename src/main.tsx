import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Tree } from './pages'
import GlobalStyle from './GlobalStyle'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/trees/:treeId',
    element: <Tree />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
