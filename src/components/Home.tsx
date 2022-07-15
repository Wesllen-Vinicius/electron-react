import React from 'react';

function AppHome() {
  return (
    <div className="grid place-items-center h-[80vh] bg-base-200">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
      <div className="mt-1 w-[95%] h-full m-10 p-8 flex   border-2 border-black border-dashed rounded-md">
        <div className="flex  text-sm text-gray-600">
          <div className="card w-60 h-60 bg-base-100 image-full">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default AppHome;
