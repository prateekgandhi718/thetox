import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col py-10 px-20 gap-8 border-solid ">
      <div className='text-base' style={{color: '#323130'}}>DAILY STACKS</div>
      
      <Link to = "/summary" className="flex flex-col items-center bg-transparent border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover m-2 rounded-full h-48 w-48 md:rounded-full p-2 ring-2 ring-gray-300" src={require("../Designs/TwitterImageLogo.png")} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your daily Twitter summary</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This summary features the most relevant Tweets and stories shared by the people you are connected to on Twitter.</p>
          </div>
      </Link>

      <Link to = "/summary" className="flex flex-col items-center bg-transparent border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover m-2 rounded-full h-48 w-48 md:rounded-full p-2 ring-2 ring-gray-300" src={require("../Designs/LinkdinImageLogo.png")} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your daily Linkdin summary</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This summary features the most relevant posts and stories shared by the people you are connected to on Linkdin.</p>
          </div>
      </Link>

    </div>
  )
}

export default Home
