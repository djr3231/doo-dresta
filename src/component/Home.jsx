import React from "react";

const Home = () => {
  return (
    <div id="main-wraper">
      <div className="p-10 bg-gradient-to-r from-indigo-500 to-blue-800">
        <div className="container mx-auto ">
          <div className="flex min-h-100px items-center justify-center">
            <div className="px-6 text-center text-black md:px-12">
              <p className="mb-4 text-2xl font-bold">
                Find your table for any occasion
              </p>
            </div>
          </div>

          <div className="relative mx-auto mb-4 flex max-w-[70%] flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="State, City or Town"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-Cyan-400 hover:shadow-lg focus:bg-Cyan-400 focus:shadow-lg focus:outline-none focus:bg=whit active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <span>let's go</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-3 mx-auto ">


      </div>
    </div>
  );
};

export default Home;
