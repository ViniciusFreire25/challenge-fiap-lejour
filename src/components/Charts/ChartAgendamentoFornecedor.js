import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import api from '../../services/api';
import moment from 'moment';
import { ContainerAgnMes2 } from './styles';

export default class ChartAgendamentoFornecedor extends Component {
    constructor(props){
        super(props);
        let m = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"];
        this.state = {
            meses: m,
            chartData: {
                labels: m,
                datasets: [{
                              label: "Por Fornecedor",
                              data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                              backgroundColor: ['rgb(3,106,177)', 'rgb(3,106,177)', 'rgb(3,106,177)',
                                  'rgb(3,106,177)', 'rgb(3,106,177)','rgb(3,106,177)',
                                  'rgb(3,106,177)','rgb(3,106,177)','rgb(3,106,177)',
                                  'rgb(3,106,177)', 'rgb(3,106,177)', 'rgb(3,106,177)']
                          }]
            },
            status: '',
            fornecedor: '',
            ano: ''
        }
    }

    async componentDidUpdate(){
        let agendamento = await api.get("/appointment").then(resp => resp.data);
        const { ano, meses, status, fornecedor } = this.state;
        let results = new Array(12);
        for (let i = 0; i < results.length; i++) {
            results[i] = 0;
        }
        
        if (status !== "todos"){
        for (let mes = 1; mes <= 12; mes++) {
            agendamento.map(ag => {     
              if ((moment(ag.BEGINS_AT).isSame(`${ano}-${mes}`, 'month')) && (ag.STATUS == status)
                  && (ag.VENDOR_ID == fornecedor)) {
                    ++results[mes - 1];
              }
              return 0;           
            })
          } 
        } else {
          for (let mes = 1; mes <= 12; mes++) {
          agendamento.map(ag => {     
            if ((moment(ag.BEGINS_AT).isSame(`${ano}-${mes}`, 'month')) && (ag.VENDOR_ID == fornecedor)) {
                  ++results[mes - 1];
            }
            return 0;           
          })
          }
        }

        this.setState({
            chartData: {
                         labels: meses,
                         datasets: [{
                                      label: `Por Fornecedor`,
                                      data: results,
                                      backgroundColor: ['rgb(3,106,177)', 'rgb(3,106,177)', 'rgb(3,106,177)',
                                                        'rgb(3,106,177)', 'rgb(3,106,177)', 'rgb(3,106,177)',
                                                        'rgb(3,106,177)', 'rgb(3,106,177)', 'rgb(3,106,177)',
                                                        'rgb(3,106,177)','rgb(3,106,177)', 'rgb(3,106,177)'

                                      ],
                                   }]
                        }
        })
    }

    handleAno = e => {
        this.setState({
            ano: e.target.value
        })
    }

    handleStatus = e => {
      this.setState({
          status: e.target.value
      })
    }

    handleFornecedor = e => {
      this.setState({
          fornecedor: e.target.value
      })
    }

    render(){
        return (
            <ContainerAgnMes2>
                <input type="number" placeholder="Ex: 2020" onChange={this.handleAno} />
                <select id="status" onChange={this.handleStatus}>
                  <option value="" selected>Status</option>
                  <option value="todos">Todos</option>
                  <option value="CREATED">Criados</option>
                  <option value="CANCELED">Cancelados</option>
                  <option value="CONFIRMED">Confirmados</option>
                  <option value="VISITED">Visitados</option>
                </select>
                <input type="number" name="fornecedor" onChange={this.handleFornecedor} />
                <Bar
                  data={this.state.chartData}
                  width={400}
                  height={320}
                  options={{

                      title: {
                          display: true,
                          text: 'Total de Agendamentos',
                          fontSize: 25
                      },
                      legend:{
                          display: true,
                          position:'top',

                      }
                  }}
                />
            </ContainerAgnMes2>
        ); 
    }
}