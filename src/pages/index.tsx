import Head from "next/head";
import Inicio from '@/components/Inicio'
import Navbar from '../components/Navbar'


import { Inter } from 'next/font/google'
import ChooseUs from '@/components/ChooseUs'
import Veiculos from "@/components/Veiculos";
import Opinioes from "@/components/Opinioes";
import Contato from "@/components/Contato";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
<Head>
    <title>Alucar</title>
    </Head>
  <Navbar/>
  <Inicio/>
  <ChooseUs/>
  <Veiculos/>
  <Opinioes/>
  <Contato/>
</div>
  )
}
