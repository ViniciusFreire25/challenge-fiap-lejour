import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardImg
} from 'reactstrap';

import chart from '../../assets/imgs/chart.png'

import './style.css';

function CardChart() {
  return (
    <>
      <div className="cardMargin">
        <Card>
          <CardBody>
            <CardTitle tag="p">Título Gráfico</CardTitle>
            <CardImg bottom width="100%" src={chart} alt="Gráfico" />
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default CardChart
