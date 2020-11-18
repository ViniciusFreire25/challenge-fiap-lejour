import React from 'react'
import {
  Container
} from 'reactstrap'

import logo from '../../assets/imgs/logo.png'
import exit from '../../assets/icons/exit.png'

import './style.css'

function Header() {
  return (
    <>
      <header>
        <Container>
          <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <a href="#f">
              <img src={exit} alt="sair" className="signout"/>
              <p>Sair</p>
            </a>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header
