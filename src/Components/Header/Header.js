import React from "react";
import { useState } from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {

  const getdata = useSelector((state)=> state.performtask.carts)

  console.log(getdata)



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="cont">
        <div className="logo">
          <h1>Bhavik</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="icon">
        <Badge
          badgeContent={getdata.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </Badge>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >

        {
          getdata.length ?
           <div className="cartdetails">
            <div className="left1">
              <p>Your cart</p>
              <h6>photos</h6>
            </div>
            <div className="body">
              {
                getdata.map((val,id)=>{
                  return(
                    <div className="chcpage" key={val.id}>
                      <div className="img">
                    <NavLink to={`/cart/${val.id}`}> 
                     <img src={val.imgdata} alt="" style={{width:"5rem",height:"5rem"}} />
                    </NavLink>
                      </div>
                      <div className="text">
                        <p>{val.pname}</p>
                        <p>₹Price :{val.price}</p>
                        <p>Quantity :{val.qnty}</p>


                      </div>
                      <div className="icon">
                      <p><i className="fas fa-trash"></i></p>

                      </div>

                      </div>
                      
                  )
                })
              }
            </div>

          </div> :
          <div className="cartdetails">
          <div className="flexcont">
            <p>No items in cart</p>
            <i className="fas fa-close" onClick={handleClose}></i>
          </div>

          <img
            src="https://tse2.mm.bing.net/th?id=OIP.eUSVoabMqQhdjIrpfspHvgHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>

        }
        
      </Menu>
    </div>
  );
};

export default Header;
