import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import CardChart from '../../components/CardChart'
import Footer from '../../components/Footer'
import ChartUsuariosMes from '../../components/Charts/ChartUsuariosMes';
import ChartVendasMes from '../../components/Charts/ChartVendasMes';
import ChartCasamentoMes from '../../components/Charts/ChartCasamentoMes';
import ChartAgendamentoMes from '../../components/Charts/ChartAgendamentoMes';

function Main() {
  return (
    <>
      <Header />
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
              <Col md="4">
                  <ChartUsuariosMes />
              </Col>
              <Col md="4">
                  <ChartVendasMes />
              </Col>
              <Col md="4">
                  <ChartCasamentoMes />
              </Col>
              <Col md="12">
                  <ChartAgendamentoMes />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Main
