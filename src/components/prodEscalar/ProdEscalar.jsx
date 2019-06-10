import React, { Component } from "react";
import "../../styles.css"

export default class ProdEscalar extends Component {
  constructor() {
    super();

    this.state = {
      vector1: "",
      vector2: "",
      rta: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calcularProdEscalar = this.calcularProdEscalar.bind(this);
    this.craps = this.craps.bind(this);
  }

  craps(e) {
    console.log("none");
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  calcularProdEscalar(e) {
    e.preventDefault();

    const v1 = [];
    const v2 = [];
    let rta = 0;

    let aux = this.state.vector1.split(",");
    aux.forEach(a => {
      v1.push(Number(a));
    });

    aux = this.state.vector2.split(",");
    aux.forEach(a => {
      v2.push(Number(a));
    });

    for (let i = 0; i < v1.length; i++) {
      rta += v1[i] * v2[i];
    }
    this.setState({
      rta
    });
    console.log(this.state.rta);
  }

  render() {
    return (
      <div className="container d-flex ">
        <div className="row justify-content-center">
        <h4>Producto Escalar</h4>
          <div className="col s6">
            <div className="input-field col m4">
              <input
                placeholder="Vector1 = (x, y, z)"
                name="vector1"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col m4">
              <input
                placeholder="Vector2 = (x, y, z)"
                name="vector2"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col m4">
              <input
                value={this.state.rta}
                placeholder={this.state.rta}
                name="rta"
                type="text"
                className="validate"
                readOnly="readOnly"
                onChange={this.craps}
              />
            </div>

            <button
              className="waves-effect waves-light btn-large"
              onClick={this.calcularProdEscalar}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>
    );
  }
}
