import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      nome: '',
      tarefa: ''
    }
    this.executar = this.executar.bind(this);
  }


  executar(e) {

    e.preventDefault();
    let state = this.state;
    let id = Date.now();
    this.setState(state.lista = [...state.lista, { id: id, nome: state.nome, tarefa: state.tarefa }]);
    console.log(state.lista);

  }


  render() {
    return (
      <div className='container'>
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.executar}>
          <div className='conteudo'>
            <div className='nome'>
              <label className='titulo'>Nome</label>
              <input type='text' id='nome' name='nome' className='boxs' onChange={(e) => this.setState({ nome: e.target.value })} required />
            </div>
            <div className='tarefa'>
              <label className='titulo'>Tarefa</label>
              <input type='text' id='tarefa' name='tarefa' className='boxs' onChange={(e) => this.setState({ tarefa: e.target.value })} required />
            </div>
            <div className='botao'>
              <button id='inputbutton' type='submit'>Cadastrar</button>
            </div>
          </div>
        </form>
        <div>
          <table className='tabela'>
            <thead>
              <tr>
                <td id="tituloTabela" colSpan='2'>Lista de Tarefas</td>
              </tr>
            </thead>
            <tbody>
              <tr id="cabecalho">
                <td>Nome</td>
                <td>Tarefa</td>
              </tr>
              {this.state.lista.map(conteudo => (<TodoList key={conteudo.id} cont={conteudo} />))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default App;
