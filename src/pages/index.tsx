import Inicio from '@/components/Inicio'
import Navbar from '../components/Navbar'

import { Inter } from 'next/font/google'
import ChooseUs from '@/components/ChooseUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
  <Navbar/>
  <Inicio/>
  <ChooseUs/>
</div>
  )
}
