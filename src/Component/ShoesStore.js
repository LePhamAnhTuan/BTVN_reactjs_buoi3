import React, { Component } from "react";
import ProductList from "./ProductList";
import { arrProduct } from "./dataShoes";

export default class ShoesStore extends Component {
  products = [...arrProduct];
  state = {
    productData: {
      id: "",
      name: "",
      alias: "",
      price: "",
      description: "",
      shortDescription: "",
      quantity: "",
      image: "",
    },
    display: "none",
  };

  openModal = (trangthai) => {
    this.setState({
      display: trangthai,
    });
  };
  chiTietSanPham = (item) => {
    console.log("item: ", item);
    this.setState({
      productData: item,
    });
  };
  render() {
    return (
      <div
        className="bg-shoes text-danger text-center "
        style={{
          width: "100%",
          height: "100vh",
          //   background: "url(https://picsum.photos/2000/2000) center no-repeat",
          backgroundSize: "cover",
          fontSize: "50px",
        }}
      >
        ShoesStore
        <div
          className="container bg-danger content_shoes text-dark"
          style={{
            fontSize: "20px",
          }}
        >
          <ProductList
            productsData={this.products}
            setStateModal={this.setStateModal}
            state={this.state}
            openModal={this.openModal}
            chiTietSanPham={this.chiTietSanPham}
          ></ProductList>
        </div>
      </div>
    );
  }
}
