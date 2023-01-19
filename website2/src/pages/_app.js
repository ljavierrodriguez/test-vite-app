import injectContext from '@/store/appContext'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(App)
