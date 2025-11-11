import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'


// Criar instância do router
const router = createRouter({ routeTree })

// Registrar o router para inferência de tipos
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Renderizar a aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
