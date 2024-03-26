import React, { useState } from 'react';
import { FaTag, FaPaintBrush, FaStar } from 'react-icons/fa';

const Blog = () => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className='w-[70%] mx-auto'>
            <div className="p-4 bg-slate-50 full f-fit rounded-lg">
                <h1 className="text-black font-2xl font-bold">
                    Buy Customizable Signs/Banners with Free Design Templates & 24/7 Support
                </h1>
                <p className="text-gray-800 mt-2">BannerBuzz is a leading e-commerce company that is dedicated to making your brand/business visible with quality printed signage solutions. We aspire to be the most customer-focused organization and are proud to be acknowledged every day by our customers for our customized products. Customers can buy and showcase their products in any event in a grandeur way and use the best marketing materials that aid in creatively promoting their brand. To name a few, customized banners are very helpful for directing customers in HoReCa (Hotel, Restaurant, Catering) establishments, as well as for greeting and directing patients and visitors in hospitals. You can customize our products as per your choice that resonates with the brand/event and get them delivered to your</p>

                {!isReadMore && (
                    <div>
                        <h1 className="text-black font-2xl font-bold mt-2">
                            Making Online Print Services Accessible, Convenient, and Budgeted
                        </h1>
                        <p className="text-gray-800 mt-2">
                            From custom banner printing, quality stands & displays, personalized table covers & throws, to printed Flags; name what your signage need is and we’ll turn it into reality. The pride we take in designing and printing comes from our commitment to product quality, the best price guarantee, and print expertise. Our products will help set you uniquely apart from your competitors and help you achieve your marketing and advertising goals. Whether you’re a retail business, an event exhibitor, corporate entity, reseller or an individual, we invite you to take a plunge inside the world of signs and discover advertising solutions made exclusively for your brand.
                        </p>
                        <p className="text-gray-800 mt-2">
                            The approach to designing and printing that we offer here is simple and straightforward. All you need is a few quick clicks to get your preferred signage printed at the lowest price. To make this a completely customer-centric online print platform, we offer products that are completely customizable and personalizable. To place your online order, you get to customize your chosen banner and signs online based on color, size, finishing options, and design. We believe that no one understands your brand better than you. This is why the free design tool has been incorporated into our online ordering process. The purpose of this design tool is to assist you in creating a unique design for your brand just the way you want. To make it even more convenient, you can upload your print-ready personalized design in a single click at checkout. Should you need us, our in-house team of design and print experts are at your disposal to assist at any point in the order process.
                        </p>
                    </div>
                )}

                <button
                    onClick={toggleReadMore}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-2"
                >
                    {isReadMore ? 'Read More' : 'Read Less'}
                </button>
            </div>
            <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-auto my-6">
                <div className="flex flex-col items-center text-center px-5 border-r-hidden xl:border-gray-200 xl:border-r-2">
                    <div className='flex xl:flex-row flex-col justify-between items-center'>
                        <FaTag className="text-purple-500 text-5xl mb-3 mr-4" />
                        <h2 className="text-xl font-bold mb-2">Best Price</h2>
                    </div>
                    <p className="text-gray-600">
                        BannerBuzz offers the industry's best prices while using only the highest
                    </p>
                </div>
                <div className="flex flex-col items-center text-center px-5 xl:border-gray-200 xl:border-r-2">
                    <div className='flex xl:flex-row flex-col justify-between items-center'>
                        <FaPaintBrush className="text-purple-500 text-5xl mb-3 mr-4" />
                        <h2 className="text-xl font-bold mb-2">Free Design Proof</h2>
                    </div>
                    <p className="text-gray-600">
                        Our industry-leading designers provide free proofs so you can be sure
                    </p>
                </div>
                <div className="flex flex-col items-center text-center px-5 ">
                    <div className='flex xl:flex-row flex-col justify-between items-center'>
                        <FaStar className="text-purple-500 text-5xl mb-3 mr-4" />
                        <h2 className="text-xl font-bold mb-2">Best Quality</h2>
                    </div>
                    <p className="text-gray-600">
                        If you’re not satisfied, we’re not satisfied. We’ll reprint or refund your order - guaranteed
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog