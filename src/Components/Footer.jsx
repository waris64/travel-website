import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white w-full'>
            <div className='flex flex-col md:px-8 px-4'>

                {/* Top Section: Logo & Social Icons */}
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-4'>
                    <div className=''>
                        <h1 className='text-3xl md:text-4xl font-bold'>Trippy</h1>
                        <p className='text-lg md:text-2xl'>Choose your favourite destination</p>
                    </div>

                    <div className='flex gap-4 text-3xl md:text-4xl'>
                        <i className="fa-brands fa-square-facebook cursor-pointer hover:text-[#01959a]"></i>
                        <i className="fa-brands fa-square-instagram cursor-pointer hover:text-[#01959a]"></i>
                        <i className="fa-brands fa-square-twitter cursor-pointer hover:text-[#01959a]"></i>
                        <i className="fa-brands fa-linkedin cursor-pointer hover:text-[#01959a]"></i>
                    </div>
                </div>

                {/* Links Section */}

                <div className='grid grid-cols-2 md:flex md:flex-row gap-y-6  gap-x-4  py-6'>

                    {/* Project */}
                    <div className='md:flex-1'>
                        <h1 className='text-xl font-bold pb-3'>Project</h1>
                        <div className='flex flex-col gap-2 text-base'>
                            <a href="#">Changelog</a>
                            <a href="#">Status</a>
                            <a href="#">License</a>
                            <a href="#">All Versions</a>
                        </div>
                    </div>

                    {/* Community */}
                    <div className='md:flex-1'>
                        <h1 className='text-xl font-bold pb-3'>Community</h1>
                        <div className='flex flex-col gap-2 text-base'>
                            <a href="#">Github</a>
                            <a href="#">Issues</a>
                            <a href="#">Project</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>

                    {/* Help */}
                    <div className='md:flex-1'>
                        <h1 className='text-xl font-bold pb-3'>Help</h1>
                        <div className='flex flex-col gap-2 text-base'>
                            <a href="#">Support</a>
                            <a href="#">Troubleshooting</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>

                    {/* Others */}
                    <div className='md:flex-1'>
                        <h1 className='text-xl font-bold pb-3'>Others</h1>
                        <div className='flex flex-col gap-2 text-base'>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">License</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;
