import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Daniel Correia Cabral Correa',
      dados: 'nielcccorrea@gmail.com | (13)991306708 | Santos - SP',
      formacao: 'Cursando Ciência da Computação na instituição UNIP, conclui curso de TI e estou cursando inglês na FISK',
      exp: 'Estudei NodeJS, ReactJS, HTML, CSS, Javascript, Banco de Dados, C#, Java e Python',
      projeto: 'Meus projetos estão todos na minha conta do GitHub "Danielccc3"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;