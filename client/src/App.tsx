import { Global } from '@emotion/react'
import { FC } from 'react'
import Cars from './pages/Cars/Cars'
import { GLOBAL_STYLES } from './styles/global.styles'
import Header from './components/header/Header'
import Main from './components/main/Main'

const App: FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Cars />
      <Global styles={GLOBAL_STYLES} />
    </div>
  )
}

export default App
