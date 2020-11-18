import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Navbar from '../../components/Navbar'
import CardChart from '../../components/CardChart'
import ChartAgendamentoFornecedor from '../../components/Charts/ChartAgendamentoFornecedor';

function Schedules() {
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
              <Col md="6">
                <ChartAgendamentoFornecedor />
              </Col>
              <Col md="6">
       
              </Col>
              <Col md="12">
  
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  )
}

export default Schedules
