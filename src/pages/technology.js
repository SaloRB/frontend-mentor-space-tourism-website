import Nav from '../components/Nav'
import Image from 'next/image'
import { technology } from '../../data'
import { useState } from 'react'

function Technology() {
  const [techName, setTechName] = useState('Launch vehicle')

  const tech = technology.find((tech) => tech.name === techName)

  return (
    <div className="bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24 md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      <Nav />

      <main className="text-center mt-12 md:mt-14">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 md:mb-[65px] text-white md:text-left md:text-xl md:pl-10">
          <span className="font-bold md:text-xl mr-[18px] opacity-25">03</span>
          Space launch 101
        </h2>

        <div className="relative md:h-[310px] h-[170px] w-full">
          <Image
            src={tech.images.landscape.substring(1)}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8 md:mt-14">
          {technology.map((tech, index) => (
            <div
              onClick={() => setTechName(tech.name)}
              key={tech.name}
              className={`${
                tech.name === techName
                  ? 'bg-white text-dark border-white'
                  : 'bg-transparent text-white border-gray-500'
              } cursor-pointer flex items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] h- rounded-full font-title md:text-2xl border hover:border-white`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="mt-7 md:mt-11">
          <p className="uppercase font-subtitle tracking-[2.36px] text-sm mb-2 md:text-base md:mb-6">
            The Terminology
          </p>
          <p className="font-title text-white uppercase text-2xl mb-4 md:text-[40px] md:mb-6">
            {tech.name}
          </p>
          <p className="font-body leading-8 text-sm md:text-base px-8 md:px-40">
            {tech.description}
          </p>
        </div>
      </main>
    </div>
  )
}

export default Technology
