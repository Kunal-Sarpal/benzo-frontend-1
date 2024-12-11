import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const renderStars = (rating) => {
        const stars = Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
        ));
        return <div className="flex text-xs">{stars}</div>;
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="p-4 ">
                        <div className="bg-white overflow-hidden border shadow-lg rounded-xl p-6 h-52 ">
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-sm font-semibold text-gray-700">
                                        {item.name[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.name.slice(0, 4) + "_User"}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400">{item.date}</p>
                            </div>

                            <div className="mb-2">
                                {renderStars(item.rating)}
                            </div>

                            <p className="text-sm text-gray-600">
                                {item.content.length > 150
                                    ? `${item.content.slice(0, 140)}...`
                                    : item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
