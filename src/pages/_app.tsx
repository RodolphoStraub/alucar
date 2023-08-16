import '@/styles/globals.css'
import '../components/NavbarModule.css'
import '../components/InicioModule.css'
import '../components/ChooseUsModule.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
