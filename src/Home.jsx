import React from "react";

function Home() {
    const Data = [
        {
            id : 1,
            title : 'Livingroom Designs',
            content : "In envisioning the design for a living room, consider blending comfort with aesthetic appeal, creating a space that invites relaxation and socializing. Start with the layout, ensuring furniture placement encourages conversation and facilitates movement. Select a color scheme that reflects your personality and enhances the room's atmosphere, whether it's calming neutrals, vibrant accents, or a sophisticated monochrome palette.When choosing furniture, prioritize comfort without sacrificing style. A plush sofa, cozy armchairs, and a luxurious rug can form the foundation of a welcoming seating area. Add accent pieces such as coffee tables, side tables, and ottomans to balance functionality with visual interest.Accessorize thoughtfully to inject personality into the space. Incorporate artwork, decorative objects, and textiles like throw pillows and blankets to add texture and warmth. Consider the play of light, integrating both natural illumination and strategic lighting fixtures to create ambiance throughout the day and evening.Lastly, infuse the room with elements that reflect your interests and lifestyle, whether it's a collection of books, cherished mementos, or a statement piece of furniture. Ultimately, aim to craft a living room that not only looks inviting but also feels like a true reflection of your unique taste and personality."

        },

        {
            id : 2 ,
            title : "Dining designs",
            content : "Dining design seamlessly integrates aesthetics and functionality to craft an immersive experience for diners. It encompasses everything from seating arrangements and lighting choices to décor elements and color palettes. Each detail contributes to the overall ambiance and personality of the space. Whether it's the innovative layout of tables encouraging social interaction or the careful selection of materials adding texture and warmth, every aspect of dining design plays a vital role in shaping the guest experience. From the moment diners enter the restaurant to the final moments of their meal, the design elements work together to create a memorable and inviting atmosphere that leaves a lasting impression."
        }
    ]

    const displayData = () => {
        const link = document.getElementsByClassName('clickme')
        const displayArea = document.getElementsByClassName('display')
        const content =
        <div>     `
         ${Data.map(article =>`
            <div key "${article.id}">
                <p>${article.title}"</p>
                <p>${article.content}"</p>
            <div>
             `).join('')}
            `
            </div>
        ;
        link.addEventListener('click',() => {
            displayArea.innerHTML = content
        })
    }  
    return ( 
        <>
        <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none"><button className="clickme">Read More</button></p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" />
                    <div className="display">

                    </div>
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
                </div>
                </div>
                <div className="relative">
                <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-blue-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative">
                <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
                <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                </div>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                    <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
     );
}

export default Home;