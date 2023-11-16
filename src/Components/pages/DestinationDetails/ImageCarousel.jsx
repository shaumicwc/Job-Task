import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} thumbWidth={100} axis='horizontal'>
            {
                images.map(image => <div>
                    <img  src={image} />
                </div>)
            }
        </Carousel>
    );
};

export default ImageCarousel;