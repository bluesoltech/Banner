import React from 'react'
import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Home_needs from '../components/Home_needs'
import Best_sellers from '../components/Best_sellers'
import Product from '../components/Product'
import New_arrivals from '../components/New_arrivals'


const Home = () => {
  return (
    <div>
      {/* <div className=" leading-[40px] text-headingColor ">
        <div className="flex bg-slate-500 justify-center ">
          <div className="w-[50%] h-[1000px] bg-red-100 text-[20px]">
            <h1>March to the <br></br><spane className="text-[33px]text-gray-600">Branding Beats</spane></h1>
            <p>Up to 25% Off Sitewide</p>

            <button class=" flex  button">
              <p>Code:<spane className="text-red-400">SALE25 </spane></p>
              <div class="top ">Shop Now</div>
            </button>
          </div>
          <div className="w-[50%] h-[600px] bg-orange-200">
          </div>
        </div>
      </div> */}
       <Product/>
      <Home_needs />
      <Best_sellers />
      <New_arrivals/>
      <Banner />
      <Blog />
    </div>
  )
}

export default Home