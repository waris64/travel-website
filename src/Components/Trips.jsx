const Trips = () => {
    return (
        <form class="max-w-sm w-auto mx-auto border-2 px-5  text- rounded mt-9 pb-4 overflow-hidden">
            <h1 className="text-3xl font-semibold italic text-center pt-3 text-black pb-8">Book  Your Trip </h1>

            <div
                id="date-range-picker"
                data-rangepicker=""
                className="flex items-center"
            >
                {/* Start Date Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        id="datepicker-range-end"
                        name="end"
                        type="date"
                        className="
                        text-sm
                        rounded-lg 
                        block w-full ps-10 p-2.5  
                        border-2"
                    />
                </div>

                <span className="mx-4 text-gray-500">to</span>

                {/* End Date Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        id="datepicker-range-end"
                        name="end"
                        type="date"
                        className="
                        text-sm
                        rounded-lg 
                        block w-full ps-10 p-2.5  
                        border-2"
                    />
                </div>
            </div>
            <div
                className="flex items-center"
            >
                {/* Start Destination Input */}
              <input type="text" className="border-2 rounded" />

                <span className="mx-4 text-gray-500">to</span>

                {/* End Date Input */}
                <div className="relative">
                   
                </div>
            </div>
            <button type="submit" class="text-black  hover: focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4db5b8] hover:cursor-pointer  ">Register new account</button>
        </form>


    )

}
export default Trips