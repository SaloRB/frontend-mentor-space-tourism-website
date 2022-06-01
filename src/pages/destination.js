import Nav from '../components/Nav'
import Image from 'next/image'
import { useState } from 'react'
import { destinations } from '../../data'

function Destination({ destinations }) {
  const [destinationName, setDestinationName] = useState('Moon')

  const destination = destinations.find(
    (destination) => destination.name === destinationName
  )

  console.log(destination)

  return (
    <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-8">
      <Nav />

      <main className="text-center mt-12 px-6">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 text-white">
          <span className="font-bold mr-[18px] opacity-25">01</span>
          Pick your destination
        </h2>

        <Image
          src={destination.images.png.substring(1)}
          width={170}
          height={170}
        />

        <div className="flex justify-center space-x-7 uppercase mt-8 font-subtitle tracking-[2.36px]">
          {destinations.map((destination) => (
            <p
              key={destination.name}
              onClick={() => setDestinationName(destination.name)}
              className={`${
                destinationName === destination.name && 'selected'
              } cursor-pointer`}
            >
              {destination.name}
            </p>
          ))}
        </div>

        <h1 className="font-title text-6xl uppercase text-white mt-5">
          {destination.name}
        </h1>

        <p className="font-body leading-8">{destination.description}</p>

        <div className="w-[327px] h-[1px] bg-[#383B4B] my-8 mx-auto" />

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
          <p className="font-title text-3xl text-white">{destination.travel}</p>
        </div>
      </main>
    </div>
  )
}

export default Destination

export async function getStaticProps() {
  return {
    props: {
      destinations,
    },
  }
}
