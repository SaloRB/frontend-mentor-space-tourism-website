import Nav from '../components/Nav'
import Image from 'next/image'
import { crew } from '../../data'
import { useState } from 'react'

function Crew() {
  const [crewMemberName, setCrewMemberName] = useState('Douglas Hurley')

  const crewMember = crew.find((crew) => crew.name === crewMemberName)

  return (
    <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24">
      <Nav />

      <main className="text-center mt-12 px-6">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 text-white">
          <span className="font-bold mr-[18px] opacity-25">02</span>
          Meet your crew
        </h2>

        <Image
          src={crewMember.images.png.substring(1)}
          width={327}
          height={223}
          objectFit="contain"
        />

        <div className="w-[327px] h-[1px] bg-[#383B4B] -mt-[6px] mb-8 mx-auto" />

        <div className="flex items-center justify-center space-x-4">
          {crew.map((member) => (
            <div
              onClick={() => setCrewMemberName(member.name)}
              className={`h-[10px] w-[10px] ${
                member.name === crewMemberName ? 'bg-white' : 'bg-[#979797]'
              } rounded-full cursor-pointer`}
            />
          ))}
        </div>

        <div className="mt-8">
          <p className="text-white opacity-50 uppercase font-title">
            {crewMember.role}
          </p>
          <p className="font-title text-white uppercase text-2xl mb-4">
            {crewMember.name}
          </p>
          <p className="font-body leading-8 text-sm">{crewMember.bio}</p>
        </div>
      </main>
    </div>
  )
}

export default Crew
