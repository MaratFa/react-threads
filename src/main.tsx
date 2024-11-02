import React from "react"
import { Provider } from "react-redux"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { Auth } from "./pages/auth"
import { AuthGuard } from "./features/user/authGuard"
import { Posts } from "./pages/posts"
import { ThemeProvider } from "./components/theme-provider"
import { createRoot } from "react-dom/client"
import { Layout } from "./components/layout/index"
import { CurrentPost } from "./pages/current-post"
import { Followers } from "./pages/followers"
import { Following } from "./pages/following"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <CurrentPost />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "following",
        element: <Following />,
      },
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider>
            <AuthGuard>
              <RouterProvider router={router} />
            </AuthGuard>
          </ThemeProvider>
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
