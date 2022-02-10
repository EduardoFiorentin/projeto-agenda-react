import React, { Component } from "react";
import "./App.css";

function memoryOpen() {
  let memory;
  if(localStorage.getItem('memory') == null) {
      localStorage.setItem('memory', '0')
      memory = localStorage.getItem('memory')
  } else {
      memory = localStorage.getItem('memory')
  }
  memory = JSON.parse(memory)

  return memory
}

function memoryClose(memory) {
  let memoria = JSON.stringify(memory)
  localStorage.setItem('memory', memoria)
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      segunda: [],
      terca: [],
      quarta: [],
      quinta: [],
      sexta: [],
      sabado: [],
      domingo: [],
    };
  }
  menu() {
    const item = document.querySelector(".cabecalho");
    const item2 = document.querySelector(".botao-menu-pg");
    item.classList.toggle("cabecalho--ativo");
    item2.classList.toggle("esconder");
  }

  criarNota() {
    console.log("criando nota");
    const dia = document.querySelector(".selecionar-dia").value;
    const cor = document.querySelector(".selecionar-cor").value;
    const titulo = document.querySelector(".titulo").value;
    const texto = document.querySelector(".descricao").value;
    const novaNota = {
      dia: dia,
      cor: cor,
      titulo: titulo,
      paragrafo: texto,
    };

    if (dia == "segunda") {
      this.setState({ ...this.state.segunda.push(novaNota) });
    } else if (dia == "terca") {
      this.setState({ ...this.state.terca.push(novaNota) });
    } else if (dia == "quarta") {
      this.setState({ ...this.state.quarta.push(novaNota) });
    } else if (dia == "quinta") {
      this.setState({ ...this.state.quinta.push(novaNota) });
    } else if (dia == "sexta") {
      this.setState({ ...this.state.sexta.push(novaNota) });
    } else if (dia == "sabado") {
      this.setState({ ...this.state.sabado.push(novaNota) });
    } else if (dia == "domingo") {
      this.setState({ ...this.state.domingo.push(novaNota) });
    }
  }
	
  removerCard(event) {
	  const localEvento = event.target.parentElement.outerHTML
    // console.log(localEvento);

    //coleta de id
    const regex = /id="([\d]+)/gi
    let index = regex.exec(localEvento)
    console.log(index);
    index = index[1]
    index = parseInt(index)
    // console.log(index);
    // console.log(parseInt(index));

    //coleta de dia
    const regex2 = /dia="([\w]+)"/gi
    let dia = regex2.exec(localEvento)
    dia = dia[1]
    // console.log(dia)

    
    if (dia == "segunda") {
      this.setState({...this.state.segunda.splice(index, 1)})
    } else if (dia == "terca") {
      this.setState({...this.state.terca.splice(index, 1)})
    } else if (dia == "quarta") {
      this.setState({...this.state.quarta.splice(index, 1)})
    } else if (dia == "quinta") {
      this.setState({...this.state.quinta.splice(index, 1)})
    } else if (dia == "sexta") {
      this.setState({...this.state.sexta.splice(index, 1)})
    } else if (dia == "sabado") {
      this.setState({...this.state.sabado.splice(index, 1)})
    } else if (dia == "domingo") {
      this.setState({...this.state.domingo.splice(index, 1)})
    }
  }

  salvar() {
    let armazenamento = memoryOpen()
    armazenamento = this.state
    memoryClose(armazenamento)
  }
  carregar() {
    let armazenamento = memoryOpen()
    this.setState(armazenamento)
  }

  render() {
    return (
      <section className="background">
        <img
          src="https://img.icons8.com/material-two-tone/24/000000/menu--v4.png"
          className="botao-menu-pg"
          onClick={this.menu}
        />
        <div className="cabecalho ">
          <img
            src="https://img.icons8.com/material-two-tone/24/000000/menu--v4.png"
            className="botao-menu"
            onClick={this.menu}
          />
        <div class="botoes">
          <button className="botao" onClick={this.salvar.bind(this)}>salvar</button>
          <button className="botao" onClick={this.carregar.bind(this)}>carregar notas</button>
        </div>
          <select className="selecionar-dia select">
            <option>segunda</option>
            <option>terca</option>
            <option>quarta</option>
            <option>quinta</option>
            <option>sexta</option>
            <option>sabado</option>
            <option>domingo</option>
          </select>
          <select className="selecionar-cor select">
            <option value="white">branco</option>
            <option value="red">Vermelho</option>
            <option value="yellow">Amarelo</option>
            <option value="green">Verde</option>
          </select>
          <input placeholder="titulo" className="titulo" />
          <textarea placeholder="descricao" className="descricao"></textarea>
          <button className="botao-enviar" onClick={this.criarNota.bind(this)}>
            Criar nota
          </button>
        </div>
        <div className="agenda">
          <div className="segunda nota">
            <h2>Segunda</h2>
            {this.state.segunda.map((card, index) => {
				      console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="segunda">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			      }
          </div>
          <div className="terca nota">
            <h2>Terça</h2>
			      {this.state.terca.map((card, index) => {
			      	console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="terca">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover"
                   onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			      }
          </div>
          <div className="quarta nota">
            <h2>Quarta</h2>
			{this.state.quarta.map((card, index) => {
				// console.log(index);
              return (
                <div className={card.cor}  id={index} key={index} dia="quarta">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			}
          </div>
          <div className="quinta nota">
            <h2>Quinta</h2>
			{this.state.quinta.map((card, index) => {
				console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="quinta">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			}
          </div>
          <div className="sexta nota">
            <h2>Sexta</h2>
			{this.state.sexta.map((card, index) => {
				console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="sexta">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			}
          </div>
          <div className="sabado nota">
            <h2>Sábado</h2>
			{this.state.sabado.map((card, index) => {
				console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="sabado">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			}
          </div>
          <div className="domingo nota">
            <h2>Domingo</h2>
			{this.state.domingo.map((card, index) => {
				console.log("laço");
              return (
                <div className={card.cor} id={index} key={index} dia="domingo">
                  <h3 className="card-titulo">{card.titulo}</h3>
                  <p className="card-paragrafo">{card.paragrafo}</p>
                  <button className="botao-remover" onClick={this.removerCard.bind(this)}>remover</button>
                </div>
              );
            })
			}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
