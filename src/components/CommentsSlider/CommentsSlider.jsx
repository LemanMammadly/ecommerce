import React from "react";
import "./CommentsSlider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { RiDoubleQuotesL } from 'react-icons/ri';

const CommentsSlider = () => {
  return (
    <section className="commentsSlider">
      <div className="all d-flex align-items-center justify-content-center">
        <div className="leftcomment col-lg-5 col-11 text-center">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w"
            alt=""
          />
        </div>
        <div className="rightcomment col-lg-5 col-11 text-center">
        <div className="icon"><RiDoubleQuotesL/></div>
          <OwlCarousel items={1} className="owl-theme" autoplay={true} smartSpeed={1000} loop margin={8}>
            <div>
              <p>
                My son has a severe allergy to eggs. Finding treats and desserts
                that actually taste good is a challenge. He loves the Partake
                cookies. Bad news for him… the whole family does too! <br />
                <br />— RANDI G
              </p>
            </div>

            <div>
              <p>
                Finally able to eat cookies with a nut allergy! My niece always
                gets left out on the “good” treats! When my husband and I
                realized what all the harmful stuff was NOT in these cookies we
                stopped eating them immediately so that they could be saved for
                our niece! I then ordered 6 more boxes so that everyone around
                her could enjoy them together! We will be ordering more!!!
                <br />
                <br />— Catherine S
              </p>
            </div>

            <div>
              <p>
                A Great Crunchy When You Feel Munchy! Healthy and heavenly.
                Finally a tasty treat for all of us who are allergic! Good for
                me and good for the planet. <br /> <br />— Ms. G
              </p>
            </div>

            <div>
              <p>
                The best cookies! I ate one whole box in one sitting! They are
                just so dang good! <br /> <br />— Kristin L
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default CommentsSlider;
