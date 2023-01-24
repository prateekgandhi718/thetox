import React from 'react'
import { Link } from "react-router-dom";

import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='text-3xl py-10 px-20' style={{color: '#323130'}}>DAILY STACKS</div>
    <div className="grid grid-rows-1 md:grid-cols-2 px-20 py-5 gap-8 border-solid  ">
      
     <div className='grid grid-flow-row gap-8  '>
        <Link to = "/summary" className="flex flex-col items-center bg-transparent rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
            <img className="rounded-full h-40 w-40 md:rounded-lg p-2" src={require("../Designs/DailySummary1.svg").default} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your daily Twitter summary</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This summary features the most relevant Tweets and stories shared by the people you are connected to on Twitter.</p>
            </div>
        </Link>

        <Link to = "/summary" className="flex flex-col items-center bg-transparent rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
            <img className="rounded-full h-40 w-40 md:rounded-lg p-2" src={require("../Designs/DailySummary1.svg").default} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your daily Twitter summary</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This summary features the most relevant Tweets and stories shared by the people you are connected to on Twitter.</p>
            </div>
        </Link>
      
        
     </div>  

     <div className='flex flex-col items-center justify-center'>
        <img src={require('../Designs/AMomentToRelaxSvg.svg').default} alt='mySvgImage' />
     </div>
    </div>


    <Footer/>
    </>
  )
}

export default Home
