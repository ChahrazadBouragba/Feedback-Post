import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import customer1 from '../img/reviews/customer1.jpg'
import customer2 from '../img/reviews/cusomer2.jpg'
import customer3 from '../img/reviews/customer3.jpg'


export default class Review extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="review-section">

        <Slider {...settings} className="review-wrapper">
        <div className="review-div">
            <div className="review-extraDiv">
  
                
                <div className="review-content">
                    <blockquote>

                    Adipiscing venenatis feugiat porta eu praesent ad cubilia suscipit quis. Ultrices morbi vehicula aptent est nec. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse.				
                    <footer>
                        <cite>
                            Teddy Roosevelt
                        </cite>
                    </footer>
                    </blockquote>

                </div>

                    <img src={customer2} className="customer-img"></img>
            </div>
        </div>

        <div className="review-div">
            <div className="review-extraDiv">
  
                
                <div className="review-content">
                    <blockquote>

                    Adipiscing venenatis feugiat porta eu praesent ad cubilia suscipit quis. Ultrices morbi vehicula aptent est nec. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse.					
                    <footer>
                        <cite>
                            Teddy Roosevelt
                        </cite>
                    </footer>
                    </blockquote>

                </div>

                    <img src={customer1} className="customer-img"></img>
            </div>
        </div>

        <div className="review-div">
            <div className="review-extraDiv">
  
                
                <div className="review-content">
                    <blockquote>

                    Adipiscing venenatis feugiat porta eu praesent ad cubilia suscipit quis. Ultrices morbi vehicula aptent est nec. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse. Porta ac auctor himenaeos tempus curabitur ante neque ultrices facilisi habitasse.		
                    <footer>
                        <cite>
                            Teddy Roosevelt
                        </cite>
                    </footer>
                    </blockquote>

                </div>

                    <img src={customer3} className="customer-img"></img>
            </div>
        </div>
        </Slider>
      </div>
    );
  }
}