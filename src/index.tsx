import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { RouterProvider } from "react-router"
import { router } from "./router"

const rootNodeId = "root"

const container = document.getElementById(rootNodeId)

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `)
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
