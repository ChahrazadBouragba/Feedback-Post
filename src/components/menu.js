import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import pizza from '../img/menu/build-pizza.png'
import burger from '../img/menu/burger.png'
import fries from '../img/menu/fries.png'
import img from '../img/hero/plate-transformed.png'
import italianopizza from '../img/menu/italiano-pizza.png'
import lemonade from '../img/menu/lemonade.png'
import beefroll from '../img/menu/beefrol.png'
import stuffedpizza from '../img/menu/stuffed-pizza.png'
import milkshake from '../img/menu/milkshake.png'
import sandwiches from '../img/menu/sandwiches.png'
import spagheti from '../img/menu/spagheti.png'

import strawberryshake from '../img/menu/strawberry-shake.png'
import bigburger from '../img/menu/big-burger.png'
import chocoCake from '../img/menu/choco-cake.png'
import dishBurger from '../img/menu/dish-bg.png'
import meat from '../img/menu/meat.png'
import pizzaSummer from '../img/menu/pizza-summer.png'


export default class Menu extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slide--container">
        <h2 className="menu-general-title"> Popular Menus </h2>
        <Slider {...settings}>
          <div className="menu-div">
            <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$9.99</p>
                </div>
            <img className="menu--img" src={pizza}></img>
            </div>
          </div>





          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={bigburger}></img>
            </div>
          </div>

          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={chocoCake}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={dishBurger}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={meat}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={pizzaSummer}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={fries}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={burger}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu--img" src={italianopizza}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu--img" src={img}></img>
            </div>
          </div>

          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">14.00</p>
                </div>
            <img className="menu-img" src={sandwiches}></img>
            </div>
          </div>

 
        </Slider>
      </div>
    );
  }
}