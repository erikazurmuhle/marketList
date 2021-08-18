import React, { useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import "./MyList.css";
import { useState } from "react";
function MyList() {
  const initialState = {
    name: "",
    quantity: 0,
  };
  const [product, setProduct] = useState(initialState);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [list, setList] = useState([
    { name: "coca", quantity: 4 },
    { name: "sal", quantity: 2 },
  ]);

  useEffect(() => {
    let newlist = [];
    if (product.quantity)
      newlist = list.filter((x) => x.name !== product.name).concat(product);
    console.log("NEWLIST", newlist);
    if (newlist.length) setList(newlist);
  }, [product]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value !== "") setProductName(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value === "+") {
      setProductQuantity((quantity) => quantity + 1);
    }
    if (e.target.value === "-" && productQuantity > 0) {
      setProductQuantity((quantity) => quantity - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //check if product is in a list and save in what index
    let indexRepeat = list.findIndex((x) => x.name === productName);
    console.log(indexRepeat);
    //save a product repetead
    const productRepeat = list[indexRepeat];

    console.log("REPEAT", productRepeat);
    //create a new list without the product repetead

    // eslint-disable-next-line no-unused-expressions
    productRepeat
      ? setProduct({
          name: productName,
          quantity: productQuantity + productRepeat.quantity,
        })
      : productName !== "" && productQuantity
      ? setProduct({
          name: productName,
          quantity: productQuantity,
        })
      : null;
    setProductName("");
    setProductQuantity(0);
  };
  return (
    <div className="myList__div ">
      <div className="myList__div-div animate__animated animate__backInDown">
        <form onSubmit={handleSubmit}>
          <h1>I need:</h1>
          <div className="form__input">
            <button value="-" onClick={handleClick} />
            <h5 name="quantity">{productQuantity}</h5>
            <button value="+" onClick={handleClick} />
            <input
              type="text"
              value={productName}
              name="product"
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Agregar" />
        </form>
        <ProductList list={list} />
        <h4>Total= $ 1526</h4>
      </div>
    </div>
  );
}

export default MyList;
