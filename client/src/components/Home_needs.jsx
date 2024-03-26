import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/img/banner-1.webp'
import banner2 from '../assets/img/banner-2.webp'
import banner3 from '../assets/img/banner-3.webp'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import banner4 from '../assets/img/banner-4.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const sliderData = {
    Banners: [
        {
            id: 1,
            image: banner1,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner4,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '44321'
        },
    ],
    option2: [
        {
            id: 1,
            image: banner1,
            title: 'option2',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: 'option2',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: 'option2',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner1,
            title: 'option2',
            ratingCount: 10465,
            price: '44321'
        },
    ],
    option3: [
        {
            id: 1,
            image: banner1,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner4,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '44321'
        },
    ],
    Vinly_Banners: [
        {
            id: 1,
            image: banner1,
            title: ' Vinly_Banners',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: ' Vinly_Banners',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: ' Vinly_Banners',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner4,
            title: ' Vinly_Banners',
            ratingCount: 10465,
            price: '44321'
        },
    ],
    option5: [
        {
            id: 1,
            image: banner1,
            title: 'option5',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: 'option5',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: 'option5',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner4,
            title: 'option5',
            ratingCount: 10465,
            price: '44321'
        },
    ],
    option6: [
        {
            id: 1,
            image: banner1,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45841'
        },
        {
            id: 2,
            image: banner2,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45321'
        },
        {
            id: 3,
            image: banner3,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '45843'
        },
        {
            id: 4,
            image: banner4,
            title: 'Backlit Banners',
            ratingCount: 10465,
            price: '44321'
        },
    ],
};
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
const Home_needs = () => {


    const dropdownOptions = [
        { value: 'Banners', label: 'Banner' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const secondOptions = [
        { value: 'Vinly_Banners', label: 'Vinly_Banners' },
        { value: 'option5', label: 'Option 2' },
        { value: 'option6', label: 'Option 3' },
    ];
    const [selectedOption, setSelectedOption] = useState(dropdownOptions[0].value);
    const [displayData, setDisplayData] = useState(sliderData.Banners);
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setDisplayData(sliderData[selectedValue]);
    };

    return (

        <div className='my-20'>
            <h1 className="text-[#4e4e4e] xl:text-4xl text-2xl font-bold text-center my-5">Offering Custom Banners and Signs For Business/Home Needs</h1>
            <div className="rounded-lg  bg-slate-100 full p-5 f-fit ">
                <div className=" flex justify-center gap-4 items-center">
                    <p className="text-xl font-semibold">Select Your Product</p>
                    <div className="flex space-x-4">
                        {/* First Dropdown */}
                        <div className="relative">
                            <select className="dropdown bg-white border border-gray-300 p-2 rounded" value={selectedOption} onChange={handleDropdownChange}>
                                {dropdownOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Second Dropdown */}
                        <div className="relative">
                            <select className="dropdown bg-white border border-gray-300 p-2 rounded" value={selectedOption} onChange={handleDropdownChange}>
                                {secondOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <h1 className="text-black text-lg font-bold text-center my-5">Found 79 Banners for your selection</h1>

                <div className="slider-container w-[70%] mx-auto">
                    <Slider {...settings}>

                        {displayData.map((product) => (
                            <div key={product.id} className='flex justify-center p-4'>
                                <div className='bg-white shadow-lg border-2 border-gray-100 rounded-lg w-full max-w-sm'>
                                    <img src={product.image} alt={product.title} className="w-full rounded-t-lg" />
                                    <div className='p-4'>
                                        <p className="font-semibold text-center">{product.title}</p>
                                        <div className="flex items-center justify-center mt-7">
                                            <div className="flex text-yellow-500">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <p className="text-gray-500 text-sm ml-2">{product.ratingCount}</p>
                                        </div>
                                        <p className='text-center mt-2 text-lg'>Starting at <span className='font-bold'>${product.price}</span></p>
                                        <button className='bg-gray-200 px-7 py-2 text-orange-600 font-bold hover:text-white hover:bg-orange-600 w-full mt-4 flex items-center justify-center'>
                                            Customize
                                            <FaArrowRightLong className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-white border-2 border-orange-600 px-7 py-2 rounded-3xl text-orange-600 w-fit h-fit mt-4'>View All</button>
                </div>
            </div>

        </div>
    )
}

export default Home_needs