import '@/styles/globals.css'
import '../components/NavbarModule.css'
import '../components/InicioModule.css'
import '../components/ChooseUsModule.css'
import '../components/VeiculosModule.css'
import '../components/OpinioesModule.css'
import '../components/ContatoModule.css'
import "./sobre.css"

import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Contato from '@/components/Contato'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Navbar/> 
    <Component {...pageProps} />
    <Contato/>
  </>
  )
}
