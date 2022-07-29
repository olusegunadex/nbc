import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { ListingSlider2 } from "../src/sliderProps";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index2 = () => {
  return (
    <Layout header={2}>
      {/*====== Start Hero Section ======*/}
      <section className='hero-area'>
        <div
          className='hero-wrapper-two bg_cover'
          style={{ backgroundImage: "url(assets/images/hero/hero-2-bg.png)" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='hero-content'>
                  <h1 className='wow fadeInUp' data-wow-delay='30ms'>
                    Nigerian Business Abroad
                  </h1>
                  <h3 className='wow fadeInDown' data-wow-delay='50ms'>
                    Promoting Nigerian Owned Businesses in the Diaspora
                  </h3>
                  <div
                    className='hero-search-wrapper wow fadeInUp'
                    data-wow-delay='70ms'>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                          <div className='form_group'>
                            <input
                              type='search'
                              className='form_control'
                              placeholder='Search By Category'
                              name='search'
                              required=''
                            />
                            <i className='ti-ink-pen' />
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                          <div className='form_group'>
                            <select className='wide'>
                              <option value='01'>Beauty & Fashion</option>
                              <option value='02'>Art & culture</option>
                              <option value='03'>Real Estate</option>
                              <option value='04'>Restaurant</option>
                              <option value='05'>Financial Services</option>
                              <option value='06'>Education</option>
                              <option value='07'>Health</option>
                              <option value='08'>Events</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                          <div className='form_group'>
                            <input
                              type='text'
                              className='form_control'
                              placeholder='Location'
                              name='location'
                              required=''
                            />
                            <i className='ti-location-pin' />
                          </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-12'>
                          <div className='form_group'>
                            <button className='main-btn icon-btn'>
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className='tags'>
                    <span>Popular tags:</span>
                    <a href='#'>Photography</a>,<a href='#'>Education</a>,
                    <a href='#'>Games</a>,<a href='#'>Music</a>,
                    <a href='#'>Restaurant</a>,<a href='#'>Shipping</a>,
                    <a href='#'>Education</a>,<a href='#'>Shopping</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/* <!--====== Start Place Section ======--> */}
      <section className='place-area pt-115'>
        <div className='container-fluid place-container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>
                  Check out businesses closest to you
                </span>
                <h2>Explore By Location</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className='place-slider-one wow fadeInDown'>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/canada.png' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Canada</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/usa.png' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>USA</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img
                  src='assets/images/place/united-kingdom.png'
                  alt='Place Image'
                />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>United Kingdom</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img src='assets/images/place/uae.png' alt='Place Image' />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>UAE</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-item place-item-one'>
              <div className='place-thumbnail'>
                <img
                  src='assets/images/place/australia.png'
                  alt='Place Image'
                />
                <div className='place-overlay'>
                  <div className='place-content text-center'>
                    <span className='listing'>10 Listing</span>
                    <h3 className='title'>Australia</h3>
                    <Link href='/listing-grid'>
                      <a className='arrow-btn'>
                        <i className='ti-arrow-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Place Section ======--> */}
      {/*====== Start category Section ======*/}
      <section className='category-area pt-110 pb-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-60 wow fadeInUp'>
                <span className='sub-title'>Browse businesses by category</span>
                <h2>Business Categories</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.2s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/beauty.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-government' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Beauty & Fashion</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.25s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/food.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-serving-dish' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Food & Restaurants</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.30s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/real-estate.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-gift-box' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Real Estate</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.35s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/health.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-dumbbell' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Health & Fitness</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.40s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/events.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-game-controller' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Events</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.45s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/education.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-suitcase' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Education</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.50s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/finance.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-shopping' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Financial Services</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div
                className='category-item category-item-two mb-25 wow fadeInUp'
                data-wow-delay='.55s'>
                <div className='category-img'>
                  <img
                    src='assets/images/category/art.png'
                    alt='Category Image'
                  />
                  <div className='category-overlay'>
                    <div className='category-content'>
                      <Link href='/index-2'>
                        <a>
                          <i className='ti-link' />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <i className='flaticon-color-palette' />
                  </div>
                  <h3 className='title'>
                    <a href='#'>Art & Culture</a>
                  </h3>
                  <span className='listing'>15 Listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End category Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className='newsletter-area'>
        <div
          className='newsletter-wrapper newsletter-wrapper-two bg_cover pt-75'
          style={{
            backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
          }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='newsletter-content-box-one wow fadeInLeft'>
                  <div className='icon'>
                    <i className='flaticon-email' />
                  </div>
                  <div className='content'>
                    <h2>Get daily offers</h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='newsletter-form wow fadeInRight'>
                  <div className='form_group'>
                    <input
                      type='email'
                      className='form_control'
                      placeholder='Enter Address'
                      name='email'
                      required=''
                    />
                    <i className='ti-location-pin' />
                    <button className='main-btn icon-btn'>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}

      {/* <!--====== Start Featured Businesses Listing Section ======--> */}
      <section className='listing-grid-area pt-115 pb-75'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center mb-75 wow fadeInUp'>
                <span className='sub-title'>
                  Browse through a collection of amazing businesses in our
                  directory
                </span>
                <h2>Featured Businesses</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='10ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/naijafarmers.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>NEW</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-chef'></i>
                      </div>
                      <div className='title'>
                        <h6>Restaurant</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>Naija Farmers</a>
                    </Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='20ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/benz.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-government'></i>
                      </div>
                      <div className='title'>
                        <h6>Museums</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>Crown Peace Autos</a>
                    </Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='30ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/model.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Fitness</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-dumbbell'></i>
                      </div>
                      <div className='title'>
                        <h6>Fitness</h6>
                      </div>
                    </div>
                    <span className='status st-close'>Close</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>Diwai Store</a>
                    </Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='40ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/diner.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-suitcase'></i>
                      </div>
                      <div className='title'>
                        <h6>Job & Feed</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>Fabrics by Tholu</a>
                    </Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='50ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/diner.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-shopping'></i>
                      </div>
                      <div className='title'>
                        <h6>Central Plaza</h6>
                      </div>
                    </div>
                    <span className='status st-close'>Close</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>
                      <a>Bashbop</a>
                    </Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div
                className='listing-item listing-grid-one mb-45 wow fadeInUp'
                dta-wow-delay='60ms'>
                <div className='listing-thumbnail'>
                  <img
                    src='assets/images/listing/malemodel.png'
                    alt='Listing Image'
                  />
                  <span className='featured-btn'>Featured</span>
                  <div className='thumbnail-meta d-flex justify-content-between align-items-center'>
                    <div className='meta-icon-title d-flex align-items-center'>
                      <div className='icon'>
                        <i className='flaticon-color-palette'></i>
                      </div>
                      <div className='title'>
                        <h6>Art Gallery</h6>
                      </div>
                    </div>
                    <span className='status st-open'>Open</span>
                  </div>
                </div>
                <div className='listing-content'>
                  <h3 className='title'>
                    <Link href='/listing-details-1'>Art Crust</Link>
                  </h3>
                  <div className='ratings'>
                    <ul className='ratings ratings-three'>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li className='star'>
                        <i className='flaticon-star-1'></i>
                      </li>
                      <li>
                        <span>
                          <a href='#'>(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className='price'>$05.00 - $80.00</span>
                  <span className='phone-meta'>
                    <i className='ti-tablet'></i>
                    <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                  </span>
                  <div className='listing-meta'>
                    <ul>
                      <li>
                        <span>
                          <i className='ti-location-pin'></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className='ti-heart'></i>
                          <a href='#'>Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Listing Section ======--> */}

      {/*====== Start offer Section ======*/}
      <section className='cta-area'>
        <div
          className='cta-wrapper-two bg_cover'
          style={{ backgroundImage: "url(assets/images/bg/africta.png)" }}>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-7'>
                <div className='company-name wow fadeInLeft'>NBC</div>
              </div>
              <div className='col-lg-5'>
                <div className='cta-content-box fadeInRight'>
                  <h2>Visit the Best Places</h2>
                  <p>
                    Putting up your business on NBC is fast and easy! Wish to
                    feature your business too?
                    Get seen today.
                  </p>
                  <Link href='/listing-grid'>
                    <a className='main-btn icon-btn'>Get Started Now!</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End offer Section ======*/}
      {/*====== Start Listing Section ======*/}
      <section className='listing-grid-area pt-110'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title section-title-two text-center mb-55 wow fadeInUp'>
                <h2>
                  <span className='line'>Latest</span> Destination
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...ListingSlider2}
          className='listing-slider-two wow fadeInDown'>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img src='assets/images/listing/barber.png' alt='Listing Image' />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img src='assets/images/listing/chef.png' alt='Listing Image' />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-6'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img
                src='assets/images/listing/fashiondesigner.png'
                alt='Listing Image'
              />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img src='assets/images/listing/diner.png' alt='Listing Image' />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img
                src='assets/images/listing/hairdresser.png'
                alt='Listing Image'
              />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img
                src='assets/images/listing/malemodel.png'
                alt='Listing Image'
              />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='listing-item listing-grid-item-two'>
            <div className='listing-thumbnail'>
              <img
                src='assets/images/listing/horseart.png'
                alt='Listing Image'
              />
              <a href='#' className='cat-btn'>
                <i className='flaticon-chef' />
              </a>
              <span className='featured-btn'>Featured</span>
              <ul className='ratings ratings-three'>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li className='star'>
                  <i className='flaticon-star-1' />
                </li>
                <li>
                  <span>
                    <a href='#'>(02 Reviews)</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className='listing-content'>
              <h3 className='title'>
                <Link href='/listing-details-1'>
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className='phone-meta'>
                <i className='ti-tablet' />
                <a href='tel:+982653652-05'>+98 (265) 3652 - 05</a>
                <span className='status open'>Open</span>
              </span>
              <div className='listing-meta'>
                <ul>
                  <li>
                    <span>
                      <i className='ti-location-pin' />
                      California, USA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='ti-heart' />
                      <a href='#'>Save</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Listing Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className='pricing-area pt-70 pb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title section-title-two text-center mb-60 wow fadeInUp'>
                <h2>
                  <span className='line'>Affordable</span> Package
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='pricing-item pricing-item-one text-center mb-40 wow fadeInUp'>
                <div className='pricing-inner-time'>
                  <div className='pricing-head'>
                    <span className='title'>General</span>
                    <h2 className='price'>25.00</h2>
                  </div>
                  <div className='pricing-body'>
                    <ul className='list'>
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href='/pricing'>
                      <a className='main-btn icon-btn'>Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='pricing-item pricing-item-one text-center mb-40 wow fadeInDown'>
                <div className='pricing-inner-time'>
                  <div className='pricing-head'>
                    <span className='title'>General</span>
                    <h2 className='price'>35.00</h2>
                  </div>
                  <div className='pricing-body'>
                    <ul className='list'>
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href='/pricing'>
                      <a className='main-btn icon-btn'>Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='pricing-item pricing-item-one text-center mb-40 wow fadeInUp'>
                <div className='pricing-inner-time'>
                  <div className='pricing-head'>
                    <span className='title'>General</span>
                    <h2 className='price'>45.00</h2>
                  </div>
                  <div className='pricing-body'>
                    <ul className='list'>
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href='/pricing'>
                      <a className='main-btn icon-btn'>Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
    </Layout>
  );
};
export default Index2;
