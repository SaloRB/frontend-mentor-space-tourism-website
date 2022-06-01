import Nav from '../components/Nav'
import { useState } from 'react'
import Image from 'next/image'

function Destination() {
  const [destination, setDestination] = useState('moon')

  return (
    <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-8">
      <Nav />

      <main className="text-center mt-12 px-6">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8">
          <span className="font-bold mr-[18px] opacity-25">01</span>
          Pick your destination
        </h2>

        <Image
          src="/assets/destination/image-moon.png"
          width={170}
          height={170}
        />

        <div className="flex justify-center space-x-7 uppercase mt-8 font-subtitle tracking-[2.36px]">
          <p className="selected">Moon</p>
          <p>Mars</p>
          <p>Europe</p>
          <p>Titan</p>
        </div>

        <h1 className="font-title text-6xl uppercase text-white mt-5">Moon</h1>

        <p className="font-body leading-8">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className="w-[327px] h-[1px] bg-[#383B4B] my-8 mx-auto" />

        <div className="uppercase mb-8">
          <p className="font-subtitle text-sm tracking-[2.36px] mb-3">
            Avg. Distance
          </p>
          <p className="font-title text-3xl text-white">225 MIL. km</p>
        </div>

        <div className="uppercase mb-8">
          <p className="font-subtitle text-sm tracking-[2.36px]">
            Est. Travel Time
          </p>
          <p className="font-title text-3xl text-white">9 Months</p>
        </div>
      </main>
    </div>
  )
}

export default Destination
