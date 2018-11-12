import React, { Component } from "react";
import Slider from "react-slick";
import "../css/style.css";
import Pictures from "./Pictures";

export default class SimpleSlider extends Component {
  state = {
    image: Pictures
  };
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      autoplay: true,
      speed: 500
    };
    return (
      <div className="container-fluid">
        <h2 className="center"> Image slider </h2>
        <Slider {...settings}>
          {this.state.image.map((item, i) => {
            return (
              <div key={i}>
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  width="300px"
                  height="250px"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
