import React from "react";
import Slider from "react-slick";

const Carousel = ({ items }) => {
    const settings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite scroll
        speed: 500, // Transition speed in ms
        slidesToShow: 1, // Number of items to show
        slidesToScroll: 1, // Number of items to scroll at a time
        autoplay: true, // Auto-play the carousel
        autoplaySpeed: 3000, // Delay between slides in ms
        responsive: [
            {
                breakpoint: 1024, // Breakpoint for tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // Breakpoint for mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const getStars = (rating) => {
        switch (rating) {
            case 5:
                return <h3 className="text-xs">⭐⭐⭐⭐⭐</h3>;
            case 4:
                return <h3 className="text-xs">⭐⭐⭐⭐</h3>;
            case 3:
                return <h3 className="text-xs">⭐⭐⭐</h3>;
            case 2:
                return <h3>⭐⭐</h3>;
            case 1:
                return <h3>⭐</h3>;
            default:
                return <h3>No Rating</h3>;
        }
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white shadow-lg h-44 p-6">
                            <div>
                            <div className="flex justify-start gap-2 items-start">
                                <div className="w-7 h-7 rounded-full border-2 border-zinc-600 flex justify-center items-center text-xs font-bold shadow-xl ">{item.name[0]}</div>
                                <h3 className="text-sm font-normal">{item.name}</h3>
                            </div>
                                <div className="flex text-xs gap-2 font-semibold w-full text-end text-zinc-500">
                                    <div>{item.name.slice(0, 4) + "_User"}</div>
                                    <div>{item.date}</div>
                                </div>

                            </div>
                            

                            <div className="mt-2">
                            {
                                
                                getStars(item.rating,'sm')
                            }

                            </div>
                            <p className="text-sm text-gray-500">{item.content.length > 150 ? `${item.content.slice(0, 150)}...` : item.content}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
