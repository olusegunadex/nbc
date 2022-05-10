import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export default class TestimoinalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          dots={false}
          arrows={false}
          autoplaySpeed={5000}
          focusOnSelect={true}
          autoplay={true}
          slidesToShow={3}
          slidesToScroll={1}
          className='testimonial-thumb-slider-one'>
          <div className='single-thumb'>
            <img
              src='assets/images/testimonial/thumb1.png'
              alt='testimonial thumb'
            />
          </div>
          <div className='single-thumb'>
            <img
              src='assets/images/testimonial/thumb2.png'
              alt='testimonial thumb'
            />
          </div>
          <div className='single-thumb'>
            <img
              src='assets/images/testimonial/thumb3.png'
              alt='testimonial thumb'
            />
          </div>
          <div className='single-thumb'>
            <img
              src='assets/images/testimonial/thumb4.png'
              alt='testimonial thumb'
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          dots={false}
          arrows={false}
          infinite={true}
          autoplaySpeed={5000}
          autoplay={true}
          fade={true}
          slidesToShow={1}
          slidesToScroll={1}
          className='testimonial-content-slider-one'>
          <div className='testimonial-item'>
            <div className='testimonial-content'>
              <p>
                This place is magical, majestic, calming store! I could spend
                hours here and still not see everything. Different crystals are
                here all the time. I've picked up some beautiful crystals here!
                So many sizes, shapes, colors, meanings!!!!{" "}
              </p>
              <div className='author-info'>
                <div className='author-title'>
                  <h4>Leke Emmanuel</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-item'>
            <div className='testimonial-content'>
              <p>
                There are also many assortments of sage and palo santo! You
                leave here feeling so calm and fulfilled! Well worth it!{" "}
              </p>
              <div className='author-info'>
                <div className='author-title'>
                  <h4>Chuks Nonso</h4>
                  <span className='position'>IT Assistant, Canada</span>
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-item'>
            <div className='testimonial-content'>
              <p>
                Your search for a jeweler should stop here. Set is, without a
                doubt, the best and most trustworthy craftsman I've ever met.{" "}
              </p>
              <div className='author-info'>
                <div className='author-title'>
                  <h4>Kabir</h4>
                  <span className='position'>
                    Educational Consultant, Ontario
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-item'>
            <div className='testimonial-content'>
              <p>
                High quality burger. I ordered the Double Classic Smash with
                fries and drink. The burger was cooked precisely so it was
                grilled throughly with a very slight pink inside so the burger
                was extremely juicy. The condiments were stacked neatly too. The
                burger cost $10 and I think it was worth the price{" "}
              </p>
              <div className='author-info'>
                <div className='author-title'>
                  <h4>Seun Olaitan</h4>
                  <span className='position'>Tax Consultant, UK</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
