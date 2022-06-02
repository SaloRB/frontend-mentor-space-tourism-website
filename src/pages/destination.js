import Nav from '../components/Nav'
import Image from 'next/image'
import { useState } from 'react'
import { destinations } from '../../data'

function Destination() {
  const [destinationName, setDestinationName] = useState('Moon')

  const destination = destinations.find(
    (destination) => destination.name === destinationName
  )

  return (
    <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-8 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Nav />

      <main className="text-center mt-6 md:mt-10 px-6 md:px-10">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 md:mb-[60px] text-white md:text-left">
          <span className="font-bold md:text-xl mr-[18px] opacity-25">01</span>
          Pick your destination
        </h2>

        <div className="relative h-[170px] w-[170px] md:h-[300px] md:w-[300px] mx-auto">
          <Image src={destination.images.png.substring(1)} layout="fill" />
        </div>

        <div className="flex justify-center space-x-7 md:space-x-10 uppercase mt-5 md:mt-14 font-subtitle tracking-[2.36px]">
          {destinations.map((destination) => (
            <p
              key={destination.name}
              onClick={() => setDestinationName(destination.name)}
              className={`${
                destinationName === destination.name && 'selected'
              } text-sm md:text-base cursor-pointer`}
            >
              {destination.name}
            </p>
          ))}
        </div>

        <h1 className="font-title text-[56px] md:text-[80px] uppercase text-white mt-5 md:mt-8">
          {destination.name}
        </h1>

        <p className="font-body text-[15px] -mt-1 md:px-20">
          {destination.description}
        </p>

        <div className="w-[327px] md:w-[573px] h-[1px] bg-[#383B4B] my-8 mx-auto" />

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-24">
          <div className="uppercase mb-8">
            <p className="font-subtitle text-sm tracking-[2.36px] mb-3">
              Avg. Distance
            </p>
            <p className="font-title text-3xl text-white">
              {destination.distance}
            </p>
          </div>

          <div className="uppercase mb-8">
            <p className="font-subtitle text-sm tracking-[2.36px]">
              Est. Travel Time
            </p>
            <p className="font-title text-3xl text-white mt-3">
              {destination.travel}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination
