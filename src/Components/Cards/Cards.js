import React, { useState } from "react";
import "./Cards.css";
import Cardsdata from "../CardsData/CardsData";
import { useDispatch } from "react-redux";

import { Add } from "../../Redux/Actions/Actions";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);


  const dispatch = useDispatch()

  const send = (e) =>{
    // console.log(e)

    dispatch(Add(e))

  }

  console.log(data);
  return (
    <div className="container">
      <h2>Tshirt</h2>
      <div className="grid">
      {data.map((val, id) => {
        return (
          <div className="card" key={val.id}>
            <div className="title">
              <h4>{val.pname}</h4>
              <h6>{val.pquality}</h6>
            </div>
            <div className="img">
              <img
                src={val.imgdata}
                alt=""
              />
            </div>
            <div className="price">
              <h5>
                <del>₹{val.price +200}</del>₹{val.price}
              </h5>
            </div>
            <div className="button">
              <button onClick={()=>send(val)}>AddToCart</button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Cards;
