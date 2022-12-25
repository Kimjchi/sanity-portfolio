import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <NavigationBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
