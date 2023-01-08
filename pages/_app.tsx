import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import BurgerMenu from '../components/BurgerMenu';

export interface Section {
  title: string;
  url: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const section1: Section[] = [
    { title: "Gallery", url: "/" },
    { title: "Drawings", url: "/drawings" },
    { title: "Writings", url: "/writings" },
  ]
  const section2: Section[] = [
    { title: "Projects", url: "/projects" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "contact" },
  ]
  return <>
  <div className='block sm:hidden'><BurgerMenu sections={[...section1, ...section2]}/></div>
  <NavigationBar section1={section1} section2={section2} />  
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
