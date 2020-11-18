import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import mainIcon from '../../assets/icons/main.png'
import usersIcon from '../../assets/icons/users.png'
import weddingsIcon from '../../assets/icons/weddings.png'
import schedulesIcon from '../../assets/icons/schedules.png'
import invoicesIcon from '../../assets/icons/invoices.png'

import './style.css'

function Navbar() {
    return (
      <>
        <Navigation
            activeItemId="/main"
            onSelect={({itemId}) => {

            }}
            items={[
              {
                title: 'Geral',
                itemId: '/main',
                elemBefore: () => <img src={mainIcon} alt="icon" className="iconMenu" />,
              },
              {
                title: 'Usuários',
                itemId: '/users',
                elemBefore: () => <img src={usersIcon} alt="icon" className="iconMenu" />,
              },
              {
                title: 'Casamentos',
                itemId: '/weddings',
                elemBefore: () => <img src={weddingsIcon} alt="icon" className="iconMenu" />,
              },
              {
                title: 'Agendamentos',
                itemId: '/schedules',
                elemBefore: () => <img src={schedulesIcon} alt="icon" className="iconMenu" />,
              },
              {
                title: 'Vendas',
                itemId: '/invoices',
                elemBefore: () => <img src={invoicesIcon} alt="icon" className="iconMenu" />,
              },
            ]}
          />
      </>
    );
}

export default Navbar