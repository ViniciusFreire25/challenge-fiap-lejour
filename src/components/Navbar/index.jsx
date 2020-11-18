import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

import mainIcon from '../../assets/icons/main.png'
import usersIcon from '../../assets/icons/users.png'
import weddingsIcon from '../../assets/icons/weddings.png'
import schedulesIcon from '../../assets/icons/schedules.png'
import invoicesIcon from '../../assets/icons/invoices.png'

import './style.css'

function Navbar() {
  return (
    <>
      <nav>
        <Nav vertical>
          <NavItem>
            <Link to="/">
              <img src={mainIcon} alt="icon" className="iconMenu" />
              Geral
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/users">
              <img src={usersIcon} alt="icon" className="iconMenu" />
              Usuários
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/weddings">
              <img src={weddingsIcon} alt="icon" className="iconMenu" />
              Casamentos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/schedules">
              <img src={schedulesIcon} alt="icon" className="iconMenu" />
              Agendamentos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/invoices">
              <img src={invoicesIcon} alt="icon" className="iconMenu" />
              Vendas
            </Link>
          </NavItem>
        </Nav>
      </nav>
    </>
  );
}

export default Navbar