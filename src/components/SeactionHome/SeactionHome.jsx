import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FaAmazon } from 'react-icons/fa';
import BackToTop from '../Other/BackToTop';

const SeactionHome = () => {
  return (
    <div className="bg-black">
    <div className="grid grid-cols-10 xs:gap-6 xs:p-6 gap-4 p-4">
      <div className="bg-white rounded-lg col-span-full sm:col-span-9 py-4 md:py-6 lg:py-10 flex sm:flex-row flex-col-reverse justify-evenly items-center lg:col-span-3/4">
        <div className="text-center font-cursive sm:text-6xl md:text-7xl text-7xl lg:text-8xl">
          <h1>DIGITAL</h1>
          <h1 className="block ml-14">
            BOOM
            <div className="inline font-nunito text-xs font-semibold ml-2">
              <FontAwesomeIcon icon={faArrowRightLong} />
              <p className="inline ml-2">FUTURE</p>
            </div>
          </h1>
          <p className="mt-2 font-nunito text-xs font-semibold lg:text-sm">Physical Asset-Based NTFs</p>
        </div>
        <div className="w-40 h-40 lg:w-52 lg:h-52">
          <div className="bg-face-image bg-cover w-full h-full rounded-full"></div>
        </div>
      </div>
      <div className="bg-orange-700 rounded-xl col-span-full sm:col-span-1 py-2 mx-20 sm:py-0 sm:mx-0 flex sm:flex-col-reverse justify-center sm:justify-evenly items-center">
        <div className="font-extrabold text-sm sm:transform sm:-rotate-90 w-40 sm:mb-20 lg:text-base">
          <p>JOIN COMMUNITY</p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="sm:mb-8 text-3xl sm:transform sm:-rotate-45 lg:mb-12" />
      </div>
      <div className="rounded-xl row-span-3 col-span-full sm:col-span-5">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3">
          <p className="w-40 sm:w-28 sm:text-xs p-4 sm:p-2 text-white font-normal md:p-4 md:w-40 md:text-sm lg:text-base lg:p-6 lg:px-8 lg:w-52">Pyysical items <span className="font-bold">paired with NTFs</span></p>
          <div className="w-48 h-56 sm:w-44 sm:h-48 lg:w-52 lg:h-56">
            <div className="bg-face-rm bg-cover w-full h-full"></div>
          </div>
        </div>
        <div className="bg-yellow-300 rounded-xl grid grid-cols-2 sm:py-3 sm:px-2 py-5 px-10 sm:text-xs md:py-5">
          <div className="flex sm:p-1 md:pl-5">
            <FaAmazon className="md:h-5" />
            <p className="pl-1 text-sm md:text-md">Fashion House</p>
          </div>
          <p className="row-span-2 md:text-sm lg:w-60 lg:text-base">We represent the confluence of the digital and physical worlds in the fashion world</p>
          <p className="font-bold mt-2 sm:ml-2 md:ml-7 md:text-lg">Unique products</p>
        </div>
      </div>
      <div className="bg-white rounded-xl col-span-full sm:col-span-5 h-40 grid grid-cols-2 p-2 text-xs gap-6">
        <button className="max-w-xs px-2 h-6 mt-4 border-2 rounded-full ml-4 border-black row-span-2">new Gen World
          <p className="text-6xl mr-10 mt-10">01</p></button>
        <p className="font-semibold mt-3">New standard by attaching physical products <span className="font-bold">to unique digital assets</span></p>
        <div className="flex">
          <div className="sm:w-6 sm:h-6 w-9 h-9">
            <div className="bg-face-image bg-cover w-full h-full rounded-full">
              <div className="sm:ml-5 ml-8 bg-face-image bg-cover w-full h-full rounded-full">
                <div className="sm:ml-5 ml-8 bg-face-image bg-cover w-full h-full rounded-full">
                  <p className="ml-10 sm:ml-7 w-32 font-semibold">Lets Join to Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white rounded-lg col-span-5 border-2 border-yellow-200 p-1 grid grid-cols-5 py-2 sm:flex justify-between text-xs">
        <div className="flex col-span-3">
          <p className="font-extrabold text-base">.</p>
          <p className="ml-1 w-32">We create the foshion of the future</p>
        </div>
        <p className="pt-2">23.09.2022</p>
        <div className="w-6 h-6 col-span-full col-start-3 sm:mr-10 sm:mt-1">
          <div className="sm:ml-2 bg-face-image bg-cover w-full h-full rounded-full">
            <div className="ml-5 bg-face-image bg-cover w-full h-full rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="text-white rounded-lg col-span-5 border-2 border-yellow-200 p-1 grid grid-cols-5 py-2 sm:flex justify-between text-xs">
        <div className="flex col-span-3">
            <p className="font-extrabold text-base">.</p>
            <p className="ml-1 w-32">We create the foshion of the future</p>
        </div>
        <p className="pt-2 sm:pr-1">23.09.2022</p>
        <div className="col-span-full text-center pl-3 sm:pl-0 pt-2 sm:pt-1">
          <button className="py-1 px-6 sm:px-3 bg-sky-500 rounded-full">DETAILS</button>
        </div>
      </div>
      
    </div>
      <BackToTop />
    </div>
  )
}

export default SeactionHome