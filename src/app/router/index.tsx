import { createBrowserRouter, Link, Navigate, Outlet } from 'react-router-dom'

import { PAGE_ROUTES } from './pageRoutes'

const RootPage = () => (
  <main className="shell">
    <h1>Vite lazy import reproduction</h1>
    <nav className="tabs">
      <Link to="/section/page-1">Page 1</Link>
      <Link to="/section/page-2">Page 2</Link>
      <Link to="/section/page-3">Page 3</Link>
      <Link to="/section/page-4">Page 4</Link>
      <Link to="/section/page-5">Page 5</Link>
    </nav>
    <Outlet />
  </main>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/section" replace={true} />,
      },
      PAGE_ROUTES,
    ],
  },
])
