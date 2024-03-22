import React from 'react'
import banner1 from '../assets/img/banner-1.webp'
import banner2 from '../assets/img/banner-2.webp'
import banner3 from '../assets/img/banner-3.webp'
import banner4 from '../assets/img/banner-4.webp'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const testimonials = [
    {
        id: 1,
        content: "I'm a signmaker and could not afford to create the flags myself, for what they sell them for. I uploaded incomplete artwork without checking the preview. My fault, But their customer sevice team reached out qucikly, validated my concern and offered a great solution even though they aren't responsible. A lot of corporate websites with tell you There is nothing they can do, just reorder at full price",
        author: "Jesse T.",
        date: "05 Mar 2024",
        initials: "JT",
    },
    {
        id: 2,
        content: "I'm a signmaker and could not afford to create the flags myself, for what they sell them for. I uploaded incomplete artwork without checking the preview. My fault, But their customer sevice team reached out qucikly, validated my concern and offered a great solution even though they aren't responsible. A lot of corporate websites with tell you There is nothing they can do, just reorder at full price",
        author: "Jesse T.",
        date: "05 Mar 2024",
        initials: "JT",
    },
    {
        id: 3,
        content: "I'm a signmaker and could not afford to create the flags myself, for what they sell them for. I uploaded incomplete artwork without checking the preview. My fault, But their customer sevice team reached out qucikly, validated my concern and offered a great solution even though they aren't responsible. A lot of corporate websites with tell you There is nothing they can do, just reorder at full price",
        author: "Jesse T.",
        date: "05 Mar 2024",
        initials: "JT",
    },
];
const products = [
    {
        title: 'Banners',
        startingPrice: '2.25',
        imageUrl: banner1,
        gradient: 'linear-gradient(90deg, rgb(255, 249, 218) -2.81%, rgb(237, 251, 255) 98.25%)',
    },
    {
        title: 'Backdrops',
        startingPrice: '36.20',
        imageUrl: banner2,
        gradient: 'linear-gradient(90deg, rgb(234, 251, 208) -2.81%, rgb(237, 251, 255) 98.25%)',
    },
    {
        title: 'Backdrops',
        startingPrice: '36.20',
        imageUrl: banner3,
        gradient: 'linear-gradient(90deg, rgb(239, 239, 239) -2.81%, rgb(241, 223, 248) 98.25%)',
    },
    {
        title: 'Backdrops',
        startingPrice: '36.20',
        imageUrl: banner4,
        gradient: 'linear-gradient(90deg, rgb(239, 239, 239) -2.81%, rgb(250, 230, 208) 98.25%)',
    },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

const Banner = ({ title, startingPrice, imageUrl, bgColorClass }) => {


    return (
        <div className='w-[70%] mx-auto'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 m-auto mt-3'>
                {products.map((product, index) => (
                    <div key={index} style={{ background: product.gradient }} className='h-fit xl:h-[220px] w-fit xl:w-[600px] mx-auto my-auto p-2 xl:p-6 mb-5 rounded-lg'>
                        <div className='flex md:flex-row flex-col justify-between items-center'>
                            <div>
                                <h1 className='font-bold text-2xl'>{product.title}</h1>
                                <p className='mt-2 text-lg'>Starting at <span className='font-bold'>${product.startingPrice}</span></p>
                                <button className='bg-black px-7 py-2 log rounded-lg text-white w-fit h-fit mt-4'>Explore more</button>
                            </div>
                            <div>
                                <img src={product.imageUrl} alt={product.title} className="max-h-40" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto my-6'>
                <div style={{ backgroundColor: 'rgb(255, 253, 236)', border: '2px solid rgb(243, 241, 222)' }} className='bg-yellow-50 h-fit  border-2 border-yellow-200 p-8 w-full rounded-lg mx-auto shadow-md'>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Reviews & Ratings</h2>
                    <div style={{ backgroundColor: 'rgb(255, 242, 205)' }} className='flex xl:flex-row flex-col xl:rounded-full p-4 mb-4 xl:justify-start justify-center'>
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center font-bold">
                            <span className="font-bold text-black text-2xl font bold">YOT <br />PO.</span>
                        </div>
                        <div className='xl:flex flex-row justify-around mr-20 items-center'>
                            <div className="flex-col items-start mx-4">
                                <div>
                                    <span className="text-3xl font-bold">71534</span>
                                </div>
                                <div>
                                    <span>Customer Reviews</span>
                                </div>
                            </div>
                            <div className="flex-col items-center mx-auto">
                                <div className='flex items-center'>
                                    <span className="text-3xl font-bold text-yellow-500">4.5</span>
                                    <div className="flex text-yellow-500 text-xl">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalfAlt />
                                    </div>
                                </div>
                                <div>
                                    <span>Overall Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-auto my-6 items-start xl:items-center">
                        <div className="flex text-center mx-auto items-center">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-green-400 text-green-400 flex mt-2 items-center justify-center font-bold">
                                100%
                            </div>
                            <div>
                                <span>Customer <br />Support</span>
                            </div>
                        </div>
                        <div className="flex text-center mx-auto items-center">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-green-400 text-green-400 mt-2 flex items-center justify-center font-bold">
                                95%
                            </div>
                            <div>
                                <span>Customers<br />Recommend</span>
                            </div>
                        </div>
                        <div className="flex text-center mx-auto items-center">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-green-400 text-green-400 mt-2 flex items-center justify-center font-bold">
                                100%
                            </div>
                            <div>
                                <span>Repeat<br />Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 border-gray-200 h-fit border-2 rounded-lg p-8 shadow-md w-full'>
                    <h2 className="text-2xl font-semibold  text-center">Our customers speak for us!</h2>
                    <div className="slider-container my-4">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="">
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center justify-center mb-7">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-lg font-semibold">{testimonial.initials}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>
                                            <div className='flex'>
                                                <div className="flex text-yellow-500">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                                <p className="text-gray-500 text-sm ml-2">{testimonial.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner