import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PizzaIngredient.css";

class PizzaIngredient extends Component {
  render() {
    let ingerdient = null;
    switch (this.props.type) {
      case "crust":
        ingerdient = <div className="crust"></div>;
        break;
      case "sauce":
        ingerdient = <div className="sauce"></div>;
        break;
      case "cheese":
        ingerdient = <div className="cheese"></div>;
        break;
      case "mozzarella-cheese":
        ingerdient = <div className="mozzarella-cheese"></div>;
        break;
      case "white-cheese":
        ingerdient = <div className="white-cheese"></div>;
        break;
      case "pepperoni":
        ingerdient = <div className="pepperoni"></div>;
        break;
      case "tomoto":
        ingerdient = <div className="tomoto"></div>;
        break;
      case "mushrooms":
        ingerdient = <div className="mushrooms"></div>;
        break;
      case "onion":
        ingerdient = <div className="onion"></div>;
        break;
      case "olive":
        ingerdient = <div className="olive"></div>;
        break;
       case "jalapeno":
        ingerdient = <div className="jalapeno"></div>;
        break;
      default:
        ingerdient = null;
        break;
    }
    return ingerdient;
  }
}
PizzaIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PizzaIngredient;
