import { Global } from "@emotion/react"
import Cars from "./pages/Cars/Cars"
import { GLOBAL_STYLES } from "./styles/global.styles"
import FavoriteCars from "./pages/FavoritesCar/FavoriteCars"

const App = () => {
  return (
    <>
      <Global styles={GLOBAL_STYLES} />
      <div>
        <Cars />
        <FavoriteCars />
      </div>
    </>
  )
}

export default App
