import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div>
        <div className="card text-dark m-2">
          <img className="card-img-top" src={item.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}</p>
            <p>{item.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
