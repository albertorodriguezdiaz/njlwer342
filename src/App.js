import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
    list:[]};
  }

 
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  sendName(event) {
    event.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.name)
    });
    this.state.name = ""
  }
  

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
              {this.state.list.map((value)=>
                <li key={value}>{value}</li>
              )}
          </ul>
           <form onSubmit={this.sendName.bind(this)}>
             <input type="text" id="new-task" value={this.state.name} placeholder="Ingresa una tarea y oprime Enter" onChange={this.updateName.bind(this)}/>
           </form>
        </div>
      </div>
    )
  }

}


export default App;