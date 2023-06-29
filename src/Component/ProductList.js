import React, { Component } from "react";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default class ProductList extends Component {
  render() {
    let { productsData, state, openModal, chiTietSanPham } = this.props;
    console.log("state: ", state);
    return (
      <div className="row">
        {productsData.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductItem item={item} />
              <Modal
                index={item.id}
                item={item}
                state={state}
                openModal={openModal}
                chiTietSanPham={chiTietSanPham}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
