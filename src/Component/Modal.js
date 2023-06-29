import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    // let { display } = this.props.state;
    let { index, item, state, openModal, chiTietSanPham } = this.props;

    return (
      <>
        <div
          style={{
            display: `${state.display}`,
            position: "fixed",
            content: "",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            opacity: "0.9",
            backgroundColor: "darkgrey",
          }}
        >
          <button
            className="btn btn-danger "
            style={{
              position: "absolute",
              right: "350px",
              top: "50px",
            }}
            onClick={() => {
              this.props.openModal("none");
            }}
          >
            X
          </button>
          <div
            className="ProductDetail"
            style={{
              position: "absolute",
              top: "300px",
              left: "50%",
              right: "50%",
              transform: "translate(-50%, -50%)",
              height: "auto",
              width: "500px",
              backgroundColor: "#3D9970",
              opacity: "1",
              fontSize: "20px",
              color: "white",
              // marginTop: "150px",
            }}
          >
            <img width={"200px"} src={state.productData.image} alt="" />
            <h1> Name: {state.productData.name}</h1>
            <p className="text-left">
              Alias: {state.productData.alias}
              <br />
              Price: {state.productData.price}
              <br />
              Description: {state.productData.description}
              <br />
              ShortDescription: {state.productData.shortDescription}
              <br />
              Quantity: {state.productData.quantity}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            openModal("block");
            chiTietSanPham(item);
          }}
          className="btn btn-success opacity-75"
        >
          Chi Tiết Sản Phẩm
        </button>
      </>
    );
  }
}
