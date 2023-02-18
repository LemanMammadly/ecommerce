import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Ingredients.css";

const Ingredients = () => {
  const [gingers, setGinger] = useState("none");
  const [vanillas,setVanillas]=useState('none')
  const [oats,setOats]=useState('none')
  const [flax,setFlax]=useState('none')
  const [roses,setRose]=useState('none')
  const [cinnamons,setCinnamon]=useState('none')
  const [icon1,setIcon1]=useState("openTextnone")
  const [icon2,setIcon2]=useState("openTextnone")
  const [icon3,setIcon3]=useState("openTextnone")
  const [icon4,setIcon4]=useState("openTextnone")
  const [icon5,setIcon5]=useState("openTextnone")
  const [icon6,setIcon6]=useState("openTextnone")


  useEffect(() => {
    document.addEventListener("click", handleClickOutside1, true);
  }, []);

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside2, true);
  },[])

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside3, true);
  },[])

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside4, true);
  },[])

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside5, true);
  },[])

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside6, true);
  },[])

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);


  const handleClickOutside1 = (e) => {
    if (!refOne.current.contains(e.target)) {
      setGinger("none");
      setIcon1("openTextnone")
    }
  }

  const handleClickOutside2 = (e) => {
    if (!refTwo.current.contains(e.target)) {
        setVanillas("none");
        setIcon2("openTextnone")
    }
  }

  const handleClickOutside3 = (e) => {
    if (!refThree.current.contains(e.target)) {
        setOats("none");
        setIcon3("openTextnone")
    }
  }

  const handleClickOutside4 = (e) => {
    if (!refFour.current.contains(e.target)) {
        setFlax("none");
        setIcon4("openTextnone")
    }
  }

  const handleClickOutside5 = (e) => {
    if (!refFive.current.contains(e.target)) {
        setRose("none");
        setIcon5("openTextnone")
    }
  }

  const handleClickOutside6 = (e) => {
    if (!refSix.current.contains(e.target)) {
        setCinnamon("none");
        setIcon6("openTextnone")
    }
  }



  const clickGinger = () => {
    if (gingers === "none") {
      setGinger("block");
      setIcon1("openTextblock")
    } else {
      setGinger("none");
      setIcon1("openTextnone")
    }
  };

  const clickVanilla = () => {
    if (vanillas === "none") {
      setVanillas("block");
      setIcon2("openTextblock")
    } else {
      setVanillas("none");
      setIcon2("openTextnone")
    }
  };

  const clickOat = () => {
    if (oats === "none") {
      setOats("block");
      setIcon3("openTextblock")
    } else {
      setOats("none");
      setIcon3("openTextnone")
    }
  };

  const clickFlax = () => {
    if (flax === "none") {
      setFlax("block");
      setIcon4("openTextblock")
    } else {
      setFlax("none");
      setIcon4("openTextnone")
    }
  };

  const clickRose = () => {
    if (roses === "none") {
      setRose("block");
      setIcon5("openTextblock")
    } else {
      setRose("none");
      setIcon5("openTextnone")
    }
  };

  const clickCinnamon = () => {
    if (cinnamons === "none") {
      setCinnamon("block");
      setIcon6("openTextblock")
    } else {
      setCinnamon("none");
      setIcon6("openTextnone")
    }
  };

  return (
    <section className="ingredients">
      <div className="all col-lg-12 col-12 d-flex">
        <div className="leftingredients col-lg-5 col-12" >
          <h2>Because ingredients matter.</h2>
          <p>
            All of our products are baked with better-for-you, allergy-friendly
            ingredients like buckwheat, cassava, oats, and cinnamon so those
            with allergies and without can enjoy and share with confidence.
          </p>
          <Link to="/">LEARN MORE ABOUT OUR INGREDIENTS</Link>
        </div>
        <div className="rightingredients col-lg-7 col-12">
          <div ref={refOne}  className="imgdiv imgbox1" onClick={clickGinger} >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-ginger_f08ff2d2-b048-47de-85cc-f427b88c2984.png?v=1640590204"
              alt=""
            />
            <i id="openText1" className={`fa-solid fa-plus openText ${icon1}`}></i>
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
          <div ref={refTwo} className="imgdiv imgbox2" onClick={clickVanilla} >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-vanilla_21d36f6a-863f-42cd-96b7-0a0b2c0c9125.png?v=1642486572"
              alt=""
            />
            <i id="openText2" className={`fa-solid fa-plus openText ${icon2}`}></i>
            <div
              id="vanillasdiv"
              className={`vanilla text-center ${vanillas}`}
            >
              <h5>Vanilla</h5>
              <p>
              The vanilla bean is known for its fragrance and flavor, but it is also used to make medicine.
              </p>
            </div>
          </div>
          <div ref={refThree} className="imgdiv imgbox3" onClick={clickOat}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-oats_240x_bf7129c1-26c5-4357-9778-53db870d9308.png?v=1640667412"
              alt=""
            />
            <i id="openText3" className={`fa-solid fa-plus openText ${icon3}`}></i>
            <div
              id="oatsdiv"
              className={`oat text-center ${oats}`}
            >
              <h5>Quick Rolled Oats</h5>
              <p>
              Sustainably grown and harvested from non-GMO seed.
              </p>
            </div>
          </div>
          <div ref={refFour} className="imgdiv imgbox4" onClick={clickFlax}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Flax_240x_aff2738b-af33-4ee1-99de-f47adb1bc9b8.png?v=1640667941"
              alt=""
            />
            <i id="openText4" className={`fa-solid fa-plus openText ${icon4}`}></i>
            <div
              id="flaxsdiv"
              className={`flax text-center ${flax}`}
            >
              <h5>Flax</h5>
              <p>
              These mighty seeds are packed with numerous nutrients, omega-3 fatty acids and fiber.
              </p>
            </div>
          </div>
          <div ref={refFive} className="imgdiv imgbox5" onClick={clickRose}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/rosemary_c8ac195c-64d6-4964-987d-abf6337bd71c.png?v=1642487662"
              alt=""
            />
            <i id="openText5" className={`fa-solid fa-plus openText ${icon5}`}></i>
            <div
              id="rosesdiv"
              className={`rose text-center ${roses}`}
            >
              <h5>Rosemary</h5>
              <p>
              With a very distinct flavor, rosemary is full of antioxidants and anti-inflammatory compounds.
              </p>
            </div>
          </div>
          <div ref={refSix} className="imgdiv imgbox6" onClick={clickCinnamon}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-cinammon_240x_4e7dcc87-d964-487d-8697-69dafed1e5ca.png?v=1640667337"
              alt=""
            />
            <i id="openText6" className={`fa-solid fa-plus openText ${icon6}`}></i>
            <div
              id="cinnamon"
              className={`cinnamon text-center ${cinnamons}`}
            >
              <h5>Cinnamon</h5>
              <p>
              Traced back to Ancient Egypt, Cinnamon has been used for thousands of years as medicine and is now the 2nd most commonly used spice in the U.S.
              </p>
            </div>
          </div>
          <div className="text-divs">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;



