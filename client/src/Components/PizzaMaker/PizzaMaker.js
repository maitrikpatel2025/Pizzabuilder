import React, { Component } from "react";
import Aux from '../../utility/Aux'
import Pizza from "../Pizza/Pizza";

class PizzaMaker extends Component {
  state = {};
  render() {
    return (
      <Aux classname="PizzaMaker">
       <Pizza/>
        <div>Pizzacontols</div>
      </Aux>
    );
  }
}

export default PizzaMaker;
