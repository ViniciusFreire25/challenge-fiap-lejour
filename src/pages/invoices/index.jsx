import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Navbar from '../../components/Navbar'
import ChartVendasMes from '../../components/Charts/ChartVendasMes';
import CardChart from '../../components/CardChart'

function Invoices() {
  return (
    <>
      <Container>
        <Row>
          <Col md="3">
            <Navbar />
          </Col>
          <Col md="9">
            <Row>
              <Col sm="12">
                <div className="title__page">
                  <h1>Dashboard Geral</h1>
                </div>
              </Col>
              <Col md="8">
                <ChartVendasMes />
              </Col>
              <Col md="8">
                
              </Col>
              <Col md="12">
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  )
}

export default Invoices
