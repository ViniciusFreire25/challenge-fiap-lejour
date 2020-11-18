import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Navbar from '../../components/Navbar'
import CardChart from '../../components/CardChart'

function Users() {
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
              <Col md="4">
                <CardChart />
              </Col>
              <Col md="4">
                <CardChart />
              </Col>
              <Col md="4">
                <CardChart />
              </Col>
              <Col md="12">
                <CardChart />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Users
