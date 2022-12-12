import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div style={{
        border:'1px solid transparent'
    }}>
      <Carousel {...settings}>
        <Wrap>
            <a>
                <img src="/images/slider-badging.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-scale.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-badag.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-scales.jpg" alt="" />
            </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
    margin-top:20px;
    & > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size:10px;
            color:rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow:initial;
    }

    .slick-prev{
        left:-75px;
    }
    .slick-next{
        right:-75px;
    }
`
const Wrap = styled.div`
    border-radius:4px;
    cursor:pointer;
    position:relative;

    a {
        border-radius:4px;
    }
`
export default ImageSlider;
