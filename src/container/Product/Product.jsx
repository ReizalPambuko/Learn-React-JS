import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
    state = {
        order: 4,
    }

    handleCounterChange = (newValue) => {
      this.setState({
        order: newValue
      })
    }


    render(){
        return(
          <Fragment>
        <div className="card">
            <div className="header-logo">
                <h5>R_RESTAURANT</h5>
            <div className="count">{this.state.order}</div>
            </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
          </Fragment>
        )
    }
}

export default Product;