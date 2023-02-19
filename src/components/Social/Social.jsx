import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";

const Social = () => {
  return (
    <section className="social">
      <div className="all">
        <div className="topsocial d-flex">
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screen_Shot_2023-01-29_at_8.15.31_PM.png?v=1675041355"
              alt=""
            />
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screenshot_29.png?v=1668705904"
              alt=""
            />
          </div>
          <div className="imgdiv">
            <img
              className="img3"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Screen_Shot_2023-01-29_at_8.12.16_PM.png?v=1675041282"
              alt=""
            />
          </div>
        </div>
        <div className="bottomsocial">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494 123"><path fill="currentColor" d="M331 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path fill="currentColor" d="M406 123a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path fill="currentColor" d="M63 41a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path fill="currentColor" d="M486 57a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path fill="currentColor" d="M8 100a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path> </svg>
            <Link target={"_blank"} to="https://www.instagram.com/partakefoods/">@PartakeFoods</Link>
            <div className="followus">FOLLOW US ON INSTAGRAM</div>
        </div>
      </div>
    </section>
  );
};

export default Social;
