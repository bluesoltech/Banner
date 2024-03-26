import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import banner1 from '../assets/img/banner-1.webp'
import banner2 from '../assets/img/banner-2.webp'
import banner3 from '../assets/img/banner-3.webp'
import banner4 from '../assets/img/banner-4.webp'

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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

const products = [
    { id: 1, image: banner1, title: 'Car Flags', rating: 5, ratingCount: 6917, price: 6.99 },
    { id: 2, image: banner2, title: 'Product 2.5', rating: 4, ratingCount: 2500, price: 19.99 },
    { id: 3, image: banner3, title: 'Product 3', rating: 3, ratingCount: 1200, price: 49.99 },
    { id: 4, image: banner4, title: 'Product 3', rating: 3, ratingCount: 1200, price: 49.99 },

];
const Product = () => {
    return (
        <div className='my-20'>
            <h1 className="text-black text-3xl text-center my-8">Recently Viewed Products</h1>
            <div className="rounded-lg  bg-slate-100 full p-5 f-fit ">
                <div className="slider-container w-[70%] mx-auto">
                    <Slider {...settings}>
                        {products.map(product => (
                            <div className='mx-auto'>
                                <div key={product.id} className='border-[1px] border-gray-200 bg-white rounded-lg p-4 w-fit h-fit'>
                                    <div className='flex items-center'>
                                        <div className='border-[1px] border-gray-200 w-[150px] h-[100px] rounded-lg overflow-hidden'>
                                            <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
                                        </div>
                                        <div className='ml-4'>
                                            <p className="font-semibold text-lg">{product.title}</p>
                                            <div className="flex items-center mt-2">
                                                <div className="flex text-yellow-500">
                                                    {[...Array(product.rating)].map((_, i) => (
                                                        <FaStar key={i} />
                                                    ))}
                                                </div>
                                                <p className="text-gray-500 text-sm ml-2">{product.ratingCount.toLocaleString()}</p>
                                            </div>
                                            <p className='text-lg mt-2'>Starts at <span className='font-bold'>${product.price.toFixed(2)}</span></p>
                                            <button className='bg-transparent text-orange-600 font-bold px-4 py-2 mt-4 flex items-center justify-center rounded hover:bg-orange-600 hover:text-white transition-all duration-300 ease-in-out'>
                                                View Details
                                                <FaArrowRightLong className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Product