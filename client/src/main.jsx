import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import Main from './Layout/Main.jsx'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Route}>
        <Main />
        <Toaster />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
