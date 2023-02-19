import React from "react";
import { Link } from "react-router-dom";
import "./BestSellers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



const BestSellers = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 2,
          },
          700: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      };
  return (
    <section className="bestsellers">
      <div className="all">
        <div className="top d-flex align-items-center  col-lg-12">
          <div className="topleft col-lg-6 col-11">
            <h2>Shop Our Bestsellers</h2>
          </div>
          <div className="topright col-lg-6 text-right">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div class="item bottom">
            <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1500x.png?v=1646839332"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>Crunchy Chocolate Chip Cookies</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.4</span>
              </div>
              <p className="price">From $16.99</p>
            </div>
          </div>
            </div>
            <div class="item bottom">
            <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/All_variety_bigcanvas_3000x3000_7de3a80a-4c5f-4a50-a62d-52fce2f06543_1500x.png?v=1648499779"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>All the Cookies! Family Pack(8 Boxes)</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.8</span>
              </div>
              <p className="price">$43.99</p>
            </div>
          </div>
            </div>
            <div class="item bottom">
            <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyVariety_stacked_1_1500x.png?v=1648219431"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>Crunchy Variety Pack</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star green"></i>
                <span>4.8</span>
              </div>
              <p className="price">From $22.49</p>
            </div>
          </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="bottom normbottom d-flex align-items-center  col-lg-12">
          <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1500x.png?v=1646839332"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>Crunchy Chocolate Chip Cookies</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.4</span>
              </div>
              <p className="price">From $16.99</p>
            </div>
          </div>
          <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/All_variety_bigcanvas_3000x3000_7de3a80a-4c5f-4a50-a62d-52fce2f06543_1500x.png?v=1648499779"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>All the Cookies! Family Pack(8 Boxes)</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>4.8</span>
              </div>
              <p className="price">$43.99</p>
            </div>
          </div>
          <div className="bottombox col-lg-4 col-12">
            <div className="bottomtop">
              <img
                className="img-fluid"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyVariety_stacked_1_1500x.png?v=1648219431"
                alt=""
              />
            </div>
            <div className="best">
              <span>
                BEST <br /> SELLER
              </span>
            </div>
            <div className="quickadd">
              <Link to="/">
                <button>QUICK ADD</button>
              </Link>
            </div>
            <div className="bottombottom text-center">
              <p>Crunchy Variety Pack</p>
              <div className="icondiv">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star green"></i>
                <span>4.8</span>
              </div>
              <p className="price">From $22.49</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
