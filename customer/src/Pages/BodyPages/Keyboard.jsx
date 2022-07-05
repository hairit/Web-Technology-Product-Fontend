import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Solver from "../../Classes/Solver";
import "../../CSS/Keyboard.css";
import {
  BsCart3,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from "react-icons/bs";

import "../../CSS/Layout12.css";
const solver = new Solver();
const renderKeyboardItem = (product, index, addCart, history) => (
  <div className="col c-6">
    <div className="keyboard-product" key={index}>
      <div className="keyboard-product-image">
        <img
          className="keyboard-product-img"
          src={URL + `/Images/Products/${product.nameimage}`}
        />
      </div>
      <div className="keyboard-product-detail">
        <NavLink
          className="keyboard-product-name"
          to={`keyboard/${product.id}`}
        >
          {product.ten}
        </NavLink>
        <p
          style={{
            fontSize: 14,
            padding: "4px 10px",
            color: "rgb(73, 72, 72)",
          }}
        >
          Thương hiệu : {product.thuonghieu}
        </p>
        <p
          style={{
            fontSize: 14,
            padding: "4px 10px",
            color: "rgb(73, 72, 72)",
          }}
        >
          Năm sản xuất : {product.namsx}
        </p>
        <p
          style={{
            fontSize: 14,
            padding: "4px 10px",
            color: "rgb(73, 72, 72)",
          }}
        >
          Bảo hành : {product.baohanh}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "5px 0",
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "rgb(136, 133, 133)",
              padding: "4px 10px",
              fontWeight: 500,
              textDecoration: "line-through",
            }}
          >
            {solver.formatCurrency("vi-VN", "currency", "VND", product.giacu)}
          </p>
          <p
            style={{
              fontSize: 20,
              color: "#cf0f01",
              padding: "4px 10px",
              fontWeight: 500,
            }}
          >
            {solver.formatCurrency("vi-VN", "currency", "VND", product.gia)}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "2px 10px",
          }}
        >
          <button
            className="keyboard-btn-add"
            style={{
              width: "100%",
              padding: "5px 0",
              margin: "4px 0",
              border: "solid 2px #4252bd",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              color: "#4252bd",
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => addCart(product.id, product.gia)}
          >
            <BsCart3 style={{ fontSize: 25, marginRight: 10 }} />
            <p>Thêm vào giỏ</p>
          </button>
          <button
            className="keyboard-btn-buy"
            style={{
              width: "100%",
              padding: "10px 0",
              margin: "4px 0",
              border: "none",
              backgroundColor: "#4252bd",
              borderRadius: "5px",
              color: "#FFFFFF",
              fontSize: 14,
              cursor: "pointer",
            }}
            onClick={() => addCart(product.id, product.gia, history)}
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function Keyboard({ addCart, products }) {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState(1);

  const pages = () => {
    var pages = [];
    if (products.length <= 4) return (pages = [1]);
    else {
      var i = 1;
      for (i; i <= products.length / 4; i++) {
        pages.push(i);
      }
      if (products.length % 4 > 0) pages.push(i);
      return pages;
    }
  };
  return (
    <div className="keyboard-p">
      <div className="keyboard-p-header">
        <h3>Bàn phím máy tính</h3>
      </div>
      <div className="container12Col wide">
        <div className="row-12">
          <div></div>
          {products.map((product, index) =>
            pageNumber * 4 - 4 <= index && index <= pageNumber * 4 - 1 ? (
              renderKeyboardItem(product, index, addCart, history)
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className="keyboard-pavigation">
        <button
          className="keyboard-previous keyboard-change-page"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <BsFillCaretLeftFill style={{ fontSize: 17 }} />
        </button>
        {pages().map((page, index) => (
          <div
            key={index}
            className={
              pageNumber === page
                ? "keyboard-page-number-active"
                : "keyboard-page-number"
            }
          >
            {page}
          </div>
        ))}
        <button
          className="keyboard-next keyboard-change-page"
          disabled={pageNumber === pages().length}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <BsFillCaretRightFill style={{ fontSize: 17 }} />
        </button>
      </div>
    </div>
  );
}
