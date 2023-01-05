import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex flex-col py-10 px-20 gap-8 border-solid ">
        <div className="flex flex-col items-center bg-transparent md:flex-row md:gap-10 border-solid ">
          <img
            className="object-cover mb-1 rounded-full h-20 w-20 md:h-20 md:w-20 md:rounded-full"
            src={require("../Designs/TwitterImageLogo.png")}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Twitter summary
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              For Prateek Gandhi
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              11 curated tweets
            </p>
          </div>
        </div>
      </div>

      {/* START OF CARDS */}
      <div className="grid py-10 px-20 md:grid-cols-6 gap-8 border-solid ">
        <div className="md:flex md:flex-col md:justify-center md:gap-2 border-solid hidden ">
          <div
            style={{
              width: "0.25rem",
              height: "1.13rem",
              borderRadius: "0l125rem",
              backgroundColor: "rgb(10 135 118)",
            }}
          ></div>
          <div
            style={{
              width: "0.25rem",
              height: "1.13rem",
              borderRadius: "0l125rem",
              backgroundColor: "rgb(10 135 118)",
            }}
          ></div>
          <div
            style={{
              width: "0.25rem",
              height: "1.13rem",
              borderRadius: "0l125rem",
              backgroundColor: "rgb(10 135 118)",
            }}
          ></div>
          <div
            style={{
              width: "0.25rem",
              height: "1.13rem",
              borderRadius: "0l125rem",
              backgroundColor: "rgb(10 135 118)",
            }}
          ></div>
        </div>
        <div className="md:col-span-3 border-solid ">
          <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="overflow-hidden w-full max-h-52">
              <img
                className="rounded-t-lg"
                src={require("../Designs/TwitterImageLogo.png")}
                alt=""
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Here are the biggest
                enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:col-span-2 border-solid ">
          <img
            className="w-10 h-10 rounded-full"
            src={require("../Designs/ProfilePic.jpg")}
            alt=""
          />
          <div className="font-medium dark:text-white">
            <div>CURATED FOR</div>
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
