import React from 'react'
import banner1 from '../assets/img/banner-1.webp'
import banner2 from '../assets/img/banner-2.webp'
import banner3 from '../assets/img/banner-3.webp'
import banner4 from '../assets/img/banner-4.webp'
import { useNavigate } from 'react-router-dom';


const products = [
    { id: 1, title: 'Custom Flags', image: banner1, link: '/custom-flags' },
    { id: 2, title: 'Vinyl Banners', image: banner2, link: '/custom-flags' },
    { id: 3, title: 'Step & Repeat Displays', image: banner3, link: '/custom-flags' },
    { id: 4, title: 'Canopy Tents', image: banner4, link: '/custom-flags' },
    { id: 5, title: 'Window Signs', image: banner1, link: '/custom-flags' },
    { id: 6, title: 'Table Covers & Displays', image: banner2, link: '/custom-flags' },
    { id: 7, title: 'Pop-Up Banner Displays', image: banner3, link: '/custom-flags' },
    { id: 8, title: 'Banner Stands', image: banner4, link: '/custom-flags' },
    { id: 9, title: 'Banner Stands', image: banner1, link: '/custom-flags' },
    { id: 10, title: 'Canopy Tents', image: banner2, link: '/custom-flags' },

];

const Best_sellers = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <h1 className="text-black text-3xl text-center my-2">Our Best Sellers</h1>
            <p className="text-xl text-gray-900 text-center mb-4">Boost Sales with Top-Charting Categories</p>
            <div className='grid xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {products.map(product => (
                    <div key={product.id} className='mx-auto items-center justify-center my-4'>
                        <div className='border border-gray-500 p-4 h-fit w-fit rounded-lg items-center'>
                            <img src={product.image} alt={product.title} className='w-auto h-auto' />
                        </div>
                        <p className="text-xl text-gray-900 text-center my-3 hover:text-orange-600 cursor-pointer" onClick={() => handleNavigate(product.link)}>
                            {product.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Best_sellers