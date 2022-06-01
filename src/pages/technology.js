import Nav from '../components/Nav'
import Image from 'next/image'
import { technology } from '../../data'
import { useState } from 'react'

function Technology() {
  const [techName, setTechName] = useState('Launch vehicle')

  const tech = technology.find((tech) => tech.name === techName)

  return (
    <div className="bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24">
      <Nav />

      <main className="text-center mt-12">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 text-white">
          <span className="font-bold mr-[18px] opacity-25">03</span>
          Space launch 101
        </h2>

        <div className="relative h-[170px] w-full">
          <Image
            src={tech.images.landscape.substring(1)}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          {technology.map((tech, index) => (
            <div
              onClick={() => setTechName(tech.name)}
              key={tech.name}
              className={`${
                tech.name === techName
                  ? 'bg-white text-dark'
                  : 'bg-transparent text-white'
              } cursor-pointer flex items-center justify-center h-[40px] w-[40px]  rounded-full border border-white  font-title`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="mt-7">
          <p className="uppercase font-subtitle tracking-[2.36px] text-sm mb-2">
            The Terminology
          </p>
          <p className="font-title text-white uppercase text-2xl mb-4">
            {tech.name}
          </p>
          <p className="font-body leading-8 text-sm px-8">{tech.description}</p>
        </div>
      </main>
    </div>
  )
}

export default Technology
