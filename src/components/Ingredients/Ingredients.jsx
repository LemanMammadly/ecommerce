import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Ingredients.css";

const Ingredients = () => {
  const [gingers, setGinger] = useState("none");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
        setGinger("none");
        document.querySelector(".ginger").style.display = "none";
        document.getElementById("openText").style.transform = "rotate(0deg)";
        document.getElementById("openText").style.backgroundColor = "#007367";
        document.getElementById("openText").style.color = "#fff";
    }
  }

  const clickGinger = () => {
    if (gingers === "none") {
      setGinger("block");
      document.getElementById("openText").style.transform = "rotate(45deg)";
      document.getElementById("openText").style.transition = ".3s ease-in-out";
      document.getElementById("openText").style.backgroundColor = "#fff";
      document.getElementById("openText").style.color = "#007367";
    } else {
      setGinger("none");
      document.getElementById("openText").style.transform = "rotate(0deg)";
      document.getElementById("openText").style.backgroundColor = "#007367";
      document.getElementById("openText").style.color = "#fff";
    }
  };


  return (
    <section className="ingredients">
      <div className="all col-lg-12 d-flex">
        <div className="leftingredients col-lg-5" >
          <h2>Because ingredients matter.</h2>
          <p>
            All of our products are baked with better-for-you, allergy-friendly
            ingredients like buckwheat, cassava, oats, and cinnamon so those
            with allergies and without can enjoy and share with confidence.
          </p>
          <Link to="/">LEARN MORE ABOUT OUR INGREDIENTS</Link>
        </div>
        <div className="rightingredients col-lg-7">
          <div ref={refOne}  className="imgdiv imgbox1">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-ginger_f08ff2d2-b048-47de-85cc-f427b88c2984.png?v=1640590204"
              alt=""
            />
            <i onClick={clickGinger} id="openText" className="fa-solid fa-plus"></i>
            <div
              id="gingersdiv"
              className={`ginger text-center ${gingers}`}
            >
              <h5>Ginger</h5>
              <p>
                A commonly used herbal medicine, ginger’s bioactive compound
                gingerol is known for its anti-inflammatory and antioxidant
                effects.
              </p>
            </div>
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-vanilla_21d36f6a-863f-42cd-96b7-0a0b2c0c9125.png?v=1642486572"
              alt=""
            />
            <i id="openText" className="fa-solid fa-plus"></i>
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-oats_240x_bf7129c1-26c5-4357-9778-53db870d9308.png?v=1640667412"
              alt=""
            />
            <i id="openText" className="fa-solid fa-plus"></i>
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Flax_240x_aff2738b-af33-4ee1-99de-f47adb1bc9b8.png?v=1640667941"
              alt=""
            />
            <i id="openText" className="fa-solid fa-plus"></i>
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/rosemary_c8ac195c-64d6-4964-987d-abf6337bd71c.png?v=1642487662"
              alt=""
            />
            <i id="openText" className="fa-solid fa-plus"></i>
          </div>
          <div className="imgdiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-cinammon_240x_4e7dcc87-d964-487d-8697-69dafed1e5ca.png?v=1640667337"
              alt=""
            />
            <i id="openText" className="fa-solid fa-plus"></i>
          </div>
          <div className="text-divs">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;



