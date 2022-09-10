import { AuthContextProvider } from '../context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
