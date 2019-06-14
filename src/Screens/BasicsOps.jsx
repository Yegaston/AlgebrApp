import React, { Component } from "react";
import ProdEscalar from "../components/prodEscalar/ProdEscalar";
import ModDeVector from "../components/modDeVector/ModDeVector";

export default class BasicsOps extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col s6">
            <ProdEscalar />
          </div>
          <div className="col s6">
            <ModDeVector />
          </div>
        </div>
      </div>
    );
  }
}
