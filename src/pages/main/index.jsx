import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Navbar from '../../components/Navbar'
import ChartUsuariosMes from '../../components/Charts/ChartUsuariosMes';
import ChartCasamentoMes from '../../components/Charts/ChartCasamentoMes';
import ChartAgendamentoMes from '../../components/Charts/ChartAgendamentoMes';
import ChartAgendamentoFornecedor from '../../components/Charts/ChartAgendamentoFornecedor';
import ChartVendasMes from '../../components/Charts/ChartVendasMes';

function Main() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Row>
              <Col sm="12">
                <div className="title__page">
                  <h1>Dashboard Geral</h1>
                </div>
              </Col>
              <Col md="6">
                  <ChartUsuariosMes />
              </Col>
              <Col md="6">
                  <ChartCasamentoMes />
              </Col>
              <Col md="12">
                  <ChartAgendamentoMes />
              </Col>
              <Col md="6">
                  <ChartAgendamentoFornecedor />
              </Col>
              <Col md="6">
                  <ChartVendasMes />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  )
}

export default Main
