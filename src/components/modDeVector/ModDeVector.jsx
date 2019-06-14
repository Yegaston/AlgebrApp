import React, { Component } from "react";
import "../../styles.css";
import { thisExpression } from "@babel/types";

export default class ModDeVector extends Component {
  constructor() {
    super();

    this.state = {
      vector: [],
      rta: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.CalcularModulo = this.CalcularModulo.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  CalcularModulo() {
    console.log("pornm");

    const v = [];
    let rta = 0;
    let t = 0;

    let aux = this.state.vector.split(",");
    aux.forEach(a => {
      v.push(Number(a));
    });

    for (let i = 0; i < v.length; i++) {
      t += Math.pow(v[i], 2);
    }

    rta = Math.sqrt(t);

    this.setState({
        rta
    })
  }

  render() {
    return (
      <div>
        <h4>Modulo de un vector</h4>
        <div className="row">
          <div className="input-field col m4">
            <input
              placeholder="Vector = (x, y, z)"
              name="vector"
              type="text"
              className="validate"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field col m2">
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
        </div>
        <button
          className="waves-effect waves-light btn-large"
          onClick={this.CalcularModulo}
        >
          Calcular
        </button>
      </div>
    );
  }
}
