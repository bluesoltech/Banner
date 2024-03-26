import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../assets/img/banner-1.webp'
import { FaArrowRightLong } from "react-icons/fa6";

const dummyProducts = [
    { id: 1, title: 'Product One', price: '99.99', banner: banner1, link: '/product-one' },
    { id: 2, title: 'Product Two', price: '199.99', banner: banner1, link: '/product-two' },
    { id: 3, title: 'Product Three', price: '299.99', banner: banner1, link: '/product-three' },
    // Add more products as needed
];

const New_arrivals = ({ product, handleNavigate }) => {
    const [isHovered, setIsHovered] = useState(false);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <div className='my-20'>
            <div className="rounded-lg bg-[#f7f7ff] full p-5 f-fit">
                <h1 className="text-black text-3xl text-center my-2">New Arrivals</h1>
                <p className="text-xl text-gray-900 text-center mb-4">Check Out Our Latest Products</p>
                <div className="slider-container w-[70%] mx-auto">
                    <Slider {...settings}>
                        {dummyProducts.map((product) => {
                            const [isHovered, setIsHovered] = useState(false);

                            return (
                                <div
                                    key={product.id}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className={`p-4 rounded-lg transition-all duration-300 mx-auto ease-in-out cursor-pointer 
                                            ${isHovered ? 'bg-white shadow-lg' : ''}`} // Tailwind classes for hover effect
                                >
                                    <div className='mx-auto items-center justify-center my-4'>
                                        <div
                                            className={`border-2 border-gray-500 p-4 h-fit w-fit rounded-lg items-center 
                                                transition-all duration-300 ease-in-out ${isHovered ? 'border-transparent' : ''}`}
                                        >
                                            <img src={product.banner} alt={product.title} className='w-auto h-auto' />
                                        </div>
                                        <p
                                            className="text-xl text-gray-900 text-center my-3 hover:text-orange-600"
                                            onClick={() => handleNavigate(product.link)}
                                        >
                                            {product.title}
                                        </p>
                                        <p className='text-lg mt-2 text-center'>Starts at <span className='font-bold'>${product.price}</span></p>
                                        <div className={`${isHovered ? 'flex' : 'hidden'} justify-center items-center`}>
                                            <button
                                                className='bg-transparent text-orange-600 font-semibold px-4 py-2 mt-4 flex items-center justify-center rounded transition-all duration-300 ease-in-out'
                                                onClick={() => handleNavigate(product.link)}
                                            >
                                                View Details
                                                <FaArrowRightLong className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default New_arrivals