import { Carousel } from "react-bootstrap";
import React from "react";
import p1 from "../assets/bans/1.jpg";
import p2 from "../assets/bans/2.jpg";
import p3 from "../assets/bans/3.jpg";
import Women from "./Womens";
import Mens from "./Mens";
import Kids from "./Kids";
import Footer from "./Footer";
import Product from "./Product";

const Banner = () => {
  return (
    <div className="relative main-home w-100% bg-gray-100"> 
      {/* Carousel */}
      <Carousel className="mb-4 mt-3">
        <Carousel.Item>
          <img
            src={p1}
            className="d-block w-100 img-fluid"
            style={{
              objectFit: "contain",
              maxHeight: "85vh",
              width: "100%",
            }}
            alt="banner 1"
          />
          <Carousel.Caption>
            <h3 className="text-white bg-black/50 px-3 py-1 rounded w-90%">Kids</h3> 
            <h4 className="text-white bg-black/50 px-3 py-1 rounded">Fun Fashion for Mini Trendsetters.</h4> 
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={p2}
            className="d-block w-100 img-fluid"
            style={{
              objectFit: "contain",
              maxHeight: "85vh",
              width: "100%",
            }}
            alt="banner 2"
          />
          <Carousel.Caption>
            <h3 className="text-white bg-black/50 px-3 py-1 rounded">Mens</h3> 
            <h4 className="text-white bg-black/50 px-3 py-1 rounded">Classic Looks, Modern Feels</h4> 
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={p3}
            className="d-block w-100 img-fluid"
            style={{
              objectFit: "contain",
              maxHeight: "85vh",
              width: "100%",
            }}
            alt="banner 3"
          />
          <Carousel.Caption>
            <h3 className="text-white bg-black/50 px-3 py-1 rounded">Womens</h3> 
            <h4 className="text-white bg-black/50 px-3 py-1 rounded">Flaunt Your Femininity.</h4> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    
      <Women />
      <Mens />
      <Kids />
      <Product />
      <Footer />
    </div>
  );
};

export default Banner;
