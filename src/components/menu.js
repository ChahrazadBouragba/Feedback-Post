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
import chocola from '../img/menu/chocola.png'
import cocaBurger from '../img/menu/coca-burger.png'
import dounts from '../img/menu/dounts2.png'
import olivePizza from '../img/menu/olive-pizza.png'
import tomatoSpagiti from '../img/menu/tomato-spagiti.png'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      speed: 2700, // value for smoother transitions
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "ease-in-out",
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
        <h2 className="menu-general-title"> Popular Menus 🔥</h2>
  
        <Slider ref={slider => (this.slider = slider)} {...settings} className="menu-wrapper">

          <div className="menu-div">
            <div className="menu-discription">
                <div>
                  <h3 className="menu--title">Pepperoni</h3>
                  <span className="menu--span">Starting</span>
                  <p className="price">$9.99</p>
                </div>
            <img className="menu--pizza" src={olivePizza}></img>
            </div>
          </div>

          <div className="menu-div">
            <div className="menu-discription">
                <div>
                <h3 className="menu--title">Elk Burger</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$23.56</p>
                </div>
            <img className="menu--br" src={dishBurger}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">sausage</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$8.00</p>
                </div>
            <img className="menu--sausage" src={sandwiches}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">French Fries</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$3.00</p>
                </div>
            <img className="menu-img" src={fries}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Hamburger</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$10.74</p>
                </div>
            <img className="menu-1br" src={burger}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Brisco</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$7.56</p>
                </div>
            <img className="menu--img" src={img}></img>
            </div>
          </div>


          <div className="menu-div">
            <div className="menu-discription">
                <div>
                <h3 className="menu--title">Meat Burger</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$9.99</p>
                </div>
                <img className="menu--brg" src={cocaBurger}></img>
            </div>
          </div>


          <div className="menu-div">
            <div className="menu-discription">
                <div>
                <h3 className="menu--title">Grill Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$8.00</p>
                </div>
            <img className="menu--grill" src={pizza}></img>
            </div>
          </div>


          <div className="menu-div">
            <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pasta</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$15.23</p>
                </div>
            <img className="menu--pasta" src={tomatoSpagiti}></img>
            </div>
          </div>



          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Cheese Burger</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$14.00</p>
                </div>
            <img className="menu-ch" src={bigburger}></img>
            </div>
          </div>

          
          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title"> Skirt Steak</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$19.23</p>
                </div>
            <img className="menu--grill" src={meat}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Olive Pizza</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$14.00</p>
                </div>
            <img className="menu--grill" src={pizzaSummer}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
          <div>
                <h3 className="menu--title">Yeast Donut</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$3.99</p>
                </div>
            <img className="menu--dounts" src={dounts}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Meringue</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$20.55</p>
                </div>
            <img className="menu--grill" src={chocoCake}></img>
            </div>
          </div>


          <div className="menu-div">
          <div className="menu-discription">
                <div>
                <h3 className="menu--title">Pachanga Grill</h3>
                <span className="menu--span">Starting</span>
                <p className="price">$7.00</p>
                </div>
            <img className="menu--choc" src={chocola}></img>
            </div>
          </div>


 
        </Slider>
        
      </div>
    );
  }
}