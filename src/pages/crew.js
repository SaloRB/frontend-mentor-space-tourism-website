import Nav from '../components/Nav'
import Image from 'next/image'
import { crew } from '../../data'
import { useState } from 'react'

function Crew() {
  const [crewMemberName, setCrewMemberName] = useState('Douglas Hurley')

  const crewMember = crew.find((crew) => crew.name === crewMemberName)

  return (
    <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24 md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] md:h-screen">
      <Nav />

      <main className="text-center mt-12 md:mt-10 px-6 md:px-10">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 md:mb-[60px] text-white md:text-left md:text-2xl">
          <span className="font-bold md:text-xl mr-[18px] opacity-25">02</span>
          Meet your crew
        </h2>

        <div className="md:hidden">
          <Image
            src={crewMember.images.png.substring(1)}
            width={327}
            height={223}
            objectFit="contain"
          />
          <div className="w-[327px] h-[1px] bg-[#383B4B] -mt-[6px] mb-8 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-col-reverse">
          <div className="flex items-center justify-center space-x-4">
            {crew.map((member) => (
              <div
                key={member.name}
                onClick={() => setCrewMemberName(member.name)}
                className={`h-[10px] w-[10px] ${
                  member.name === crewMemberName ? 'bg-white' : 'bg-gray-700'
                } rounded-full cursor-pointer hover:bg-gray-500`}
              />
            ))}
          </div>

          <div className="mt-8 md:mt-0">
            <p className="text-white opacity-50 uppercase font-title md:text-2xl md:mb-2">
              {crewMember.role}
            </p>
            <p className="font-title text-white uppercase text-2xl mb-4 md:text-[40px]">
              {crewMember.name}
            </p>
            <p className="font-body leading-8 text-sm md:text-base md:px-24 md:mb-10">
              {crewMember.bio}
            </p>
          </div>
        </div>

        <img
          src={crewMember.images.webp.substring(1)}
          alt=""
          className="hidden w-[456px] h-[572px] md:block mx-auto absolute bottom-0 left-0 right-0 object-contain"
        />
      </main>
    </div>
  )
}

export default Crew
