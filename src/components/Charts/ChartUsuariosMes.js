import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import api from '../../services/api';
import moment from 'moment';
import { Container } from './styles';

export default class ChartUsuariosMes extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: '',
            meses: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
                    "Outubro", "Novembro", "Dezembro"],
        }
    }

    async componentDidMount(){
        let users = await api.get("/user").then(resp => resp.data);

        let total = 0;
        let mensais = [];
        for (let mes = 1; mes <= 12; mes++) {
            users.map(user => {
                if (moment(user.CREATED_AT).isSame(`${2020}-${mes}`, 'month')){
                    total++;
                }
                return 0;
            })
            mensais = [ ...mensais, total];
            total = 0;
        }
        this.setState({
            chartData: {
                         labels: this.state.meses,
                         datasets: [{
                                      label: 'Usuários Cadastrados',
                                      data: mensais,
                                      backgroundColor: ['rgb(24,86,81)','rgb(24,86,81)','rgb(24,86,81)',
                                                        'rgb(24,86,81)','rgb(24,86,81)','rgb(24,86,81)',
                                                        'rgb(24,86,81)','rgb(24,86,81)','rgb(24,86,81)',
                                                        'rgb(24,86,81)','rgb(24,86,81)','rgb(24,86,81)'

                                      ]
                                   }]
                        }
        })

    }

    render(){
        return (
            <Container>

                <HorizontalBar

                  data={this.state.chartData}
                  width={400}
                  height={320}
                  options={{



                      title: {
                          display: true,
                          text: 'Usuários',
                          fontSize: 20
                      },
                      legend:{
                          display: true,
                          position:'top'
                      }
                  }}
                />
            </Container>
        ); 
    }
}