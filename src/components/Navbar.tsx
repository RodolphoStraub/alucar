import React from 'react'
import Link from 'next/link'


type Props = {}

const Navbar = (props: Props) => {
  return (
<div className="navbar">
      <ul className="bar">
        <li>
          <Link className="Alucar" href="/">
            <span className='logocolor'>Alu</span>car 
          </Link>
        </li>
        <li>
          <Link className="reservar" href="/reservar">
            Reservar
          </Link>
        </li>
        <li>
          <Link className="serviço" href="/serviço">
            Serviço
          </Link>
        </li>
        <li>
          <Link className="termos" href="/termos">
            Termos
          </Link>
        </li>
        <li>
          <Link className="sobre" href="/sobre">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link className="contato" href="/contato">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
